import { useState, useCallback, useEffect, useRef } from 'react';
function PasswordGenerator() {
    const [len, setLen]= useState(8)
    const [isNum, setIsNum]= useState(false)
    const [isChar, setIsChar]= useState(false)
    const [password, setPassword]= useState("")
    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (isNum) str += "0123456789"
      if (isChar) str += "!@#$%^&*-_+=[]{}~`"
  
      for (let i = 1; i <= len; i++) {
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },[len,isNum,isChar,setPassword])
  
    useEffect(()=>{
      passwordGenerator()
    },[len,isNum,isChar,passwordGenerator])
  
    const passwordRef = useRef(null)
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    return (
            <div className="w-full max-w-lg px-5 py-2 mx-auto my-10 shadow-md rounded-lg bg-gray-500 text-orange-500">
                <h1 className='text-white text-center mb-2'>Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <div className='flex w-full bg-white'>
                        <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                        />
                        <button className='bg-transparent' onClick={passwordGenerator}>
                            <svg className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <button
                    onClick={copyPasswordToClipboard}
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                    >copy</button>
                    
                </div>
                <div className='flex text-sm gap-x-10'>
                    <div className='flex items-center gap-x-2'>
                        <input 
                        type="range"
                        min={4}
                        max={40}
                        value={len}
                        className='cursor-pointer'
                        onChange={(e) => {setLen(e.target.value)}}
                        />
                        <label>Length: {len}</label>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input
                            type="checkbox"
                            defaultChecked={isNum}
                            id="numberInput"
                            onChange={() => {
                                setIsNum((prev) => !prev);
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input
                        type="checkbox"
                        defaultChecked={isChar}
                        id="characterInput"
                        onChange={() => {
                            setIsChar((prev) => !prev )
                        }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
    
    );
}

export default PasswordGenerator;