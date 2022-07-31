import React from 'react';
import ReactDOM from 'react-dom/client';
import {Select} from "./components/Select/Select";
import {SelectItemType} from "./components/Select/types";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const items: SelectItemType[] = [
    {label: "Item 1", name: "item1", isChecked: false},
    {label: "Item 2", name: "item2", isChecked: false},
    {label: "Item 3", name: "item3", isChecked: false},
    {label: "Item 4", name: "item4", isChecked: true},
    {label: "Item 5", name: "item5", isChecked: false},
    {label: "Item 6", name: "item6", isChecked: false},
];

root.render(
  <React.StrictMode>
    <div>
        <Select items={items} label={"Select a value"} isOpen={true}/>
    </div>
  </React.StrictMode>
);
