// 页面
import LifePage from './lifepage/LifePage.js'
import AntPage from './antpage/AntPage.js'
import EventPage from './eventpage/EventPage.js'
import Home from './home/Home.js'
import About from './about/About.js'
import News from './news/News.js'
import Detail from './news/Detail.js'
import TestMobx from './test/TestMobx.js'
const routes = [
{
    id:1,
    path:'/',
    title:'概况',
    component:Home
},
{
    id:2,
    path:'/life',
    title:'店铺',
    component:LifePage
},
{
    id:3,
    path:'/event',
    title:'商品',
    component:EventPage
},
{
    id:4,
    path:'/ant',
    title:'订单',
    component:AntPage
},
{
    id:5,
    path:'/about',
    title:'客服',
    component:About
},
{
    id:6,
    path:'/news',
    title:'数据',
    component:News,
    children:[
        {
            id:601,
            path:'/detail/:id',//id的作用就是查看那一篇文章详情；
            title:'新闻详情',
            component:Detail
        }
    ]
},
{
    id:7,
    path:'/mobx',
    title:'资产',
    component:TestMobx
}


]

export default routes