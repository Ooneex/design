import React from 'react';
import ReactDOM from 'react-dom/client';
import {Terminal} from "./components/Terminal/Terminal";
import "./index.scss";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>
        <Terminal code={""} />
    </div>
  </React.StrictMode>
);
