import { useState, useCallback, useEffect } from 'react';
function CaptchaGenerator() {
    const [len, setLen]= useState(6)
    const [isNum, setIsNum]= useState(false)
    const [isLarge, setIsLarge]= useState(true)
    const [isSmall, setIsSmall]= useState(false)
    const [isSpChar, setIsSpChar]= useState(false)
    const [captcha, setCaptcha]= useState("")
    const captchaGenerator = useCallback(() => {
      let capt = ""
      let str = ""
      if (isNum) str += "0123456789"
      if (isLarge) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (isSmall) str += "abcdefghijklmnopqrstuvwxyz"
      if (isSpChar) str += "!@#$%^&*-_+=[]{}~`"
  
      for (let i = 1; i <= len; i++) {
        let char = Math.floor(Math.random()*str.length+1)
        capt += str.charAt(char)
      }
      setCaptcha(capt)
    },[len,isNum,isLarge,isSmall,isSpChar,setCaptcha])
  
    useEffect(()=>{
      captchaGenerator()
    },[len,isNum,isLarge,isSmall,isSpChar,captchaGenerator])

    return (
            <div className="w-full max-w-lg px-5 py-2 mx-auto my-10 shadow rounded-lg bg-gray-500 text-orange-500">
                <h1 className='text-white text-center mb-2'>Captcha Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <div className='flex w-full bg-white'>
                        <input
                        type="text"
                        value={captcha}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        />
                        <button className='bg-transparent' onClick={captchaGenerator}>
                            <svg className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>                    
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input 
                        type="range"
                        min={4}
                        max={10}
                        value={len}
                        className='cursor-pointer w-14'
                        onChange={(e) => {setLen(e.target.value)}}
                        />
                        <label>Length: {len}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
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
                    <div className="flex items-center gap-x-1">
                        <input
                        type="checkbox"
                        defaultChecked={isSmall}
                        id="characterInput"
                        onChange={() => {
                            setIsSmall((prev) => !prev )
                        }}
                        />
                        <label htmlFor="characterInput">Small</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                        type="checkbox"
                        defaultChecked={isLarge}
                        id="characterInput"
                        onChange={() => {
                            setIsLarge((prev) => !prev )
                        }}
                        />
                        <label htmlFor="characterInput">Large</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                        type="checkbox"
                        defaultChecked={isSpChar}
                        id="characterInput"
                        onChange={() => {
                            setIsSpChar((prev) => !prev )
                        }}
                        />
                        <label htmlFor="characterInput">Special Characters</label>
                    </div>
                </div>
            </div>
    
    );
}

export default CaptchaGenerator