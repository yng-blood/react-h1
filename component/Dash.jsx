import React from 'react'
import { useState } from 'react'
import Func1 from './Fun1'
import Classfun1 from './Classfun1'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils'

const Dash = () => {
const [n,setn] = useState(false)
const [s, sets ]= useState(false)
const show = ()=>{ n? setn(false): setn(true)}
const cshow = ()=>{ s? sets(false): sets(true)}
  return (
    <div>
<h1 style={{color:"red"}}>Styling using functional component</h1>
<button className="linen" id="funbutton" onClick={show}> Function Componet </button>
<button className="linen" id="classButton" onClick={ cshow} > class Base component </button> 
<div id="flex">{n && <Func1/> }{s && <Classfun1/>}</div>
    </div>
  )
}
export default Dash