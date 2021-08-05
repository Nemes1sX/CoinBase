const routes = [
    {
        path: "/",
        component: Index,
    },
];


const router = new VueRouter({
    routes: routes,
    mode: "history",
    base: "/",
});

var app = new Vue({
    el: "#app",
    router: router,
});


