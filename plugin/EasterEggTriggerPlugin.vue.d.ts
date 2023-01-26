declare const _default: import("vue").DefineComponent<{
    callback: {
        default: void;
        type: FunctionConstructor;
    };
    delay: {
        default: string | number;
        type: (StringConstructor | NumberConstructor)[];
    };
    pattern: {
        default: () => string[];
        type: ArrayConstructor;
    };
    target: {
        default: string;
        type: StringConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "triggered"[], "triggered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    callback: {
        default: void;
        type: FunctionConstructor;
    };
    delay: {
        default: string | number;
        type: (StringConstructor | NumberConstructor)[];
    };
    pattern: {
        default: () => string[];
        type: ArrayConstructor;
    };
    target: {
        default: string;
        type: StringConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}>> & {
    onTriggered?: (...args: any[]) => any;
}, {
    callback: Function;
    delay: string | number;
    pattern: unknown[];
    target: string;
    type: string;
}>;
export default _default;
