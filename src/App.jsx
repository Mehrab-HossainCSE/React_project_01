import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [length,setLength]=useState(8);
    const [number,setNumber]=useState(false);
    const [char,setChar]=useState(false);
    const [password,setPassword]=useState("");
    const passwordGenerator=useCallback(()=>{
     let pass=""
     let str="ABXCHTOHKp0pewjd0phfwp";
     if(number) str+="12345667";
     if(char) str+="&*))%^$$*";
     for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+ =str.charAt(char)
     }
    setPassword(pass);
    },[length,number, char,setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='className="flex shadow rounder-lg overflow-hidden mb-5"'>
      <input
       type="text" 
       value={password} className='outine-none w-full py-1 pz-3'
       placeholder='password'
       readOnly
       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label > Lenght:{length}</label>
        </div>

      </div>
     </div>
    
    </>
  )
}

export default App
