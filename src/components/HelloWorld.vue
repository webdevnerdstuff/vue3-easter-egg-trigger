<script setup lang="ts">
import EasterEggTrigger from '@/components/EasterEggTrigger.vue';

const rainbowLinearGradient = `linear-gradient(to right,
    hsl(0, 100%, 50%),
    hsl(39, 100%, 50%),
    hsl(60, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(240, 100%, 50%),
    hsl(300, 100%, 50%),
    hsl(360, 100%, 50%)
  )`;

const logStyle = [
	`background: ${rainbowLinearGradient}`,
	'color: #f7f7f7',
	'display: block',
	'font-family: "Helvetica", "Arial"',
	'font-size: 15px',
	'font-weight: bold',
	'margin: 5px 0',
	'padding: 10px',
	'text-shadow: 1px 1px 2px #000',
];

function triggered(e) {
	console.log('%c%s', logStyle.join(';'), `********* TRIGGERED ********`, e);
}


function foobar() {
	console.log('%c%s', logStyle.join(';'), `********* FOOBAR ********`);
}

</script>

<template>
	<h1>Vue3 Easter Egg Trigger</h1>

	<button id="id-target">Click Target Element by ID</button>
	<br />
	<br />
	<button class="class-target">Click Target Element by Class</button>

	<EasterEggTrigger
		type="click"
		:pattern="['click']"
		target="#id-target"
		@triggered="triggered"
	/>

	<EasterEggTrigger
		type="click"
		:pattern="['click']"
		target=".class-target"
		@triggered="triggered"
		:callback="foobar"
	/>

	<EasterEggTrigger
		@triggered="triggered"
	/>

</template>

<style scoped>

</style>
