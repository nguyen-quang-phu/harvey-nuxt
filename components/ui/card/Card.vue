<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'minmax-h-card bg-background-subtle flex h-full flex-col rounded-2xl border p-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
