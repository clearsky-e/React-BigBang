export const LearnMap = ()=>{
    const myData = [
        {name:"Aakash",userID:21,},
        {name:"Tony",userID:23,},
        {name:"Bruce",userID:22,},
        {name:"Charles",userID:24,},
        {name:"Stephen",userID:26,},
    
    ]
    return(
        <>
        <h2>Hello here we will map the data we have</h2>
        <ul>
        {myData.map((element, index)=>(
            <li key={index}>User {element.name} of userID: {element.userID}</li>
        ))}
        </ul>
        
        </>
    )
}