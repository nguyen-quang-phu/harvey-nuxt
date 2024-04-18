<script setup lang="ts">
const posts = [
  {
    src: "https://res.cloudinary.com/daily-now/image/upload/s--6aCncwvS--/f_auto/v1704460013/squads/760751ac-62a9-4c7a-8105-fbe2ff7a24dd",
    alt: "rust",
    title: "Jerome Pangilinan",
    time: "Apr 10",
    postTitle: "Rust Jobs",
    postAlt: "Shared Post Cover image",
    postSrc:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ae1bf94a9ff3eddfb88c737689560621?_a=AQAEufR",
    voteCounter: 2,
  },
];
</script>

<template>
  <div v-for="post of posts" :key="post.title">
    <AppCard :post="post"></AppCard>
  </div>
</template>
