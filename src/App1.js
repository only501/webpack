// 导入react
import React from 'react'
// 导入公共样式；
import './assets/css/common.scss'
import './assets/css/style.css'

// 引入ant的样式
import 'antd/dist/antd.css';
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
// 引入封装的路由
import routes from './views/index.js'
export default class App1 extends React.Component{
      constructor(props){//表示构造器  
        super(props)//super表示调用父组件的构造器；
       this.state = {
       
       }
    }
    // 生成导航，导航不用考虑子级路由，只考虑一级路由
    creatNavLink(routes){
        let arr = []
        routes.map((ele,idx)=>{
            arr.push(
                <div key={ele.id}>
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
            <div>
                {/* 生成导航链接 */}
            { 
              this.creatNavLink(routes)
           }
           {/* 生成组件视图容器 */}
            <Switch>
            {
                this.creatRoute(routes)
            }
            <Redirect from='/*' to='/'></Redirect>
            </Switch>
            </div>
            </HashRouter>
        )
    }
  
}