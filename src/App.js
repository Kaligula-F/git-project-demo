import { observer } from 'mobx-react-lite'
// import count from './store/Counter'
// import list from './store/List'
import {useRoot} from './store/index'
function App() {
  function addNum(){
    list.pushList()
  }
  // const rootStore = useRoot()
  const {counter,list} = useRoot()
  // console.log(rootStore)
  return (
    <div className="App">
      App
      <p>count ---{counter.num}</p>
      <button onClick={counter.addCount}>add count</button>
      <hr></hr>
      <ul>
        {
          list.list1.map(item => (<li key={item}>{item}</li>))
        }

      </ul>
      <button onClick={addNum}>add</button>
      <p>computed list</p>
      <ul>
        {
          list.fliterList.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default observer(App);
