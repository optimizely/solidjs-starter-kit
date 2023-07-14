import { For } from "solid-js";
import "./Run.css";
import Header from "../components/Header";
import DecisionOutput from "../components/DecisionOutput";
import { type Result } from "../types/Result";
import { useOptimizelyContext } from "../contexts/OptimizelyContext";

function Run() {
  const { optimizelyClient } = useOptimizelyContext();

  let projectId: string = "";
  const datafile = optimizelyClient.getOptimizelyConfig()?.getDatafile();
  if (datafile) {
    projectId = JSON.parse(datafile).projectId;
  }

  const results: Result[] = [];
  for (let i = 0; i < 10; i++) {
    const userId = Math.floor(Math.random() * (10000 - 1000) + 1000).toString();

    const user = optimizelyClient.createUserContext(userId);

    const decision = user?.decide("product_sort");
    if (!decision) {
      continue;
    }

    results.push({
      userId,
      variation: decision.variationKey,
      sortMethod: decision.variables["sort_method"],
    });
  }

  return (
    <div class="container Run">
      <Header />
      <article>
        <h2>Experiment Output</h2>
        <output>
          <For each={results}>
            {(result) => <DecisionOutput result={result} />}
          </For>
        </output>
      </article>
    </div>
  );
}

export default Run;
