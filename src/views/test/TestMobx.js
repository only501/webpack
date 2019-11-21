import React from 'react'
import { inject,observer } from 'mobx-react'
import './todo.scss' 
@inject('store') @observer//这个必须放在要修饰的上面；
export default class TestMobx extends 
React.Component{
    componentDidMount(){//第三方的使用一般在这个生命周期；
        let { Music } = this.props.store
        Music.getMusic()
    }
    // addTodo(){//这样写代码显得有点累赘，浪费性能；
    //     // console.log(1)
    //     let { Todo } = this.props.store
    //     let todo = {id:5,name:'一项新的任务',time:Date.now()}
    //     Todo.updateList({
    //         type:'add',
    //         item:todo
    //     })//调用Todo的add方法；并且把todo传过去；
    // }
    // deleteTodo(ele){
    //     let { Todo } = this.props.store
    //     Todo.updateList({
    //         type:'delete',
    //         item:ele
    //     })
    //     console.log('删除',ele.id)
    // }
    // resetTodo(){
    //     let { Todo } = this.props.store
    //     Todo.updateList({
    //         type:'reset',
    //         item:null
    //     })
    // }
// 封装一个方法用来处理上面累赘的代码；
handleTodo(type,ele){
    let { Todo } = this.props.store
    switch(type){
        case 'add':
        let todo = {id:5,name:'一项新的任务',time:Date.now()}
        Todo.updateList({
            type:'add',
            item:todo
            })
            break;
        case 'reset':
        Todo.updateList({
            type:'reset',
            item:null
            })
            break;
        case 'delete':
        Todo.updateList({
            type:'delete',
            item:ele
            })
            break
            default:
    }
}
render(){
        // let { time,msg } = this.props.store.Todo//Todo是从index哪里的分模块引进来的；这是一种写法；
        let { Todo,Music } = this.props.store//这是另外一种写法，然后通过Todo.msg的方式进行渲染，这样就可以清楚的知道从哪里拿到的数据；
         
        console.log('-----------------',this.props.store)
        return(
            <div className='test_mobx'>
                <div className='btns'>
                    {/* <button onClick={this.addTodo.bind(this)}>添加一项任务</button>
                    <button onClick={this.resetTodo.bind(this)}>清空所有任务</button> */}
                    <button onClick={this.handleTodo.bind(this,'add')}>添加一项任务</button>
                    <button onClick={this.handleTodo.bind(this,'reset')}>清空所有任务</button>
                </div>
                {
                    Todo.list.map((ele,idx)=>{
                        return(
                            <div className='todo' key={ele.time}>
                                <span>{ele.id}</span>
                                <span>{ele.name}</span>
                                <span>{ele.time}</span>
                                <span onClick={this.handleTodo.bind(this,'delete',ele)}>删除</span>
                            </div>
                        )
                    })
                }
                <br/>
                <hr/>
                {/* 从分模块的哪里拿到的数据，在这里把它渲染 */}
                <h1>测试mobx</h1>
                <h1>{Todo.time}</h1>
                <h1>{Todo.msg}</h1>
                <br/><hr/>
                {/* 周杰伦的音乐列表渲染 */}
                <h1>{Music.zjl}</h1>
                {
                    Music.list.map((ele,idx)=>{
                        return (
                            <div key={ele.id}>
                                <span>{ele.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}