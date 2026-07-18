import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)
  // let counter = 10;

  const addValue = () => {
      // console.log('Increment by 1');
      // counter ++;
      setCounter(counter + 1);
      console.log(counter);
  }
  const subtractValue = () => {
      // console.log('Decrement by 1');
      setCounter(counter - 1);
      console.log(counter);
  }

  return (
    <>
      <h1>Hello!!</h1>
      <h3>Counter: {counter}</h3>

        <button onClick={addValue}>Increment by 1</button>
        <button onClick={subtractValue}>Decrement by 1</button>
          </>
  )
}

export default App
