import { useState } from "react";

import eventEmitter from "./utils/EventEmitter";

// Create a new instance of the EventEmitter class
// const eventEmitter = new EventEmitter();

export default function Comp1() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);

    // Emit the "increment" event
    eventEmitter.emit("increment");
  }

  return (
    <div>
      <h2>Component A</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

// export default function Comp1() {
//     const [count, setCount] = useState(0);

//     function handleIncrement() {
//       setCount(count + 1);

//       // Emit the "increment" event
//       eventEmitter.emit('increment');
//     }
//   return (
//     <>
//     <div>comp1</div>
//     <div>
//       <h2>Component A</h2>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//     </>
//   )
// }
