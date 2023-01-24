
Vue 3 Easter Egg Trigger
-------

[![GitHub license](https://img.shields.io/github/license/webdevnerdstuff/vue3-easter-egg-trigger)](https://github.com/webdevnerdstuff/vue3-easter-egg-trigger/blob/main/LICENSE.md)

This packages makes it nice and easy to add Easter Egg triggers to your Vue site.


### Installation
#### pnpm
```
pnpm add vue3-easter-egg-trigger
```
#### npm
```
npm i vue3-easter-egg-trigger
```
 
## Usage
 
```javascript
<script setup>
import EasterEggTrigger from 'vue3-easter-egg-trigger';

function easterEggTriggered() {
  // ...do something
}
</script>

<template>
  <EasterEggTrigger @triggered="easterEggTriggered" />
</template>
```

### Plugin Props
 
Name      | Type     | Default    | Description
:-----    | :------  | :-----     | :-----
callback  | Function | null       | The callback function
delay     | String, Integer | 500 | Determines the timeout before the event listener resets. The longer the delay, the more time a user has to complete the pattern.
pattern   | Array    | ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] | The key/click combination a user does to trigger easter egg. The default combination is the konami code.
target    | String   | body       | Use this to target DOM elements, Id's, or Class Names. Used with click events.
type      | String   | keydown    | The type of action the trigger will be listening for. Available options: `keydown`, `keyup`, `click`, `dblclick`, `mouseup`, `mousedown`

### Events
 
Name    | Type    | Description
:-----  | :------ | :-----
triggered | [MouseEvent, KeyboardEvent] | Emitted when the easter egg is triggered.
 
## Key Event Examples
 
The default key combination to trigger the easter egg is the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code).
 
ex. &#x2191; &#x2191; &#x2193; &#x2193; &#x2190; &#x2192; &#x2190; &#x2192; b a

##### Bare Egg Example.
 

```html
<template>
  <EasterEggTrigger @triggered="easterEggTriggered" />
</template>
```
 
##### Key Event with Custom Pattern
 
```html
<template>
  <EasterEggTrigger
    :pattern="['m', 'a', 'g', 'i', 'c']"
    @triggered="easterEggTriggered"
  />
</template>
```
 
##### Key Event with Delay (longer time to complete pattern)
```html
<template>
  <EasterEggTrigger
    delay="5000"
    @triggered="easterEggTriggered"
  />
</template>
```
 
##### Key Event with Callback only
 

```html
<template>
  <EasterEggTrigger :callback="easterEggTriggered" />
</template>
```

## Mouse Event Examples

First you will need to set the type prop.
 
Available types of Mouse Events: `click`, `dblclick`, `mouseup`, `mousedown`. 
When using `dblclick` the pattern will only work with one double click. Ex. pattern: `['dblclick']`

```html
<EasterEggTrigger
  :pattern="['click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
#### Mouse Event with multiple clicks required
```html
<EasterEggTrigger
  :pattern="['click', 'click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
#####  Mouse Event using a DOM element target

```html
<EasterEggTrigger
  :pattern="['click']"
  target="h1"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
 #####  Mouse Event using an ID target

```html
<EasterEggTrigger
  :pattern="['click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
 #####  Mouse Event using an Class target

```html
<EasterEggTrigger
  :pattern="['click']"
  target=".double-click-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
## Demo
 
Coming soon to an animal sanctuary near you.
 
## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue3-easter-egg-trigger/blob/main/CHANGELOG.md)
 

## License

Copyright (c) 2022 WebDevNerdStuff
Licensed under the MIT license.

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
