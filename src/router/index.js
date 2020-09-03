import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  /* routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ] */
  routes: [{
    path: "/",
    redirect: "/index",
    component: resolve => require(['@/layout'], resolve),
    children: [{
        path: "/index",
        name: "index",
        // component: resolve => require(['@/layout/index.vue'], resolve),
        meta: {
          title: "首页",
          exit: true,
          keepAlive: false,
          /*是否显示底部*/
          headerBack: false,
          isIndex: true
        }
      },
    ]
  }]
})
