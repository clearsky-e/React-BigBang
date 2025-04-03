import { useState } from "react"

export const LearnForm = ()=>{
    const [value, setValues] = useState({
        firstName:'',
        lastName:''
    })

    const handleChange = (e)=>{
        setValues({...value, [e.target.name]: e.target.value})
    }
const handelFormSubmit = (e)=>{
    e.preventDefault()
    console.log(value)
    alert(`First Name: ${value.firstName} Last Name: ${value.lastName}`)
    setValues({firstName:'', lastName:''})
}

    
    return (
        <>
        <form action="" onSubmit={handelFormSubmit}>
            <label>Enter First Name</label>
            <input type="text" name="firstName" value={value.firstName} onChange={handleChange} />
          
            <label>Enter Last Name</label>
            <input type="text" name="lastName" value={value.lastName} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}