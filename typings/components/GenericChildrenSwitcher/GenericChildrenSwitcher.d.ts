import * as React from 'react';
import { DropdownProps, DropdownOption } from '../../common-elements/dropdown';
export interface GenericChildrenSwitcherProps<T> {
    items?: T[];
    options: DropdownOption[];
    label?: string;
    renderDropdown: (props: DropdownProps) => JSX.Element;
    children: (activeItem: T) => JSX.Element;
}
export interface GenericChildrenSwitcherState {
    activeItemIdx: number;
}
/**
 * TODO: Refactor this component:
 * Implement rendering dropdown/label directly in this component
 * Accept as a parameter mapper-function for building dropdown option labels
 */
export declare class GenericChildrenSwitcher<T> extends React.Component<GenericChildrenSwitcherProps<T>, GenericChildrenSwitcherState> {
    constructor(props: any);
    switchItem: ({ value }: {
        value: any;
    }) => void;
    render(): JSX.Element | null;
}
