import logo from "../assets/logo.svg";
import "./Home.css";
import Section from "../components/Section";
import Header from "../components/Header";

function Home() {
  return (
    <div class="container Home">
      <Header />
      <article>
        <Section heading="Quick Start Documentation" icon="documentation">
          <p>
            We'll be following much of the
            <a
              href="https://docs.developers.optimizely.com/feature-experimentation/docs/react-quickstart"
              target="_blank"
              rel="noopener"
            >
              Optimizely React quick start documentation
            </a>
            as a basis for this example app.
          </p>
        </Section>
        <Section heading="Tooling" icon="tooling">
          <p>
            We've created this project using the standard SolidJS tooling and
            wrapped it in a
            <a href="https://containers.dev/" target="_blank" rel="noopener">
              Dev Container
            </a>
            for use with VS Code.
          </p>
          <p>
            More instructions are available in
            <code>README</code>
            document.
          </p>
        </Section>
        <Section heading="Get Started" icon="get-started">
          <p>
            Once you have your Optimizely SDK key, you can add it to the
            <code>src/App.vue</code>. Then, click the Run nav link 👆 to see the
            example in action.
          </p>
        </Section>
        <Section heading="Optimizely Support" icon="support">
          <p>
            If you have any qusetions about implementing Feature
            Experimentation, reach out to your Optimizely representative. You
            can also check out the the
            <a
              href="https://docs.developers.optimizely.com/feature-experimentation/docs"
              target="_blank"
              rel="noopener"
            >
              SDK documentation
            </a>
            or GOTO our
            <a
              href="https://support.optimizely.com/hc/en-us"
              target="_blank"
              rel="noopener"
            >
              support site
            </a>
            .
          </p>
        </Section>
      </article>
    </div>
  );
}

export default Home;
