# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# Cheatsheet
## Data binding
```typescript
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Harvey')
const htmlContent = ref('<h1>In Harvey Tag</h1>')
</script>

<template>
  <!-- Render `msg` variable -->
  <p>{{ msg }}</p>

  <!-- Bind HTML instead of string. Similar to `.innerHTML` -->
  <div v-html="htmlContent"></div>
</template>
```

## Attribute Bindings
```typescript
<!-- Passing `dynamicId` as attribute -->
<div v-bind:id="dynamicId"></div>

<!-- `:id` is a Shorthand of `v-bind:id` -->
<div :id="dynamicId"></div>

<!-- It can be passed directly without specifying a value, using the same name as the attribute. -->
<div v-bind:id></div>

<!-- `:id` is a Shorthand of `v-bind:id` -->
<div :id></div>
```

## Event Bindings
```typescript
<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- shorthand -->
<button @click="doThis"></button>
```
## Boolean Attributes

```typescript
<script setup lang="ts">
import { ref } from 'vue'

const isButtonDisabled = ref(true)
</script>

<template>
  <button :disabled="isButtonDisabled">Harvey</button>
</template>
```
## Dynamically Binding Multiple Attributes
```typescript
<script setup lang="ts">
const inputAttrs = {
  id: 'container',
  class: 'harvey'
}
</script>

<template>
  <!-- Bind Multiple attributes by using a single variable -->
  <div v-bind="inputAttrs"></div>
</template>
```
## Using JavaScript Expressions
```typescript
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Harvey')
const number = 5
const ok = true
const id = 'wrapper'

</script>

<template>
  <!-- Mustache can have `JavaScript Expression` -->
  {{ number + 1 }}

  {{ ok ? 'YES' : 'NO' }}

  {{ message.split('').reverse().join('') }}

  <div :id="`list-${id}`">JavaScript Expression</div>
</template>
```
## Directives
```typescript
<!-- Bind HTML instead of string. Similar to `.innerHTML` -->
<div v-html="htmlContent"></div>

<!-- bind an attribute -->
<img v-bind:src="imageSrc" />

<!-- conditionally displaying an element -->
<h1 v-show="ok">Hello!</h1>

<!-- Conditionally rendering the element -->
<div v-if="type === 'A'"> A </div>
<div v-else-if="type === 'B'"> B </div>
<div v-else-if="type === 'C'"> C </div>
<div v-else> Not A/B/C </div>

<!-- Render element or template multiple times -->
<div v-for="(item, index) in items"> {{ item }} </div>

<!-- Render the element and component once only, and skip future updates. -->
<span v-once>This will never change: {{msg}}</span>

<!-- Two-way data binding: -->
<input v-model="firstName" />

<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- `Dynamic Arguments`: They are denoted by 'square brackets' after the directive name. -->
<a @[eventName]="doSomething"> ... </a>

<!-- `Modifiers`: They are special postfixes denoted by 'dot'. -->
<form @submit.prevent="onSubmit"> ... </form>

<!-- `v-pre`: Skip compilation for this element and all its children. -->
<span v-pre>{{ this will not be compiled }}</span>

<!-- `v-memo`: Memoize a sub-tree of the template. -->
<div v-memo="[valueA, valueB]"> ... </div>

<!-- `v-cloak`: Used to hide un-compiled template until it is ready -->
<div v-cloak>{{ message }}</div>
```
```
v-if vs. v-show

v-if: Use when the condition is unlikely to change often.

v-show: Use when you need to toggle frequently.
```
```typescript
<script setup>
import { ref } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const myObject = ref({
  title: 'How to do lists in Vue',
  author: 'John Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
<!-- Array -->
<ul>
  <li v-for="(item, index) in items" :key="index">
    {{ index }} - {{ item.message }}
  </li>
</ul>

<!-- Array w/ Destructure -->
<ul>
  <li v-for="({ message }, index) in items" :key="index">
    {{ index }} - {{ message }}
  </li>
</ul>

<!-- Object -->
<ul>
  <!-- v-for="value in myObject" -->
  <!-- v-for="(value, key) in myObject" -->
  <li v-for="(value, key, index) in myObject" :key="index">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</ul>
</template>
```
## Event Handling
```typescript

<!-- Inline Handler -->
<button v-on:click="console.log('hello')">print</button>

<!-- Method Handler -->
<button v-on:click="greet">Greet</button>

<!-- use shorthand for v-on `@` -->
<button @click="console.log('hello')">print</button>

<!-- Calling methods in inline handler -->
<button @click="say('hello')">Say hello</button>


<!-- Access Event Argument -->
<!-- using $event special variable -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

<!-- Event Modifiers -->
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>

<!-- use capture mode when adding the event listener     -->
<!-- i.e. an event targeting an inner element is handled -->
<!-- here before being handled by that element           -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>
```

# Reference
- [Cheatsheet](https://vue-cheatsheet.themeselection.com/vue/basic.html)
