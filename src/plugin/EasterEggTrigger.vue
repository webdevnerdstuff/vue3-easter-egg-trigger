<script lang="ts" setup>
import { inject, reactive, ref } from 'vue';
import { findIndex, includes, isEqual, uniq } from 'lodash';

interface OptionsSettings {
	callback?: void;
	delay?: number;
	keys?: string[];
	mouseEvents?: string[];
	pattern?: (string | number)[];
	target?: string;
	type?: string;
}

const props = defineProps<OptionsSettings>();
const emits = defineEmits(['triggered']);
const pluginOptions: OptionsSettings = inject("defaultOptions");

let easterEggsTriggerEggs = reactive([]);
let timeout: ReturnType<typeof setTimeout> = setTimeout(() => { });
let input = reactive([]);
let targets: {
	nodes: string[];
	ids: string[];
	classNames: string[];
} = reactive({
	nodes: [],
	ids: [],
	classNames: [],
});


// Options //
const defaultEggOptions: OptionsSettings = reactive(props);
let eggOptions = reactive({ ...defaultEggOptions, ...props });
eggOptions = filterObject(eggOptions, (option) => {
	return typeof option[1] !== "undefined";
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

		if (!newEgg.keys && !newEgg.pattern) {
			newEgg.keys = pluginOptions.keys;
			newEgg.pattern = pluginOptions.pattern;
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
function capturePattern(e: any) {
	const key = ref('');

	if (timeout !== null) {
		clearTimeout(timeout);
	}

	// -------------------- Keyboard Events //
	if (e.key !== undefined) {
		// String //
		key.value = e.key;
	}
	else if (e.keyCode !== undefined) {
		// Fallback Depreciated (Int) //
		key.value = e.keyCode;
	}

	// -------------------- Mouse Events //
	if (includes(pluginOptions.mouseEvents, e.type)) {
		key.value = e.type;

		targets.nodes.push(e.target.nodeName.toLowerCase());
		targets.ids.push(e.target.id);
		targets.classNames.push(e.target.classList.value);
	}

	input.push(key.value);
	checkPattern(e);
	return false;
}


// Check the Keys or Click Pattern //
function checkPattern(e: Event) {
	Object.values(easterEggsTriggerEggs).forEach((egg: { keys?: string[], pattern?: string[]; target?: string; }) => {

		// Check Keyboard Events //
		if (isEqual(egg?.keys, input) || isEqual(egg?.pattern, input)) {
			// Check Targets if Mouse Events //
			if (includes(pluginOptions.mouseEvents, e.type)) {
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
function checkTarget(e: Event, egg: { keys?: string[], pattern?: string[]; target?: string; }) {
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
	}, pluginOptions.delay);
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

	emits('triggered', egg);

	return false;
}


// Rebuild the Easter Eggs //
function rebuild(usedEgg: { name: string; }) {
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
function filterObject<T extends object>(
	obj: T,
	fn: () => boolean
) {
	return Object.fromEntries(
		(Object.entries(obj) as Entry<T>[]).filter(fn)
	) as Partial<T>;
}

</script>

<template></template>
