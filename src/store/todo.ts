import { defineStore } from "pinia";
import { getTextOfJSDocComment } from "typescript";

export interface Todo {
    id: string;
    name: string;
    description: string;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Array<Todo>
    }),
    actions: {
        addNew(todo: Omit<Todo,"id">) {
            const uid = Date.now();
            const fullTodo:Todo ={
                ...todo,
                id: String(uid),
            }
            this.todos.push(fullTodo);
        },
        deleteTodo(todo: Todo) {
            this.todos = this.todos.filter(t => t.id !== todo.id);
        },
        updateTodo(id:string, todo: Todo) {
            const index = this.todos.findIndex(t => t.id === id);
            if (index !== -1) {
                this.todos[index] = todo;
            }
        }
    }
});