import React from 'react';
import ReactDOM from 'react-dom/client';
import {Select} from "./components/Select/Select";
import {SelectItemType} from "./components/Select/types";
import {Button} from "./components/Button/Button";
import {Checkbox} from "./components/Checkbox/Checkbox";
import {H1} from "./components/Heading/H1";
import {H2} from "./components/Heading/H2";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <div>
        <H2 variant={"secondary"}>Test</H2>
    </div>
  </React.StrictMode>
);
