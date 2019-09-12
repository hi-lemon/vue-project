import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const Error = () => import("@/views/error-page/404");
export const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    component: () => import("@/views/page/homePage"),
    children: [
      {
        path: "",
        redirect: "im"
      },
      {
        path: "im",
        component: () => import("@/views/page/interMonitorPage"),
        name: "im"
      }, {
        path: "rm",
        component: () => import("@/views/page/regionMonitorPage"),
        name: "rm"
      }, {
        path: "ps",
        component: () => import("@/views/page/planSchedulePage"),
        name: "ps"
      }, {
        path: "sa",
        component: () => import("@/views/page/statisticalAnalysisPage"),
        name: "sa"
      }
    ]
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    name: "401"
  },
  {
    path: "*",
    component: Error
  }
];
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes
  });
const router = createRouter();
export default router;
