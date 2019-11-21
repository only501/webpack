import React from 'react'
import Child1 from '../../components/child/Child1.js'
import Child2 from '../../components/child/Child2.js'
export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
        msg:''
        }
    }
    changMsg(msg){
        console.log(msg)
        this.setState({
            msg:msg
        })
    }
    
    render(){
        let { msg } = this.state
        return(
          <div> 
              <h1>关于我们的公司</h1>
              <Child1 onChang={this.changMsg.bind(this)}></Child1>
              <Child2 msg={msg}></Child2>

          </div>
        )
    }
}