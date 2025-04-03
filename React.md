---React.JS---

It is a JavaScript Library, created by the Facebook to build the frontend applications or user Interface and it allows us to create the reusable components.

Components are the reusable code.


we create the project in the react with the help of this command
```
npm create vite@latest

```
the vite helps us to create the react app 

JSX, the jsx is the part where we write the hmtl look a like code wrapped in a empty fragment here, it is stands for the javascript xml,


prop is the data passed from the parent to the child 	

React hooks are like special tools that allow you to use things like state (keeping track of data) and side effects (doing something after a change, like fetching data) in simple function components.
Before hooks, you needed class components to do that, but with hooks, you can do all of it in a simpler way with function components.

For example:
useState: Lets you store and update data in a function component.
useEffect: Lets you run things like fetching data or updating the screen when something changes.


______________________________________________________________________________________________________________________________________


useEffect have this empty array at the end if we didn't give then it will run everytime the render the component or we can explicitly give any state there inside a array then it will run only when this state will changes

In React, when you're using the useEffect hook, a cleanup function is a function that is used to clean up side effects or resources when a component unmounts or before the effect runs again.  - watch the video
When a component gets unmounted, like if the user leaves that page or the component is removed, you want to make sure that any of those tasks are properly cleaned up. Otherwise, those tasks could continue running in the background, even though the component that created them is gone. This could cause problems like memory leaks or unwanted behavior.
A cleanup function is just a way to tell React: "Hey, when I'm done with this task, make sure to clean up after it."

Here’s a breakdown of what happens:
useEffect runs automatically when the component mounts (is added to the screen) or when its dependencies change.

Why the return inside useEffect?
Inside useEffect, when we return a function, React will call that function before it runs the effect again or when the component is about to unmount.

Example 1: Timer
Let's say you set up a timer with setInterval to update the time every second. If you don't clean it up, the timer will still keep running in the background even after the component is removed from the screen.

Without cleanup function:
```
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Timer running");
  }, 1000);
  // NO cleanup function here.
}, []);  // This only runs once (on mount), but doesn't clean up.
```
Here, the timer will keep running even when the component is gone, causing a memory leak.

With cleanup function:
```
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  // Return a cleanup function to clear the interval when the component unmounts
  return () => {
    clearInterval(intervalId);  // This stops the timer when the component is removed.
  };
}, []);  // Runs only once, and clears the interval when the component is unmounted
```
Now, the cleanup function will clear the interval (stop the timer) when the component is unmounted, so the timer doesn’t keep running unnecessarily.



usememo
it is a performance optimization hook, used to memorize the result of an function, so that we can avoid the big and expensive calculation on every render and can relay on the dependency changes. or in other words
if we have a function that runs everytime even if the input are same then we can use the usememo so that, to avoid the big calculation
the usememo is the way to optimize the memory, it memorize the result of a calculation inside a function and run the function only when its inputes are different

In React, the component re-renders when the state or props change. During each render, React re-executes the function body. This is fine when the calculations or operations are cheap, but when you have an expensive operation (like complex calculations or processing large datasets), it can lead to performance issues. React could be doing more work than necessary.

This is where useMemo comes in handy. It "remembers" the result of a computation and only recalculates it when the dependencies (like state or props) change. So, instead of recalculating the result on every render, React will reuse the memoized value as long as the dependencies haven't changed.

example of the usememo
```
import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const calculateSum = () => {
    console.log('Calculating sum...');
    return numbers.reduce((sum, num) => sum + num, 0);
  };

  const sum = useMemo(() => calculateSum(), [numbers]); // Memoize result

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setNumbers([...numbers, 5])}>Add Number</button>
    </div>
  );
};

export default ExpensiveComponent;

```
here the Here’s what each part means:

useMemo: This is a React hook that returns a memoized (cached) value of the result of a function.
() => calculateSum(): This is an arrow function. It’s the function that gets executed to calculate the value you want to memoize. In this case, you're calling calculateSum(), which computes the sum of the numbers in the array.
[numbers]: This is the dependency array. It tells React when to recalculate the result of useMemo. React will only recalculate the value of sum if the numbers array changes. If numbers stays the same between renders, React will reuse the cached value of sum without calling calculateSum() again.
So, the [numbers] in the dependency array means, "Only re-run calculateSum when numbers has changed." If numbers stays the same, React will just reuse the previously memoized (cached) value of sum.





useCallback
just like this usememo cache the resut of a function the useCallback cache the function itself and helps the child component to not rerender, when the parent omponent renders,
means suppose we have a parent.jsx where we have  function one() and two(), we are passing one() function to the child and function two() is doing somethign in the parent component, so just because of the function two a state is changing and then this 
whole parent component is rendering and then this first function also re created so that he child compnent also gets the fresh function and so this child also et rerender so this is not good, everytime we render the parent the child will also get render
what we can do here is simply use the useCallback hook witht the function one(), so that whenever this parent changes then this will not chaange, It only re-creates the function if one of the values in its dependency array changes.

see here
```
Parent.jsx
import { Children } from "./Children";
import { useState,   } from "react";

export const Parent = () => {
    const [num, setNum] = useState(0);

    // Memoizing the `one` function (though it's less important, since it's called only on a button click)
    const one = () => {
        setNum(num + 1);
        console.log("This is the function one");
    };

      const two =()=>{
        console.log("This is the function two");
    }

    return (
        <>
            <h1>Hello, this is the Parent Component</h1>
            <span>num: {num}</span>
            <button onClick={one}>Add</button>
            <Children two={two} /> {/* Pass the memoized `two` function */}
        </>
    );
};


children.jsx
import { useEffect } from "react";

export const Children = (props) => {
    // Use `useEffect` to ensure `two` is only called when the component mounts (or dependencies change)
    useEffect(() => {
        props.two(); // This will now only run when the component mounts or when `props.two` changes
    }, [props.two]); // Only re-run when `props.two` changes (which should be never, as it's memoized)

    return (
        <>
            <h2>This is the Child Component</h2>
        </>
    );
};
```
here u will get the output as whenever we will click on te button in the parent 
This is the function one
This is the function two

but there is no change in the child component neither we change anything in the two function still it gets re-render, because, the first function changes the value of the num and when the state is changingthe react is rerendering the parent component and then recreate all the function and so two and when the two is a fresh function it will pass fagain in he children component and then finally it will print the log of the two function 
to avoid this we can simly use the useCallback with the two function so that it will be saved the cache
```
   // Memoizing the `two` function so it doesn't get recreated on every re-render
    const two = useCallback(() => {
        console.log("This is the function two");
    }, []); // The empty dependency array means it will not be recreated unless dependencies change.


```


customeHooks
The Custome hooks are nothing but the files we create with the prefix of "use", 
first we create the hooks folder and then there we can create the custome hooks here, and then now here we will first create the a file useCustomeHook
there we can create the logic , for instance we can create the file for the counter,
this hook will return the object and to use this we will also use the object
```
//useCounter.jsx
import { useState } from "react";

export const useCustomeCounter = () => {
  const [count, setCount] = useState(0);
  const handelCount = () => {
    setCount(count + 1);
  };

  return {
    count,
    handelCount,
  };
};
```

and then to use this hook we can do simply like this
```
import { useCustomeCounter } from "../hooks/useCustomeCounter";

export const CounterHook = () => {
    const {count, handelCount} = useCustomeCounter()
  return (
    <>
      <h2>This is my custome hook for the counter</h2>
      <span>Count: {count}</span>
      <button onClick={handelCount}>Increment </button>

    </>
  );
};

```


