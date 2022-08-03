import React from 'react';
import ReactDOM from 'react-dom/client';
import {Terminal} from "./components/Terminal/Terminal";
import "./index.scss";
import {IdeaContainer} from "./components/IdeaContainer/IdeaContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={"app"}>
       <IdeaContainer text={"bik"}/>
    </div>
  </React.StrictMode>
);
