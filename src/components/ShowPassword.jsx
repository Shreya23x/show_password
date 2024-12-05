import React, { useState } from 'react'
import "./ShowPassword.css"
import eyeOpen from "./eye-icons/eye-open.png"
import eyeClose from "./eye-icons/eye-close.png"

function ShowPassword() {
  const [showPass , setShowPass] = useState(false)
  const [typee , setTypee] = useState('password')
  const [password , setPassword] = useState('')
  const eyeIcons=()=>{
    if (showPass===false){
      setShowPass(true)
      setTypee('text')
      return eyeOpen;
    }
    else {
      setShowPass(false)
      setTypee('password')
      return eyeClose;
    }

  }
  const letters= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+|:?><React,./;[]}{}=-";
  let sum="";
  const generatePassword=()=>{
    for (let i=0 ; i<16 ; i++){
      let value = letters[Math.floor(Math.random() *letters.length)]
      sum = sum+value;
    }
    setPassword(sum)
  }
  return (
    <>
    <div className="container">
      <div className="inputBox">
        <input type={typee}
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}} />
        <img src={showPass ? eyeOpen : eyeClose} alt="" onClick={eyeIcons} />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
    </>
  )
}

export default ShowPassword;