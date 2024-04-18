<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    :class="cn('line-clamp-2 break-words font-bold', props.class)"
  >
    <slot />
  </span>
</template>
