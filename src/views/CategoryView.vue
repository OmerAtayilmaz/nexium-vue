<script lang="ts" setup>
import { useCategoryStore } from '@/stores/category'
const category = useCategoryStore()
category.fetchCategories()
</script>

<template>
  <div class="container">
    <h1>Category List PAGE</h1>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4 gap-x-4 gap-y-6">
        <div
          v-for="category in category.categories"
          class="flex-grow basis-[calc(25%-1rem)] max-w-[calc(25%-1rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-5">
            <RouterLink :to="'/category/' + category.slug">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ category.title }}
              </h5>
            </RouterLink>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ category.description }}
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
  </div>
</template>
