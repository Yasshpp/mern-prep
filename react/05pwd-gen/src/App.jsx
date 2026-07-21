import {useState, useCallback, useEffect, useRef} from 'react'

function App() {

   const [length, setLength] = useState(10);
   const [isNumberAllowed, setIsNumberAllowed] = useState(false);
   const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
   const [password, setPassword] = useState('');
   
  //  useRef
  const passwordRef = useRef(null)
  
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumberAllowed) str += "0123456789"
    if(isCharacterAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      passs += str.charAt(charIndex)

    }
    setPassword(pass)
  }, 
// useCallback dependencies
  [length, isNumberAllowed, isCharacterAllowed]
)

    useEffect(() => {
      passwordGenerator()
    }, [length, isNumberAllowed, isCharacterAllowed, passwordGenerator])
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center">Password Generator</h1>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-4">
            <label htmlFor="length">Password Length</label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="numbers">Allow Numbers</label>
            <input
              type="checkbox"
              id="numbers"
              checked={isNumberAllowed}
              onChange={(e) => setIsNumberAllowed(e.target.checked)}
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="characters">Allow Special Characters</label>
            <input
              type="checkbox"
              id="characters"
              checked={isCharacterAllowed}
              onChange={(e) => setIsCharacterAllowed(e.target.checked)}
            />
          </div>
          <button onClick={passwordGenerator} className="bg-blue-500 text-white p-2 rounded">
            Generate Password
          </button>
          <div className="flex gap-4">
            <input type="text" ref={passwordRef} value={password} readOnly />
            <button
              onClick={() => {
                if (passwordRef.current) {
                  passwordRef.current.select()
                  document.execCommand('copy')
                }
              }}
              className="bg-green-500 text-white p-2 rounded"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
