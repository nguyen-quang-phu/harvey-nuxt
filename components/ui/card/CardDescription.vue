<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('text-text-tertiary typo-footnote line-clamp-1 flex items-center break-words', props.class)">
    <slot />
  </div>
</template>
