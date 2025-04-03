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
