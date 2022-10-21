import {makeAutoObservable} from 'mobx'
class Counter{
    num = 1000
    constructor(){
        makeAutoObservable(this)
    }
    // addCount(){
    //     this.num ++
    //     console.log('aaaaa')
    // }
    addCount = ()=>{
        this.num ++
    }
}
export {Counter}