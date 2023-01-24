import type { App } from 'vue';
import { EasterEggTrigger } from '@/plugin';
import { OptionsSettings } from '@/ts/interfaces';

const defaultOptions = {
	callback: null,
	delay: 500,
	pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	target: 'body',
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
