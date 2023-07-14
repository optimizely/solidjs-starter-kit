import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";
import optimizelySdk from "@optimizely/optimizely-sdk";

const OptimizelyContext = createContext();

function OptimizelyContextProvider(props) {
  const client = optimizelySdk.createInstance({
    sdkKey: "Jm4Qre4K2uNtdPT7TKs4v",
  });
  if (client === null) {
    throw new Error("Optimizely instance is null");
  }
  client.onReady().then(() => {
    const isValid = client.isValidInstance();
    console.info("optimizelyClient isValidInstance(): ", isValid);

    if (!isValid) {
      console.warn(">>> Optimizely client invalid.");
      return;
    }
  });

  const [optimizelyClient] = createStore(client);

  return (
    <OptimizelyContext.Provider value={{ optimizelyClient }}>
      {props.children}
    </OptimizelyContext.Provider>
  );
}

function useOptimizelyContext() {
  return useContext(OptimizelyContext);
}

export { OptimizelyContext, OptimizelyContextProvider, useOptimizelyContext };
