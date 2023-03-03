import { useEffect, useRef } from "react";

import "./Viewer.css";

import type { PAGFile } from "libpag/types/pag-file";
import { PAGView } from "libpag/types/pag-view";

function Viewer() {
  const canvasEl = useRef(null);
  let pagView: PAGView;
  let pagFile: PAGFile;

  useEffect(() => {
    fetch("https://pag.art/file/like.pag")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        if (!canvasEl.current) return;
        const { PAGFile, PAGView } = window.PAG;
        pagFile = PAGFile.loadFromBuffer(buffer);
        PAGView.init(pagFile, canvasEl.current).then((view) => {
          if (!view) return;
          pagView = view;
          pagView.setRepeatCount(0);
          pagView.play();
        });
      });
    return () => {
      if (pagView) {
        pagView.destroy();
      }
    };
  }, [canvasEl]);

  return (
    <div className="Viewer">
      <canvas className="view" ref={canvasEl} width={600} height={600}></canvas>
    </div>
  );
}

export default Viewer;
