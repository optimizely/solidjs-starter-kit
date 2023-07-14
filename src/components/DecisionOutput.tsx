function DecisionOutput(result) {
  return (
    <code>
      User
      <b class="userId">{result.userId}</b> saw variation
      <b class="variation">{result.variation}</b> and got products sorted by
      <b class="sortMethod">{result.sortMethod}</b>
    </code>
  );
}

export default DecisionOutput;
