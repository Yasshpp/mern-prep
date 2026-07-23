import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
   let[color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex felx-wrap justify-center gap-4 shadow-md bg-white bottom-12 inset-x-0 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
      </div>

    </div>
  )
}

export default App
