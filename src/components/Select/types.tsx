import {CheckboxGetValueParamType} from "../Checkbox/types";
import React from "react";

export type SelectItemType = Pick<CheckboxGetValueParamType, "name" | "isChecked"> & {label: React.ReactNode | string};

export type SelectType = {
    isOpen?: boolean,
    label?: React.ReactNode | string,
    items: SelectItemType[],
    getValues?: (values: SelectItemType[]) => void,
};
