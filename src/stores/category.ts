import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('postCategory', () => {
  const categories = ref([])

  const fetchCategories = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/wcms/page-category`)
    const data = await response.json()

    categories.value = data.data
  }

  return { fetchCategories, categories }
})
