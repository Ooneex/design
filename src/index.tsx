import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import {Highlight} from "./components/Highlight/Highlight";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={"app"}>
        <Highlight type={"warning"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi impedit quis unde. Aliquam aliquid excepturi, natus odio porro quidem ut?
        </Highlight>
    </div>
  </React.StrictMode>
);
