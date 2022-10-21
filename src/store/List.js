import {computed,makeAutoObservable}from 'mobx'
class List {
    list1 = [1 ,2,3,4,5,6,7]
    constructor(){
        makeAutoObservable(this,{
           fliterList: computed
        })
    }
    get fliterList(){
        return this.list1.filter((item,index)=>{
            return item % 2 == 0
        })
    }
    pushList=()=>{
        this.list1.push(Math.round(Math.random()*100))
    }
}
export{List}