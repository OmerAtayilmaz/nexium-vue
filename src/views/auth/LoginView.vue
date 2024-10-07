<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const formOptions = reactive({
  email: '',
  password: ''
})

const errMesssage = ref('')
const isLoading = ref(false)

async function formSubmittion() {
  isLoading.value = true // Set loading state
  errMesssage.value = '' // Clear previous error message

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
      email: formOptions.email,
      password: formOptions.password
    })
    console.log(response)
    localStorage.setItem('auth_token', response.data.token)
    alert('Login successful')
  } catch (e) {
    alert(errMesssage.value)
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  Login form page
  <form @submit.prevent="formSubmittion()">
    <input v-model="formOptions.email" type="text" placeholder="email" />
    <input v-model="formOptions.password" type="text" placeholder="password" />
    <button type="submit" :disabled="isLoading">{{ isLoading ? 'Logging in...' : 'Login' }}</button>
    <p v-if="errMesssage">{{ errMesssage }}</p>
  </form>
</template>
