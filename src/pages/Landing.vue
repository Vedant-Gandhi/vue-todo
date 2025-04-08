<script setup lang="ts">
import {useTodoStore} from "../store/todo"
import {storeToRefs} from "pinia"
const todoStore = useTodoStore()
const {todos} = storeToRefs(todoStore)

const {deleteTodo} = todoStore

</script>
<template>

    <section  class="container mx-auto mt-10 grid grid-cols-3 justify-center">
        <article v-for="todo in todos" class="pl-4 pr-5 py-4 border border-gray-700 w-fit rounded-lg bg-gray-900 min-w-[250px]">
            <div class="flex flex-row-reverse mb-3"><button @click="deleteTodo(todo.id)" class="aspect-square rounded-full font-extrabold cursor-pointer bg-red-400 w-7 ">X</button></div>
            <h5 class="text-blue-400 font-bold">{{ todo.name }}</h5>
            <p class="text-sm text-gray-200 mt-6">{{ todo.description }}</p>
        </article>
    </section>

   
</template>