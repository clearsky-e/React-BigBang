import { Children } from "./Children";
import { useState, useCallback  } from "react";

export const Parent = () => {
    const [num, setNum] = useState(0);

    // Memoizing the `one` function (though it's less important, since it's called only on a button click)
    const one = () => {
        setNum(num + 1);
        console.log("This is the function one");
    };

    // Memoizing the `two` function so it doesn't get recreated on every re-render
    const two = useCallback(() => {
        console.log("This is the function two");
    }, []); // The empty dependency array means it will not be recreated unless dependencies change.

    // const two =()=>{
    //     console.log("This is the function two");
    // }

    return (
        <>
            <h1>Hello, this is the Parent Component</h1>
            <span>num: {num}</span>
            <button onClick={one}>Add</button>
            <Children two={two} /> {/* Pass the memoized `two` function */}
        </>
    );
};
