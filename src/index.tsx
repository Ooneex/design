import React from 'react';
import ReactDOM from 'react-dom/client';
import {Terminal} from "./components/Terminal/Terminal";
import "./index.scss";
import {YoutubeContainer} from "./components/YoutubeContainer/YoutubeContainer";
import {WarningContainer} from "./components/WarningContainer/WarningContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={"app"}>
        <WarningContainer text={"bk"}/>
    </div>
  </React.StrictMode>
);
