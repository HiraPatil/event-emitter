import { EventEmitter } from "events";
import { useState, useEffect } from "react";

import eventEmitter from "./utils/EventEmitter";

export default function Comp2() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    console.log("yaa got");
  }

  eventEmitter.on("increment", handleIncrement);

  //   useEffect(() => {
  //     function handleEventA(data) {
  //       setCount(count + 1);
  //     }

  //     // Register the event listener
  //     eventEmitter.on("increment", handleEventA);

  //     // Unregister the event listener on component unmount
  //     return () => {
  //       eventEmitter.off("increment", handleEventA);
  //     };
  //   }, []);

  return (
    <div>
      <h2>Component B</h2>
      <p>Count: {count}</p>
    </div>
  );
}
