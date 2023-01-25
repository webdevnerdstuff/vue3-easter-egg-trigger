declare const _default: import("vue").DefineComponent<{
    callback: {
        type: any;
        required: false;
    };
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    pattern: {
        type: ArrayConstructor;
        required: false;
    };
    target: {
        type: StringConstructor;
        required: false;
    };
    type: {
        type: StringConstructor;
        required: false;
    };
}, (_ctx: any, _cache: any) => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "triggered"[], "triggered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    callback: {
        type: any;
        required: false;
    };
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    pattern: {
        type: ArrayConstructor;
        required: false;
    };
    target: {
        type: StringConstructor;
        required: false;
    };
    type: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onTriggered?: (...args: any[]) => any;
}, {
    callback: any;
}>;
export default _default;
