import VueRouter from "vue-router";
import testmain from "./src/components/info"
import Login from "./src/components/Login";
import tabbar from "./src/components/tabbar";
import skill from "./src/components/skill";
import personlist from "./src/components/personlist";
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
      },
      {
        path:'personlist',
        component: personlist
      }]

  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
