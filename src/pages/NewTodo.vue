<template>
    <section class="container max-w-1/2 mx-auto mt-[10%] p-4">

        <h1 class="text-3xl font-bold">New Todo</h1>
        <form class="mt-4 !text-white" @submit.prevent @click="onFormSubmit">
            <div class="mb-4">
                <label for="title" class="block text-gray-400 text-sm font-bold mb-2">Title</label>
                <input type="text" id="title" v-model.trim="formData.name"  class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight border-gray-700 focus:outline-none focus:shadow-outline" placeholder="Todo title" />
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-400 text-sm font-bold mb-2">Description</label>
                <textarea id="description" v-model.trim="formData.description"  class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Todo description"></textarea>
            </div>
            <div class="flex w-full items-center flex-row-reverse">
                <button type="submit" class=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Todo</button>
            </div>
        </form>
    </section>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useTodoStore, Todo } from '../store/todo';
const formData=reactive({
    name: '',
    description: '',
});

const {todos, addNew} = useTodoStore();

const onFormSubmit = () => {
    
    const { name, description } = formData;
    if (name && description) {
        const todo:Partial<Todo> = {
            name,
            description,
        };
        addNew(todo)
        alert("Todo added")

        formData.name=""
        formData.description=""
    }
};

</script>