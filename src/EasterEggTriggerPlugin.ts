import type { App } from 'vue';
import { EasterEggTrigger } from '@/plugin';
import { OptionsSettings } from '@/ts/interfaces';

const defaultOptions = {
	callback: null,
	delay: 500,
	keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	mouseEvents: [
		'click', // Works with multiple single clicks pattern
		'dblclick', // Only works with single double click pattern set
		'mouseup', // Works with multiple mouseup clicks pattern
		'mousedown', // Works with multiple mousedown clicks pattern
	],
	pattern: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	target: '',
	type: 'keydown',
};

export default {
	install: (app: App,
		options: OptionsSettings = defaultOptions) => {
		app.component('EasterEggTrigger', EasterEggTrigger);

		app.provide("defaultOptions", options);
	},
};

export { EasterEggTrigger };
