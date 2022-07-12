import "./styles.css";

import { useState } from "react";

function One() {
  return (
    <>
      <h1>Page-1</h1>
      <p>First Slide</p>
    </>
  );
}

function Two() {
  return (
    <>
      <h1>Page-2</h1>
      <p>Second Slide</p>
    </>
  );
}

function Three() {
  return (
    <>
      <h1>Page-3</h1>
      <p>Third Slide</p>
    </>
  );
}

function Four() {
  return (
    <>
      <h1>Page-4</h1>
      <p>Fourth Slide</p>
    </>
  );
}
export default function App() {
  const [state, newState] = useState(1);
  return (
    <div className="App">
      <div className="box">
        <div className="content">
          {state === 1 ? (
            <One />
          ) : state === 2 ? (
            <Two />
          ) : state === 3 ? (
            <Three />
          ) : state === 4 ? (
            <Four />
          ) : null}
        </div>
        <div className="btn">
          {state !== 1 ? (
            <button
              onClick={() => {
                newState(state - 1);
              }}
            >
              Back
            </button>
          ) : null}
          {state !== 4 ? (
            <button
              onClick={() => {
                newState(state + 1);
              }}
            >
              Next
            </button>
          ) : null}

          {state !== 1 ? (
            <button
              onClick={() => {
                newState(1);
              }}
            >
              Re-Start
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
