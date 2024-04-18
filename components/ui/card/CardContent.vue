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
        'border-border-subtlest-tertiary relative flex h-auto min-h-0 w-full flex-1 flex-col gap-3 rounded-xl border p-3',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
