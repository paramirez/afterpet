import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "./dashboard/DashBoard.vue";
import Home from "./home/Home.vue";

Vue.use(VueRouter);

const routes = [
    { name: "home", path: "/", component: Home },
    { name: "dashboard", path: "/dashboard", component: DashBoard }
];

export const router = new VueRouter({
    routes
});
