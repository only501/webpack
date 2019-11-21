// 导入react
import React from 'react'
import Life from '../../components/life/Life.js'
// 无状态组件 Pure Component
// 定义无状态组件；
function PureItem(props){
    console.log('======================',props)
    let { item } = props
    return (
        <div>
            <span>{item.title}</span>
            <span>{item.time}</span>
        </div>
    )
}


export default class App extends React.Component{
      constructor(props){//表示构造器  
        super(props)//super表示调用父组件的构造器；
       this.state = {
           name:'1235',
           flag:true,
           item :{
               title:'标题',
               time:'2019'
           }
       }
    }
    componentWillMount(){
        console.log('------------ will mount')
    }
    componentDidMount(){
        console.log('------- did mount')
    }
    changeLifeProps(){
        this.setState({
            name:'332332',
            flag:false
        })
    }
    toggleFlag(){
        this.setState({
            flag:!this.state.flag
        })
    }
   render(){
       console.log('app will mount')
       let { name,flag,item} = this.state;
       return(
           <div>
            <button onClick={this.changeLifeProps.bind(this)}>父组件的按钮</button>
            <button onClick={this.toggleFlag.bind(this)}>控制子组件的显示隐藏</button>
             {/* react的显示与隐藏的实现方法 */}
             {
                 flag && <Life name={ name }></Life>
             }
               
            {/* {
                 !flag ? <Life name={name}></Life> : ''
            } */}
           <PureItem item={ item }></PureItem>
           </div>
       )
}
}