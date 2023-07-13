import { createSignal } from "solid-js";

function Section(props) {
  const [icon, setIcon] = createSignal(null);

  import(`../assets/${props.icon}.svg`)
    .then((module) => {
      setIcon(module.default);
    })
    .catch((error) => {
      console.error(`Error loading icon: ${error}`);
    });

  return (
    <section>
      <h2>
        {() => icon() && <img src={icon()} alt="icon" />}
        {props.heading}
      </h2>
      {props.children}
    </section>
  );
}

export default Section;
