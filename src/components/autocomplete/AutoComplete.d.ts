import { VNode } from 'vue';

interface AutoCompleteProps {
    modelValue?: any;
    suggestions?: any[];
    field?: string|Function;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    appendTo?: string;
    inputStyle?: any;
    inputClass?: string;
    forceSelection?: boolean;
}

declare class AutoComplete {
    $props: AutoCompleteProps;
    $emit(eventName: 'item-select', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'item-unselect', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'dropdown-click', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'complete', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'clear'): this;
    $slots: {
        list: VNode[];
    };
}

export default AutoComplete;
