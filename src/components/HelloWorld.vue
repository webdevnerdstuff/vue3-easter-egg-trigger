<!-- eslint-disable no-console -->
<script setup lang="ts">
import { markRaw, ref } from 'vue';
import EasterEggTrigger from '@/plugin/EasterEggTrigger.vue';
import EasterEgg from '@/components/EasterEgg.vue';

const activeEasterEgg = ref(null);
const callbackTriggeredClass = ref('');
const clickClassTriggered = ref(false);
const clickIdTriggered = ref(false);
const dblclickTriggered = ref(false);
const konamiTriggeredClass = ref('');

function triggered(el) {
	console.log({ el });
	if (el === 'clicked-id') {
		clickIdTriggered.value = true;
	}

	if (el === 'clicked-class') {
		clickClassTriggered.value = true;
	}

	if (el === 'dblclick') {
		dblclickTriggered.value = true;
	}

	if (el === 'konami') {
		konamiTriggeredClass.value = 'active';
	}

	activeEasterEgg.value = markRaw(EasterEgg);
}

function callback() {
	callbackTriggeredClass.value = 'active';
}

function closeEasterEgg() {
	activeEasterEgg.value = null;
}
</script>

<template>
	<h1>Vue3 Easter Egg Trigger</h1>

	<div class="buttons">
		<button id="id-target" class="btn" :disabled="clickIdTriggered">
			Click Target Element by ID
		</button>

		<div class="callback-container">
			<button class="btn class-target" :disabled="clickClassTriggered">
				Click Target Element by Class w/callback
			</button>

			<div class="callback-triggered" :class="callbackTriggeredClass">
				Callback Triggered
			</div>
		</div>

		<button class="btn double-click-target" :disabled="dblclickTriggered">
			Double Click Target Element by Class
		</button>
	</div>

	<div class="konami-container">
		Konami Code ↑ ↑ ↓ ↓ ← → ← → b a
		<div class="konami-triggered" :class="konamiTriggeredClass">
			Konami Code Triggered
		</div>
	</div>

	<EasterEggTrigger
		:pattern="['click']"
		target="#id-target"
		type="click"
		@triggered="triggered('clicked-id')"
	/>

	<EasterEggTrigger
		:pattern="['dblclick']"
		target=".double-click-target"
		type="dblclick"
		@triggered="triggered('dblclick')"
	/>

	<EasterEggTrigger
		:callback="callback"
		:pattern="['click']"
		target=".class-target"
		type="click"
		@triggered="triggered('clicked-class')"
	/>

	<EasterEggTrigger @triggered="triggered('konami')" />

	<component :is="activeEasterEgg" @close-easter-egg="closeEasterEgg" />
</template>

<style scoped>
.buttons {
	align-items: center;
	display: flex;
	flex-direction: column;
}

.btn {
	display: block;
	margin-bottom: 30px;
}

.callback-container {
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	position: relative;
}

.callback-container .btn {
	margin-bottom: 0;
}

.callback-triggered {
	bottom: -25px;
	font-size: 0.8rem;
	opacity: 0;
	position: absolute;
	transition: opacity 0.5s ease;
}

.callback-triggered.active {
	opacity: 1;
}

.konami-container {
	color: #fff;
}

.konami-triggered {
	opacity: 0;
	transition: opacity 0.5s ease;
}

.konami-triggered.active {
	opacity: 1;
}
</style>
