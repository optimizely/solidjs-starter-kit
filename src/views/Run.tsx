import "./Run.css";
import Header from "../components/Header";
import DecisionOutput from "../components/DecisionOutput";

function Run() {
  const result = {
    userId: "12345",
    variation: "A",
    sortMethod: "alphabetical",
  };

  return (
    <div class="container Run">
      <Header />
      <article>
        <h2>Experiment Output</h2>
        <output>
          <DecisionOutput result={result} />
        </output>
      </article>
    </div>
  );
}

export default Run;
