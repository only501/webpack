// 导入react
import React from 'react'
// 导入公共样式；
import './assets/css/common.scss'
import './assets/css/style.css'
// 引入ant的样式
import 'antd/dist/antd.css';
// 引入ant的布局；
import { Layout,Row, Col,Icon} from 'antd';
const { Header,Sider, Content } = Layout;
//安装react-router： npm install react-router-dom -S
import {
    BrowserRouter,//浏览器路由，刷新、请求时报404，需要后端做重定向的处理
    HashRouter,//hash路径，就不需要后端做重定向；
    Link,
    NavLink,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
// 引入封装的页面的路由
import routes from './views/index.js'
import { Provider } from 'mobx-react'
import store from './store/index.js'
export default class App extends React.Component{
     constructor(props){//表示构造器  
        super(props)//super表示调用父组件的构造器；
       this.state = {}}
// 生成导航，导航不用考虑子级路由，只考虑一级路由
creatNavLink(routes){
    let arr = []
    routes.map((ele,idx)=>{
    arr.push(
    <div key={ele.id} className='left'>
    <NavLink to={ele.path} exact activeClassName='on'>{ele.title}</NavLink>
    </div>
    )
    })
    return arr;
    }
// 生成路由容器
creatRoute(routes){
    let arr = []
    // 遍历一级路由
    routes.map((ele,idx)=>{
    arr.push(<Route
    exact
    key={ele.id}
    path={ele.path}
    component={ele.component}
    >
    </Route>)
    if (ele.children && ele.children.length > 0) {
    ele.children.map((child,idx)=>{
    arr.push(<Route
    exact
    key={child.id}
    path={child.path}
    component={child.component}
    >
    </Route>)
    })
    }
})
return arr;
}
render(){
return(
<HashRouter>
<Provider store={store}>
    <div className="app">
    <Layout style={{height:'100%'}}>
    {/* 侧边 */}
    <Sider width='92'style={{background: '#444'}} className='ant_sider'>
     <div className="logo">
     <img src="//img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg" alt="yz" className='sider_img'/>
     </div>
    {
    this.creatNavLink(routes)
    }
    </Sider>
    <Layout>
    {/* 头部 */}
    <Header style={{height:'56px',background: '#fff', padding: 0 }}>
    <Row style={{height:'56px'}}>
      <Col push={1} span={3} >客服经营</Col>
      <Col span={13}>权益卡</Col>
      <Col span={3}><Icon type="home" /></Col>
      <Col push={2}span={2}>帮助和服务</Col>
    </Row>
    </Header>
    {/* 内容 */}
    <Content>
    {
    this.creatRoute(routes)
    }
    </Content>
    </Layout>
    </Layout>
    </div>
    </Provider>
    </HashRouter>
)
}
}