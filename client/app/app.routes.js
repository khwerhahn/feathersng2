System.register(['./home/home.component', './todolist/todolist.component', './simplebind/simplebind.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, todolist_component_1, simplebind_component_1;
    var APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (todolist_component_1_1) {
                todolist_component_1 = todolist_component_1_1;
            },
            function (simplebind_component_1_1) {
                simplebind_component_1 = simplebind_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                { path: '/simplebind', name: 'Simplebind', component: simplebind_component_1.SimplebindComponent },
                { path: '/todolist', name: 'Todolist', component: todolist_component_1.TodolistComponent }
            ]);
        }
    }
});

//# sourceMappingURL=app.routes.js.map
