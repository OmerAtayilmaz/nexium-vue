<script setup lang="ts">
import { ref, Ref } from 'vue'
import { usePostStore } from '@/stores/post'

const post = usePostStore()

//use fetchPosts method in post store
post.fetchPosts(1)

function goToNextPage(): void {
  post.fetchPosts(post.currentPage + 1)
}

function goToPreviousPage(): void {
  post.fetchPosts(post.currentPage - 1)
}
//go to page
function goToPage(pageNumber: number): void {
  post.fetchPosts(pageNumber)
}
</script>

<template>
  <div class="container">
    <h1>Current Page is {{ post.currentPage }}</h1>
  </div>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4 gap-x-4 gap-y-6">
      <div
        v-for="post in post.posts"
        class="flex-grow basis-[calc(25%-1rem)] max-w-[calc(25%-1rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <RouterLink :to="'/blog/' + post.slug">
          <img
            class="rounded-t-lg"
            :src="'http://127.0.0.1:8000/storage/' + post.featured_image"
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

      <!-- Pagination -->

      <ul class="flex justify-center items-center space-x-2 mt-6">
        <!-- Previous Page Button -->
        <li>
          <button
            @click="goToPreviousPage()"
            :disabled="post.currentPage < 2"
            class="px-3 py-1 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            Prev page
          </button>
        </li>

        <!-- Page Numbers -->
        <li v-for="i in post.lastPage" :key="i">
          <button
            @click="goToPage(i)"
            :disabled="post.currentPage === i"
            :class="{
              'px-3 py-1 rounded-lg': true,
              'bg-blue-500 text-white hover:bg-blue-600': post.currentPage !== i,
              'bg-gray-300 text-gray-700 cursor-not-allowed': post.currentPage === i
            }"
          >
            {{ i }}
          </button>
        </li>

        <!-- Next Page Button -->
        <li>
          <button
            @click="goToNextPage()"
            :disabled="post.currentPage === post.lastPage"
            class="px-3 py-1 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            Next page
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
