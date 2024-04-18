import logo from './logo.svg';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/index.tsx';
import { createContext, useEffect, useState } from 'react';


function App() {
  const [count ,setCount] = useState('');
  const [range,setRange] = useState('');
  const [ arr, setArr] = useState([
   
  ]);
  useEffect(() =>{

  },[]);
  const createContent = ()=>{
    let arr = [];
    for(let i=0;i<count;i++){
      let height = Math.floor(Math.random()*range)
      arr.push(<li key={i} style={{
        height
      }}>{height}</li>)
    }
    setArr(arr); 
  }
  return (
    <div className="App">
      <div className='box'>
        <ul className=''>
          {
            arr.map((item, index) => {
              return item
            })
          }
        </ul> 
      </div>
      <label>范围</label><input onInput={(e)=>{setRange(e.target.value)}} value={range}></input> 
        <label>个数</label><input onInput={(e)=>{setCount(e.target.value)}} value={count}></input> 
        <button onClick={createContent} style={{}}> 创建</button> 
    </div>
  );
}

export default App;
