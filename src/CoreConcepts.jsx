import Card from "./Card";
import { CORE_CONCEPTS } from "./data";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <Card
          image={CORE_CONCEPTS[0].image}
          title={CORE_CONCEPTS[0].title}
          text={CORE_CONCEPTS[0].description}
        />
        <Card
          image={CORE_CONCEPTS[1].image}
          title={CORE_CONCEPTS[1].title}
          text={CORE_CONCEPTS[1].description}
        />
        <Card
          image={CORE_CONCEPTS[2].image}
          title={CORE_CONCEPTS[2].title}
          text={CORE_CONCEPTS[2].description}
        />
        <Card
          image={CORE_CONCEPTS[3].image}
          title={CORE_CONCEPTS[3].title}
          text={CORE_CONCEPTS[3].description}
        />
      </ul>
    </section>
  );
}
