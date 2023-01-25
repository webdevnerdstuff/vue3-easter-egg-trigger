<script lang="ts">
import { inject } from 'vue';
// import { EasterEggTrigger } from '@/plugin';


export default {
	name: 'HelloWorld',
	// setup() {
	// 	const $easterEgg = inject('$easterEgg');

	// 	console.log($easterEgg);

	// 	$easterEgg({
	// 		pattern: ['click'],
	// 		target: 'div',
	// 		type: 'click',
	// 		callback: () => {
	// 			console.log('Easter egg triggered!');
	// 		},
	// 	});

	// },
	mounted() {
		console.log('mounted');
		console.log(this);
		console.log(this.$easterEgg);

		// this.$easterEgg({
		// 	pattern: ['click'],
		// 	target: 'div',
		// 	type: 'click',
		// 	callback: () => {
		// 		console.log('Easter egg triggered!');
		// 	},
		// });
	},
	methods: {
		foo() {
			console.log('foo');
		},
	}
};

</script>

<template>
	<div>Options</div>
</template>

<style scoped>
</style>
