"use client"
import React, { useState } from 'react'
import Header from './component/Header'
const page = () => {
  let[user,setUser]=useState("MASHAL")
  return (
    <div>
      <Header user = {user}/>
      <h1>I am Home page</h1>
    </div>
  )
}

export default page
