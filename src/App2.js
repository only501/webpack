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
export default class App extends React.Component{
      constructor(props){//表示构造器  
        super(props)//super表示调用父组件的构造器；
       this.state = {
       
       }
    }
    render(){
        return(
            <HashRouter>
            <div>
            {//map循环对页面比较少的时候运用比较的方便，页面多的是再利用它来循环就显得特别的浪费性能、所以可以把它提取成一个方法来进行优化；实现在app1；
                routes.map((ele,idx)=>{
                return (
                    <div key={ele.id}>
                    <NavLink to={ele.path} exact activeClassName='on'>{ele.title}</NavLink>
                    </div>
                )
                })
            
            }
            <Switch>
            {
                routes.map((ele,idx)=>{
                    return (
                        <Route
                        exact 
                        key={ele.id}
                        path={ele.path}
                        component={ele.component}
                        >
                        </Route>
                    )
                })
            }
            <Redirect from='/*' to='/'></Redirect>
            </Switch>
            </div>
            </HashRouter>
        )
    }
  
}