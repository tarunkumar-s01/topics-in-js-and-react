import React, { useEffect, useState } from 'react'

const UseEffectHooksComp = () => {
  const [age,setage] =  useState(18);
  const [sal,setsal] = useState(1000);

  // useEffect(()=>{setage(age+1)});

  // useEffect(()=>{setage(age+1);},[]);

  useEffect(()=>{setage(age+2);},[sal]);

  return (
    <div>this is UseEffectHooksComp
      <p>age is :{age}</p>
      <p>salary is :{sal}</p>
      <button onClick={()=>setsal(sal+500)}>increment</button>
    </div>
    
  )
}

export default UseEffectHooksComp