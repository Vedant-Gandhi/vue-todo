import Landing from '../pages/Landing.vue'
import NewTodo from '../pages/NewTodo.vue';

const routes = [
    {path: "/", component:Landing },
    {path: "/create-task", component: NewTodo },
];

export default routes;