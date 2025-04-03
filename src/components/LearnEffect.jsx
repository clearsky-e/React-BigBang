import { useEffect, useState } from "react"

export const LearnEffect = ()=>{

     const [count, setCount] = useState(0);
      const add = (e) => {
        e.preventDefault();
        setCount(count +1);
      };

    useEffect(()=>{
        console.log("this is useEffect")
;
        
    }, [count])

    return(
        <>
        <h2>hey there this is cool useEffect</h2>
        {count}
        <button onClick={add}>add</button>
        </>
    )
}