<script setup lang="ts">
import { usePostStore } from '@/stores/post'

const post = usePostStore()

//use fetchPosts method in post store
post.fetchPosts()
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4 gap-x-4 gap-y-6">
      <div
        v-for="post in post.posts"
        class="flex-grow basis-[calc(25%-1rem)] max-w-[calc(25%-1rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <RouterLink :to="'/blog/' + post.slug">
          <img
            class="rounded-t-lg"
            :src="'http://127.0.0.1:8001/storage/' + post.featured_image"
            alt=""
            style="aspect-ratio: 4 / 3; object-fit: cover"
          />
        </RouterLink>

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ post.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ post.description }}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show More
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
