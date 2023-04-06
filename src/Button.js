import React from "react";
import EventEmitter from "./utils/EventEmitter";


export default function Button() {
  const handleClickEvent = () => {
    EventEmitter.emit("clicked", {});
  };
  return (
    <div>
      <button onClick={handleClickEvent}>Increment count</button>
    </div>
  );
}
