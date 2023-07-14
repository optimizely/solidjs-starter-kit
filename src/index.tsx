/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import optimizelySdk from "@optimizely/optimizely-sdk";
import "./index.css";
import Home from "./views/Home";
import Run from "./views/Run";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const optimizelyClient = optimizelySdk.createInstance({
  sdkKey: "K4UmaV5Pk7cEh2hbcjgwe",
});
if (optimizelyClient === null) {
  throw new Error("Optimizely instance is null");
}
optimizelyClient.onReady().then(() => {
  const isValid = optimizelyClient.isValidInstance()
  console.info(
    "optimizelyClient isValidInstance(): ",
    isValid
  );

  if (!isValid) {
    console.warn(">>> Optimizely client invalid.");
    return;
  }
});


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
