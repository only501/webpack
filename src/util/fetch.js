// 封装调用接口的方法；
import axios from 'axios'//引入第三方的插件axios；
const baseUrl = 'http://localhost:8080'
function fetch(api,method,callback){
    axios({
        url:baseUrl+api,
        method:method,
        headers:{
            token:'f43214535346546574547'
        }
    }).then(res=>{
        console.log('成功')
        let data = null
        if(res.data.code===0){
            data = res.data.data
        }
        callback && callback(data) 
    }).catch(err=>{
        console.log('失败',err)
    }).then(()=>{
        //总会执行
    })
}
export default fetch//记得抛出，不然后面的应用不到；