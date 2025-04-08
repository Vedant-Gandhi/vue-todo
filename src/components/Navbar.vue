<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router' // Add this import

const route = useRoute()

console.log(route.path) // Add this line to check if the component is mounted

const isCreateTaskPage = computed(() => {
  return route.path === '/create-task'
})
</script>
<template>
<nav class="w-full px-3 py-5 bg-gray-900 flex items-center flex-row-reverse">
    <RouterLink v-show="!isCreateTaskPage" to="/create-task"><button class="bg-blue-500 w-10 aspect-square rounded-full font-extrabold text-lg cursor-pointer hover:bg-blue-400 transition-colors duration-300 outline-none">+</button></RouterLink>
    <h3 class="mr-auto font-semibold text-lg select-none">Vue TODO</h3>
</nav> 
</template>