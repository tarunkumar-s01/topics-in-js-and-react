import React, { useState } from 'react'

const UseStateHooksComp = () => {
  const [count,setcount]=useState(0);
  const [count1,setcount1]=useState('tarun');

  const incre = () =>{
    setcount(count+1);
  }
  // const cname =() =>{
  //   setcount1='tarunkumar '
  // }
  return (
    <div>
      <h2>this is use state component</h2>
      <p>counter value:{count}</p>
      <p>name:{count1}</p>

      <button type='button' className='btn btn-primary' onClick={incre}>change</button>{" "}
      <button type='button' className='btn btn-primary' onClick={()=>setcount(count+2)}>change</button>

      <button type='button' className='btn btn-primary' onClick={()=>setcount1('tarunkumar S')}>change</button>
    </div>
    
  )
}

export default UseStateHooksComp