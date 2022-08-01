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
import {ToggleFilter} from "./components/ToggleFilter/ToggleFilter";
import {ToggleFilterElementType, ToggleFilterType} from "./components/ToggleFilter/types";
import {Spacer} from "./components/Spacer/Spacer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const filters: ToggleFilterElementType[] = [
    {isActive: true, label: "filtru", name:"test"},
    {isActive: true, label: "filtru2", name:"test"}

];


root.render(
  <React.StrictMode>
    <div>
        <ToggleFilter filters={filters}/>
        <Spacer/>
        <ToggleFilter filters={filters}/>
    </div>
  </React.StrictMode>
);
