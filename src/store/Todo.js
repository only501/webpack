import { observable,action} from 'mobx'
class Store {
    @observable time = '2019年11月15日'
    @observable msg = 'hello react'//要分享的数据
    @observable list = [
        {id:1,name:'跑步',time:'2019'},
        {id:2,name:'打球',time:'201911'},
        {id:3,name:'睡觉',time:'201922'},
    ]
    // @action add(payload){//action在mobx是修改state的数据；
    //     console.log('store add 执行了')
    //     this.list.push(payload)
    // }
    @action updateList(payload){//封装一个方法，用来处理增、删、改、查；只不过这里没有改、查；
        console.log(payload)
        switch (payload.type){//应用switch循环，它找到第一个符合的条件就return；减少性能；
            case 'delete':
            let list = this.list
            list.map((ele,idx)=>{
                if(ele.time===payload.item.time){
                    list.splice(idx,1)
                }
            })
            this.list = list
            break
            case 'add':
            this.list.push(payload.item)
            break
            case 'reset':
            this.list = []
            break
            default:
        }
    }
}
// const store = new Store()可以不要 
export default Store//直接抛出，然后在根index哪里引入；