import { TextField } from '@mui/material';
import './App.css'
import {Button} from  '@mui/material';
import { useState } from 'react';

function App() {
const[principle,setPrinciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[interest,setInterest]=useState(0)
const[isPrincipleInputValue,setPrincipleInputValue]=useState(false)
const[israteInputValue,setRateInputValue]=useState(false)
const[isYearInputValue,setYearInputValue]=useState(false)

const handleValidation=(tag)=>{
  const{name,value}=tag
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
// valid
    if(name=='principle'){
      setPrinciple(value)
      setPrincipleInputValue(false)
    }else if(name=='year') {
      setYear(value)
      setYearInputValue(false)
    }else{
      setRate(value)
      setRateInputValue(false)
    }
  }else{
    // invalid
    if(name=='principle'){
      setPrinciple(value)
      setPrincipleInputValue(true)
    }else if(name=='year'){
      setYear(value)
      setYearInputValue(true)
    }else{
      setRate(value)
      setRateInputValue(true)
    }
  }

}

const handleClick=(e)=>{
  e.preventDefault()
  setInterest((principle*rate*year)/100)

}

const handleReset=()=>{
setPrinciple("")
setInterest("")
setRate("")
setYear("")
setRateInputValue(false)
setprincipleInputValue(false)
setYearInputValue(false)
}

  return (
    <>

 <div style={{minHeight:"100vh",width:"100%",backgroundColor:"lightgrey"}} className="d-flex justify-content-center align-items-center">

  <div className="bg-info p-5 rounded"style={{boxShadow:"2px 4px 6px"}}>
    <h2 className='fs-3 fw-bolder text-danger'style={{textDecoration:"underline"}}>SIMPLE INTREST CALCULATOR</h2>
    <p className='text-center'>Calculate Your Simple Intrest With Us</p>
    <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
      <h1 className='danger'>&#8377; {interest}</h1>
    </div>
    <div className="mt-5">
    <form className='border rounded p-3 d-flex flex-column p-3'>
<TextField id="principle" value={principle} name='principle' label="Principle Amount" variant="outlined" onChange={e=>handleValidation(e.target)}/>
  {isPrincipleInputValue &&<div className="mb fw-bolder text-danger">*Invalid Input</div>}
<TextField id="year" value={year} name='year' label="Year" variant="filled" onChange={e=>handleValidation(e.target)}/>
{isYearInputValue &&<div className="mb fw-bolder text-danger">*Invalid Input</div>}
<TextField id="rate" value={rate} name='rate' label="Rate Of Intrest" variant="standard" onChange={e=>handleValidation(e.target)}/>
{israteInputValue &&<div className="mb fw-bolder text-danger">*Invalid Input</div>}

    </form>
  </div>
  <div className="mt-3 d-flex justify-content-between">
<Button variant="contained" type='submit' onClick={handleClick}>Calculate</Button>
<Button variant="outlined" onClick={handleReset}>Reset</Button>

  </div>
  </div>
 </div>

    </>
  )
}

export default App
