/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import "./index.css";
import Home from "./views/Home";
import Run from "./views/Run";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/run" component={Run} />
      </Routes>
    </Router>
  ),
  root!
);
