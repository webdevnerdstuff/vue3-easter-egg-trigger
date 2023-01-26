/**
 * @name vue3-easter-egg-trigger
 * @version 1.0.0
 * @description This packages makes it nice and easy to add Easter Egg triggers to your Vue3 site.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @license MIT License
 */

import { defineComponent, reactive, ref } from 'vue';
import { includes, isEqual, uniq, findIndex } from 'lodash';

var _sfc_main = defineComponent({
    name: 'EasterEggTrigger',
    props: {
        callback: {
            default: null,
            type: Function,
        },
        delay: {
            default: 500,
            type: [String, Number],
        },
        pattern: {
            default: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
            type: Array,
        },
        target: {
            default: 'body',
            type: String,
        },
        type: {
            default: 'keydown',
            type: String,
        },
    },
    emits: ['triggered'],
    setup(props, { emit }) {
        const pluginOptions = {
            callback: null,
            delay: 500,
            pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
            target: 'body',
            type: 'keydown',
        };
        const mouseEvents = reactive([
            'click',
            'dblclick',
            'mouseup',
            'mousedown', // Works with multiple mousedown clicks pattern
        ]);
        let easterEggsTriggerEggs = reactive([]);
        let timeout = setTimeout(() => { });
        let input = reactive([]);
        let targets = reactive({
            nodes: [],
            ids: [],
            classNames: [],
        });
        // Options //
        const eggOptions = filterObject(props, ([key]) => {
            const value = props[key];
            return typeof value !== 'undefined' && value !== null;
        });
        layEggs();
        // Initiate the plugin //
        function layEggs() {
            easterEggsTriggerEggs.push(eggOptions);
            callAddListener();
        }
        // Loop through eggs and call add event listener //
        function callAddListener() {
            Object.values(easterEggsTriggerEggs).forEach((egg) => {
                const newEgg = reactive(egg);
                if (!newEgg.pattern) {
                    newEgg.pattern = pluginOptions.pattern;
                }
                if (!newEgg.target) {
                    newEgg.target = pluginOptions.target;
                }
            });
            addListener();
        }
        // Create add event listener //
        function addListener() {
            const type = eggOptions.type ?? pluginOptions.type;
            document.addEventListener(type, capturePattern, false);
        }
        // Capture the Keys or Click Pattern //
        function capturePattern(e) {
            const key = ref('');
            if (timeout !== null) {
                clearTimeout(timeout);
            }
            // -------------------- Keyboard Events //
            if (e.key !== undefined) {
                key.value = e.key;
            }
            // -------------------- Mouse Events //
            if (includes(mouseEvents, e.type)) {
                const target = e.target;
                key.value = e.type;
                targets.nodes.push(target.nodeName.toLowerCase());
                targets.ids.push(target.id);
                targets.classNames.push(target.classList.value);
            }
            input.push(key.value);
            checkPattern(e);
            return false;
        }
        // Check the Keys or Click Pattern //
        function checkPattern(e) {
            Object.values(easterEggsTriggerEggs).forEach((egg) => {
                // Check Keyboard Events //
                if (isEqual(egg?.pattern, input)) {
                    // Check Targets if Mouse Events //
                    if (includes(mouseEvents, e.type)) {
                        checkTarget(e, egg);
                        return false;
                    }
                    emitEvent(egg);
                }
                return false;
            });
            reset();
            return false;
        }
        // Check Click Targets //
        function checkTarget(e, egg) {
            // Get clean egg target //
            const node = egg.target;
            const id = egg.target.replace('#', '');
            const className = egg.target.replace('.', '');
            // Reduce targets to unique values //
            const nodes = uniq(targets.nodes);
            const ids = uniq(targets.ids);
            const classNames = uniq(targets.classNames);
            // Targets array should reduce down to one value, and match the clean egg target //
            const nodeTargetsMatch = ref(nodes.length === 1 && nodes[0] === node);
            const idTargetsMatch = ref(ids.length === 1 && ids[0] === id);
            const classTargetsMatch = ref(classNames.length === 1 && includes(classNames[0], className));
            if (nodeTargetsMatch.value || idTargetsMatch.value || classTargetsMatch.value) {
                emitEvent(egg);
            }
            reset();
        }
        // Reset //
        function reset() {
            let delayReset = pluginOptions.delay;
            if (typeof props.delay !== 'undefined') {
                delayReset = +props.delay;
            }
            // Reset timeout and clear input keys //
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                // Clean inputs and targets //
                input = [];
                targets = {
                    nodes: [],
                    ids: [],
                    classNames: [],
                };
            }, +delayReset);
        }
        // Emit Event and/or Callback //
        function emitEvent(egg) {
            if (Object.keys(easterEggsTriggerEggs).length === 1) {
                const type = eggOptions.type ?? pluginOptions.type;
                document.removeEventListener(type, capturePattern, false);
            }
            else {
                rebuild(egg);
            }
            if (egg.callback) {
                egg.callback(egg);
            }
            emit('triggered', egg);
            return false;
        }
        // Rebuild the Easter Eggs //
        function rebuild(usedEgg) {
            const currentEggs = easterEggsTriggerEggs;
            easterEggsTriggerEggs = [];
            // Remove usedEgg from easterEggsTriggerEggs  //
            const idx = findIndex(currentEggs, (egg) => egg.name === usedEgg.name);
            currentEggs.splice(idx, 1);
            Object.values(currentEggs).forEach(() => {
                layEggs();
            });
            easterEggsTriggerEggs = currentEggs;
        }
        // Filter Typescript Object //
        function filterObject(obj, 
        // eslint-disable-next-line no-unused-vars
        fn) {
            return Object.fromEntries(Object.entries(obj).filter(fn));
        }
        return {};
    }
});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}
var EasterEggTrigger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "src/plugin/EasterEggTrigger.vue"]]);

const install = (app) => {
    app.component('EasterEggTrigger', EasterEggTrigger);
};
EasterEggTrigger.install = install;

export { EasterEggTrigger as default };
