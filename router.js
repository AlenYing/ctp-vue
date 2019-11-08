import VueRouter from "vue-router";
import testmain from "./src/components/info"
import Login from "./src/components/Login";
import tabbar from "./src/components/tabbar";
import skill from "./src/components/skill";

const routes = [
  {path: '/', component: Login},
  {
    path: '/main',
    component: tabbar,
    children: [
      {
        path: 'info',
        component: testmain
      },
      {
        path: 'skill',
        component: skill
      }]
  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
