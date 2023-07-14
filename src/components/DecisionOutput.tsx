import "./DecisionOutput.css";

function DecisionOutput(props) {
  console.log(props.result);
  const result = props.result;
  return (
    <code class="Decision">
      User
      <b class="userId">{result.userId}</b> saw variation
      <b class="variation">{result.variation}</b> and got products sorted by
      <b class="sortMethod">{result.sortMethod}</b>
    </code>
  );
}

export default DecisionOutput;
