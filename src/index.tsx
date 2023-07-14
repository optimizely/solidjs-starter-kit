/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import "./index.css";
import Home from "./views/Home";
import { OptimizelyContextProvider } from "./contexts/OptimizelyContext";

const Run = lazy(() => import("./views/Run"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <OptimizelyContextProvider>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/run" component={Run} />
        </Routes>
      </Router>
    </OptimizelyContextProvider>
  ),
  root!
);
