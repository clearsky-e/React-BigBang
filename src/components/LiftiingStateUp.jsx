export const LiftingStateUp = (props)=>{

const handelClick = (e)=>{
    e.preventDefault();
    let mydata = "Child Data";
    props.clickNow(mydata);

}
    return(
        <>
        hey there click <button onClick={handelClick}>here</button>
        </>
    )
}