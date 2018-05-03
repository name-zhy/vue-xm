import Vue from 'vue'
import Router from 'vue-router'

//首页
import Home from '@/components/tabbar/home'
import Cart from '@/components/tabbar/cart'
import Memder from '@/components/tabbar/member'
import Search from '@/components/tabbar/search'

//产品页
import GoodsDetail from '../components/goods/detail'
import GoodsList from '../components/goods/list'

// 新闻
import NewsDetail from '../components/news/detail'
import NewsList from '../components/news/list'

//图片
import PicturesDetail from '../components/pictures/detail'
import PicturesList from '../components/pictures/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/memder',
      component:Memder
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/search',
      component:Search
    },


    {
      path:'/goods/detail',
      component:GoodsDetail
    },
    {
      path:'/goods',
      component:GoodsList
    },


    {
      path:'/news/detail',
      component:NewsDetail
    },
    {
      path:'/news',
      component:NewsList
    },


    {
      path:'/pictures/detail',
      component:PicturesDetail
    },
    {
      path:'/pictures',
      component:PicturesList
    },

  ],
  linkActiveClass: "mui-active"
})
