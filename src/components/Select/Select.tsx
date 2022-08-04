import React, {ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import {SelectItemType, SelectType} from "./types";
import {Checkbox} from "../Checkbox/Checkbox";
import {IconArrowAltDown} from "../Icon/IconArrowAltDown";
import {CheckboxGetValueParamType} from "../Checkbox/types";
import "./Select.scss";

const selectedItems: Record<string, SelectItemType> = {};

export const Select = ({isOpen = false, label, items, getValues}: SelectType): ReactElement => {
    const [showItems, setShowItems] = useState(isOpen);
    const [labelElements, setLabelElements] = useState<(string|React.ReactNode)[]>([label]);
    const labelRef = useRef<HTMLElement>(null);

    useEffect(() => {

        let labels: string[] = [];

        items.map((item) => {

            if (item.isChecked) {
                selectedItems[item.name] = item;
                labels.push(item.label as string);
            }

            return item;
        });

        setLabelElements(labels);

    }, [items, label]);

    const getValue = useCallback((checkbox: CheckboxGetValueParamType) => {
        if (checkbox.isChecked) {
            selectedItems[checkbox.name] = {name: checkbox.name, isChecked: checkbox.isChecked, label: checkbox.label};
        } else {
            delete selectedItems[checkbox.name];
        }

        const values = Object.values(selectedItems);

        if (values.length === 0) {
            setLabelElements([]);
            return;
        }

        let labels: string[] = [];

        values.map((item) => {
            if (item.isChecked && item.label) {
                labels.push(item.label as string);
            }

            return item;
        });

        setLabelElements(labels);

        if (getValues) {
            getValues(values);
        }

    }, [getValues]);

    let content = [<span className={"default _f-f-semi-bold"}>{label}</span>];

    if (labelElements.length > 0) {
        content = labelElements.map((content, key) => {
            return <span className={"tag"} key={key}>{content}</span>
        })
    }

    return (
        <div className={"_ooneex-select" + (showItems ? " open" : "")}>
            <div className={"trigger"} onClick={() => setShowItems(!showItems)}>
                <span className={"label"} ref={labelRef}>
                    {content}
                </span>
                <IconArrowAltDown size={"xs"} />
            </div>

            {
                showItems ? (
                    <div className={"items-container"}>
                        {
                            items.map((item, key) => {
                                return (
                                    <div className={"row"} key={key}>
                                        <Checkbox label={item.label} name={item.name} checked={!!selectedItems[item.name]} getValue={getValue}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }

        </div>
    );
};
