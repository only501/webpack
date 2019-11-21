import React from 'react'
export default class Event extends React.Component{
    constructor(props){
        super(props)
      this.clickHandle1 = this.clickHandle1.bind(this,'1','2')//可以性能优化，但是传参表示很方便；
    }
    // 事件对象是事件处理器的最后一个参数；
    clickHandle1(arg1,arg2,e){
        console.log('arg1',arg1)
        console.log('arg2',arg2)
        console.log('e',e)
    }
    mouseEnterHandle(e){
      console.log(e)
    }
    render(){
        return(
            <div>
                <h1>测试事件</h1>
                {/* 使用bind手动改变this的指向 */}
                <div onClick={this.clickHandle1.bind(this,'table1','sssss')}>点击</div>
                {/* 使用箭头函数来解决this的指向问题 */}
                <div onClick={(e)=>this.clickHandle1('1','2',e)}>点击1</div>
                {/* 在构造器constructor中进行this的指向的修正 */}
                <div onClick={this.clickHandle1}>点击2</div>
                     {/* 鼠标事件的测试 */}
                <div onMouseEnter={this.mouseEnterHandle.bind(this)}>鼠标事件</div>
            </div>
        )
    }
}