import React from "react";
import CounterView from "./features/counter/counterView";
import PostView from "./features/posts/postView";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "purple",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Counter App
      </h1>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
