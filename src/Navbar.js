import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/Button"> To to Botton page</Link>
      <br />
      <Link to="/DisplayCount"> check Updated count</Link>
      <br />
      <Link to="/LabelComponent"> To to LabelComponent</Link>
      <br />
      <Link to="/LinkComponent"> To to LinkComponent</Link>
      <br />
    </div>
  );
}
