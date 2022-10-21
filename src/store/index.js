import React from 'react'
import { Counter } from "./Counter";
import { List } from "./List";

class RootStore{
    constructor(){
        this.counter =new Counter()
        this.list =new List()
    }
}

const rootStroe = new RootStore()

const rootContext = React.createContext(rootStroe)

const  useRoot = ()=> React.useContext(rootContext)

export {useRoot}