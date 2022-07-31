import React from 'react';
import ReactDOM from 'react-dom/client';
import {Select} from "./components/Select/Select";
import {SelectItemType} from "./components/Select/types";
import {Button} from "./components/Button/Button";
import {Checkbox} from "./components/Checkbox/Checkbox";
import {H1} from "./components/Heading/H1";
import {H2} from "./components/Heading/H2";
import {Text} from "./components/Text/Text";
import {TextType} from "./components/Text/types";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const children: TextType[] = [
    {children: "text2"},
];

root.render(
  <React.StrictMode>
    <div>
        <Text>Test</Text>
    </div>
  </React.StrictMode>
);
