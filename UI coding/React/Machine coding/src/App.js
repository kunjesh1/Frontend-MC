import React, { useRef, useState } from "react";
import Task from "./TODO/Task";
import "./App.css";
import Todo from "./TODO/todo";
import Star from "./Star-Rating/Star";

export default function App() {
  return (
    <>
      {/* TODO */}
      {/* <Todo /> */}

      {/* STAR RATING */}
      <Star />
    </>
  );
}
