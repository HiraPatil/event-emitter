// import React, { useEffect, useState } from "react";
// import EventEmitter from "./utils/EventEmitter";

// export default function LabelComponent() {
//   useEffect(() => {
//     const onNewLog = (eventData) => {
//       setLogs((prev) => [...prev, eventData]);
//       setCount((count) => count + 1);
//     };
//     const Listerner = EventEmitter.addListener("NewLog", onNewLog);
//     return () => {
//       Listerner.remove();
//     };
//   }, []);
//   const [logs, setLogs] = useState([]);
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <div>This is my label LabelComponenta</div>
//       {/* <div>count = {count}</div> */}
//       {logs.map((log, index) => {
//         return <div key={index}>{log.Text}</div>;
//       })}
//     </>
//   );
// }
