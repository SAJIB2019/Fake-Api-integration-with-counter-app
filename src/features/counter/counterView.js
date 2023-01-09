import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px",
        border: "1px solid red",
      }}
    >
      <h2
        style={{ color: "white", fontSize: "28px", textTransform: "uppercase" }}
      >
        Count: {count}
      </h2>
      <button
        style={{
          padding: "8px",
          margin: "5px",
          backgroundColor: "white",
          textTransform: "uppercase",
        }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        style={{
          padding: "8px",
          margin: "5px",
          backgroundColor: "white",
          textTransform: "uppercase",
        }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        style={{
          padding: "8px",
          margin: "5px",
          backgroundColor: "white",
          textTransform: "uppercase",
        }}
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterView;
