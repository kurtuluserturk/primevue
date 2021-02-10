import { VNode } from 'vue';

interface ListboxProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    listStyle?: string;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    ariaLabelledBy?: string;
    emptyFilterMessage?: string;
}

declare class Listbox {
    $props: ListboxProps;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        option: VNode[];
    }
}

export default Listbox;
