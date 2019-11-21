import React from 'react'
export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let { item } = this.props
        return(
            <div>
                <span>{item.id}</span>
                <span>{item.title}</span>
                <span>{item.content}</span>
            </div>
        )
    }
}