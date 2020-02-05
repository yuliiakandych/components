//import always go first at the top
import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";

const router = new VueRouter({
    routes:[
        { path: "/", name: "splash", component: SplashPage },
        {path: '/app', name: "app", component: AppPage},
        {path: '*', name: "error", component: ErrorPage}
    ]
})

const vm = new Vue({
    data: {

    },

    created:function(){
        console.log('app is running');
    },

    methods:{

    },

    router //shorthand for router:router
}).$mount("#app");