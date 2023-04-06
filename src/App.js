import logo from "./logo.svg";
import "./App.css";
import LinkComponent from "./LinkComponent";
import LabelComponent from "./LabelComponent";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./Button";
import DisplayCount from "./DisplayCount";
import Navbar from "./Navbar";
import Comp1 from "./comp1";
import Comp2 from "./comp2";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Comp1 />

      <Comp2 />
      <Router>
        {/* <Navbar />
        <LinkComponent />
        <LabelComponent />
        <Button />
        <DisplayCount /> */}
        <Routes>
          {/* <Route exact path="/comp1" element={<Comp1 />}></Route>
          <Route exact path="/comp2" element={<Comp2 />}></Route> */}
          {/* <Route
            exact
            path="/LabelComponent"
            element={<LabelComponent />}></Route>
          <Route
            exact
            path="/LinkComponent"
            element={<LinkComponent />}></Route>
          <Route
            exact
            path="/Button"
            element={<Button lable="Increment the count" />}></Route>
          <Route exact path="/DisplayCount" element={<DisplayCount />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
