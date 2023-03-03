import { useEffect, useState } from "react";
import { PAGInit, types as PAGTypes } from "libpag";
import Loading from "./Loading";
import Viewer from "./Viewer";
import "./App.css";

declare global {
  interface Window {
    PAG: PAGTypes.PAG;
  }
}

function App() {
  const [loaded, setLoaded] = useState(false);
  let initializing = false;

  useEffect(() => {
    if (!window.PAG && !initializing) {
      initializing = true;
      PAGInit().then((module) => {
        window.PAG = module;
        console.log("PAG", module);
        setLoaded(true);
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="box">{loaded ? <Viewer /> : <Loading />}</div>
    </div>
  );
}

export default App;
