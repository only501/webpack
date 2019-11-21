import React from 'react'
export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        console.log('---------------------',this.props.match.params.id)
    }
    render(){
        return(
            <div>
                {/* this.props.match.params.id就取路由的数据的*/}
                <h1>新闻详情页{this.props.match.params.id}</h1>
            </div>
        )
    }
}