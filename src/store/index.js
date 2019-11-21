import Todo from './Todo.js'//引入分模块，模块化的开发有利于代码的管理；
import Music from './Music.js'
class Store {
    // @observable time = '2019年11月15日'
    // store的分模块的写法
    constructor(){
        this.Todo = new Todo()
        this.Music = new Music()
    }
}
// const store = new Store()
export default new  Store()//记得抛出；