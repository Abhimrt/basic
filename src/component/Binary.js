import React, { useEffect, useRef, useState } from 'react'

const Binary = () => {
    const [val,setVal] = useState()
    // const [ans,setAns] = useState("")
    // const val = useRef()
    // const cal = useRef()
    // useEffect(() => {
    //     val.current.addEventListener("keypress", (event)=> {
    //         if (event.key === "Enter") {
    //             cal.current.click();
    //         }
    //     });
    // }, [])
    
  return (
    <section className='center col'>
        <label htmlFor="decimalnum">Enter decimal number for Binary:</label>
        <input  type="number" id='decimalnum' value={val} onChange={(e)=>setVal(e.target.value)}/>
        {/* <button ref={cal} onClick={()=>setAns(parseInt(val.current.value).toString(2))} >Calculate</button> */}
       
        <p><span>Ans: </span>{parseInt(val).toString(2)}</p>
    </section>
  )
}

export default Binary