// 导入react
import React from 'react'

import Child from '../../components/child/Child.js';
import News from '../../components/news/News.js'
// 导入Child.js组件
export default class Home extends React.Component{
    // class关键字，用于定义一个App类
    // export default 抛出这个类；
    // extends表示继承，继承react.component;
    constructor(props){//表示构造器  
        super(props)//super表示调用父组件的构造器；
        this.state = { // 声明式的状态数据，state状态数据必须在这里定义
            password:'12345',
            msg:'把我的数据分享给我的子组件',
            name:'only-you',
            item:{
                id:1,
                title:'双11大拍卖',
                content:'0000',
                author:'only-only'
            },
            list:[
                {
                    id:1,
                    title:'双10大拍卖',
                    content:'0000',
                    author:'only-only'
                },
                {
                    id:2,
                    title:'双11大拍卖',
                    content:'0000',
                    author:'only-only'
                },
                {
                    id:3,
                    title:'双12大拍卖',
                    content:'0000',
                    author:'only-only'
                },
            ]
        }
    }
    handleClick(arg){//事件的传递；
        console.log('父组件的事件执行了')
        console.log(arg)//arg接受子组件传过来的值；
    }
    // 定义获取表单的内容的方法；
    getInputValue(arg){
        console.log('---------',this.state.password)
        console.log(arg)
    }
    // 定义input事件；
    inputChang(e){
     console.log(e.target.value)
     this.setState({
         password:e.target.value
     })
    }
    render(){
        // es6的写法；
        let { name,item,list,password} = this.state;
        return(
            <div>
            <h1 className='h1'>hello React111</h1>
            {/* <Child msg='把我的数据传给我的子组件'></Child> 这属于静态传值；*/}
             {/*此方法属于动态传值，传值也需要大括号包裹*/}
             <Child msg={this.state.msg} myEvent={this.handleClick.bind(this)}></Child>
             {/* <h1>{this.state.name}</h1> 大括号里面必须是表达式，返回一个具体的值 */}
             <h1>{name}</h1>
             <br/>
             <hr/>
             {/* 获取表单的值 */}
             <input type="text" 
             value= {password}
             onChange={this.inputChang.bind(this)}
             ref='pwd'/>
             {/* 事件绑定，必须手动的改变this的指向 */}
             <button onClick={this.getInputValue.bind(this)}>获取表单的内容</button>
             <hr/>
             <News item={item}></News>
             <hr/>
             <br/>
             {/* 列表渲染 */}
             {list.map((ele,idx)=>{
                 return <News item={ele} key={ele.id}></News>
             })
             }
            </div>
        )
    }
}