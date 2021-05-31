import VueRouter from "vue-router";
import Vue from "vue"
const Home = () => import('../components/Home')
const About = () => import("../components/About")
const User = () => import("../components/User")
const HomeMessage = () => import("../components/HomeMessage")
const HomeNews = () => import("../components/HomeNews")
const Profile = () => import("../components/Profile")

/*
  1.安装插件vue-router
  2.定义路由信息
  3.导出router对象
*/
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'message'
        },
        {
          path: 'message',
          component: HomeMessage
        },
        {
          path: 'news',
          component: HomeNews
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.matched[0].meta.title;
  next()
})

export default router

