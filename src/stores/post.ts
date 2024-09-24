import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])
  const currentPage = ref(1)
  const lastPage = ref(0)
  const perPage = ref(0)
  const totalPosts = ref(0)
  const links = ref([])

  const fetchPosts = async (paginate: null | number) => {
    if (paginate == null) paginate = 1

    const response = await fetch(`http://127.0.0.1:8000/api/v1/wcms/page?page=${paginate}`)
    const data = await response.json()

    posts.value = data.data
    currentPage.value = data.current_page
    lastPage.value = data.last_page
    perPage.value = data.per_page
    totalPosts.value = data.total
    links.value = data.links
  }

  return { posts, fetchPosts, perPage, totalPosts, links, lastPage, currentPage }
})
