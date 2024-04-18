<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IPost {
  src: string;
  alt: string;
  title: string;
  time: string;
  postTitle: string;
  postAlt: string;
  postSrc: string;
  voteCounter: number;
}

const { post: props } = withDefaults(
  defineProps<{
    post: IPost;
  }>(),
  {},
);
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <AppAvatar :src="props.src" :alt="props.alt"></AppAvatar>
      <div class="typo-footnote ml-2 mr-6 flex flex-1 flex-col overflow-auto">
        <CardTitle>Rust Developers</CardTitle>
        <CardDescription>
          <span :title="props.title" class="max-w-full shrink truncate"
            >{{ props.title }}
          </span>
          <span class="mx-1">•</span>
          <time>{{ props.time }}</time>
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <p class="text-text-secondary typo-footnote line-clamp-2">
        {{ props.postTitle }}
      </p>
      <div class="flex h-auto flex-auto overflow-auto">
        <img
          loading="lazy"
          class="h-auto min-h-0 w-full rounded-xl object-cover"
          type="post"
          :alt="props.postAlt"
          :src="props.postSrc"
        />
      </div>
    </CardContent>
    <CardFooter>
      <CardButton
        class="btn-tertiary-avocado"
        icon="SvgoUpvote"
        :counter="props.voteCounter"
      />
      <CardButton class="btn-tertiary-blueCheese" icon="SvgoComment" />
      <CardButton class="btn-tertiary-bun" icon="SvgoBookmark" />
      <CardButton class="btn-tertiary-cabbage" icon="SvgoLink" />
    </CardFooter>
  </Card>
</template>
