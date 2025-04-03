export const MyEvent=()=>{
    const handelClick=(e)=>{
        e.preventDefault();
        console.log(e,"this is the e i have pressed");
        

    }


    const handelClick2=(id)=>{
        console.log("button 2 with the ID: ",id );
        
    }
    return(
        <>
        <h2>This is all about the events</h2>
        <button onClick={handelClick}> button 1</button>
        <button onClick={((e)=>handelClick2("cool",e))}>button 2</button>
        
        </>
    )
}