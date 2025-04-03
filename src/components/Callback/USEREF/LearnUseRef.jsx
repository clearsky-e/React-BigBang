import {  useEffect, useRef } from "react"

export const LearnUseRef = ()=>{
    const ref = useRef(null)

  useEffect (()=>{
    console.log("inside the UseEffect");
  })

    const Inc = ()=>{
        console.log(ref.current);
        ref.current.focus();
        
    }

    return(
        <>
        We are learning the use Ref
        <button onClick={Inc}>hit Input</button>
        <input type="text" ref={ref} />
        {/* <span>{ref.current}</span> */}

        
        </>
    )
}