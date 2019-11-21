import React from 'react'
// import {
//     Link
// } from 'react-router-dom' //此方法也可以实现二级路由的跳转；只不过此方法每一个次都要引入Link、麻烦！
export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,title:'深圳GDP',time:'2019'},
                {id:2,title:'北京GDP',time:'2020'},
                {id:3,title:'上海GDP',time:'2021'},
            ]
        }
    }
    componentDidMount(){
        console.log('-----------------',this.props)//看看里面有没有我们要的数据；
        
    }
    ToDetail(ele){
      console.log(ele)
      this.props.history.push('/detail/'+ele.id)//这是编程式的路由跳转
    }
    render(){
        let { list } = this.state
        return(
            <div>
                <h1>新闻列表</h1>
                {
                    list.map((ele,idx)=>{
                    return (
                    //    <Link to='/detail' key={ele.id}>
                    //      <div>
                    //         <span>{ele.id}</span>
                    //         <span>{ele.title}</span>
                    //         <span>{ele.time}</span>
                    //     </div>
                    //    </Link>
                    <div key={ele.id} onClick={this.ToDetail.bind(this,ele)}>
                        <span>{ele.id}</span>
                        <span>{ele.title}</span>
                         <span>{ele.time}</span>
                    </div>
                    )
                    })
                }
            </div>
        )
    }
}