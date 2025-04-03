import { LearnComponent } from "./components/LearnComponent";
import { MainProp } from "./components/MainProp";
import { MyEvent } from "./components/LearnEvent";
import { LiftingStateUp } from "./components/LiftiingStateUp";
import { LearnState } from "./components/LearnState";
import { LearnEffect } from "./components/LearnEffect";
import { LearnMemo } from "./components/LearnMemo";
import { CounterHook } from "./components/LearnCustomeHook";
import { useState } from "react";
import { LearnMap } from "./components/LearnMap";
import { LearnForm } from "./components/LearnForms";
import { Parent } from "./components/Callback/Parent";
import { LearnUseRef } from "./components/Callback/USEREF/LearnUseRef";

function App() {
  const clickNow = (data) => {
    console.log(data, "we get it from the child");
  };

  const [status, setStatus] = useState("Logout");

  return (
    <>
      <LearnComponent />
      <MainProp name="SHIV shankar" />
      <hr />
      <MyEvent />
      <hr />
      <LiftingStateUp clickNow={clickNow} />
      <hr />
      <h2>this is the state management thing,</h2>

      <LearnState />

      <hr />
      <h2>this is now for the useEffect</h2>
      <LearnEffect />
      <hr />
      <h2>time to learn the use memeo here</h2>
      <LearnMemo />
      <hr />
      <h2>this is learnign of the custom hooks</h2>
      <CounterHook />
      <hr />

      <h2>This is for the Condition Rendering </h2>

      {status == "Login" ? (
        <>
          <h2>Welcome to Dashboard</h2>
          <button onClick={() => setStatus("false")}>Logout</button>
        </>
      ) : (
        <>
          <h2>You are Logout Please Login again</h2>
          <button onClick={() => setStatus("Login")}>Login</button>
        </>
      )}

      <hr />
      <h2>Now lets learn the LearnMap</h2>
      <LearnMap />
      <hr />
      <h2>time for the form</h2>
      <LearnForm />
      <hr />
      time to learn the useCallback
      <Parent />

      <hr />
      Now time to Learn the useRef
      <h2>this is the useRef</h2>
      <LearnUseRef  />


      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
