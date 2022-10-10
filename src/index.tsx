import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import {Button} from "./components/Button/Button";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={"app"}>
        <Button onClick={() => console.log('click')} variant={"primary"}>Loading...</Button>
    </div>
  </React.StrictMode>
);
