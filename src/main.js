import React from 'react'//定义组件的
import ReactDOM from 'react-dom'//渲染虚拟dom元素
import App from './App.js'
// 初始化，把App容器组件渲染到真是的DOM页面上去；
ReactDOM.render(<App/>,document.getElementById('app'))
//测试热更新：本质就是浏览器与服务器devServer之间的通信；
if(module.hot){
    module.hot.accept('./App.js',function(){
        //重新加载发生了变化的文件模块；
        const NewApp = require('./App.js').default
       ReactDOM.render(<NewApp/>,document.getElementById('app'))

    })
} 