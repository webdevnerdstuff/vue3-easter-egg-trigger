import { App, Plugin } from 'vue';
import { EasterEggTrigger } from '@/plugin';
// import { OptionSettings } from '@/types';

// const defaultOptions = {
// 	callback: null,
// 	delay: 500,
// 	pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
// 	target: 'body',
// 	type: 'keydown',
// };


const install = (app: App) => {
	app.component('EasterEggTrigger', EasterEggTrigger);

	// app.provide('defaultOptions', options);
};

EasterEggTrigger.install = install;

export default EasterEggTrigger as unknown as Plugin;


// import type { App } from 'vue';
// import { EasterEggTrigger } from '@/plugin';
// import { OptionSettings } from '@/types';

// const defaultOptions = {
// 	callback: null,
// 	delay: 500,
// 	pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
// 	target: 'body',
// 	type: 'keydown',
// };

// export default {
// 	install: (app: App,
// 		options: OptionSettings = defaultOptions) => {
// 		app.component('EasterEggTrigger', EasterEggTrigger);

// 		app.provide('defaultOptions', options);
// 	},
// };
