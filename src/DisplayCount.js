// import React, { useEffect, useState } from "react";
// import EventEmitter from "./utils/EventEmitter";

// export default function DisplayCount() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const incrementCount = (Data) => {
//       console.log("Got it");
//       setCount((count) => count + 1);
//     };

//     const subcription = EventEmitter.addListener("clicked", incrementCount);

//     return () => {
//       subcription.remove();
//     };
//   }, []);
//   return <div> display page count = {count}</div>;
// }
