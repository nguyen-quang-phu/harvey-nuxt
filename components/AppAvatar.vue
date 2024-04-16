<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

defineProps<{
  src: string;
  alt: string;
  fallback?: string;
}>();
</script>

<template>
  <Avatar>
    <AvatarImage :src :alt />
    <AvatarFallback>{{ fallback ?? "CN" }}</AvatarFallback>
  </Avatar>
</template>
