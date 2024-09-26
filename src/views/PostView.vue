<script setup lang="ts">
import { usePostStore } from '@/stores/post'
import { useRoute } from 'vue-router'

const post = usePostStore()
const route = useRoute()

//use fetchPosts method in post store
post.fetchPosts()

//filter posts based on slug
const filteredPosts = post.posts.find((post) => post.slug === route.params.slug)
</script>

<template>
  <div class="about">
    <div v-html="filteredPosts.content"></div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
