// 导入react
import React from 'react'
// 导入child的样式；
import './style.css'
// 定义react组件并且把它抛出去；
export default class Child extends React.Component {
    childClick(){
        console.log('子组件的事件触发了')
        this.props.myEvent('111')//触发父组件的事件；
    }
    formatMsg(msg){
        return msg+'000'
      }
    render(){
        let {msg} = this.props
        return (
            <div>
                <h2 className='con'>我是child.js的组件</h2>
                {/*this.props.msg 接受父组件传来的数据 ,必须要大括号包裹*/}
                <h2 className='p'>{this.formatMsg(msg)}</h2>
                <button onClick={this.childClick.bind(this)}>点击</button>
            </div>
        )
    }
}