<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    icon: string;
    counter?: number | null;
  }>(),
  {
    class: "",
    counter: null,
  },
);
</script>

<template>
  <div class="btn-card inline-flex flex-row" :class="props.class">
    <Button id="btn-card" variant="card" size="card">
      <component :is="props.icon" class="size-6" />
    </Button>
    <label
      for="btn-card"
      class="typo-callout count-vote flex cursor-pointer items-center pl-1 font-bold"
    >
      <span
        v-show="props.counter"
        class="flex h-5 min-w-[1ch] flex-col overflow-hidden"
        >{{ props.counter }}</span
      >
    </label>
  </div>
</template>
