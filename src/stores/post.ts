import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])

  const fetchPosts = async () => {
    const response = await fetch('http://127.0.0.1:8001/api/v1/wcms/page')
    const data = await response.json()

    posts.value = data
  }

  return { posts, fetchPosts }
})
