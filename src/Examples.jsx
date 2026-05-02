// хук - фишка
import { useState } from "react";
import { EXAMPLES } from "./data";
export default function Examples() {
  const [button, setButton] = useState("jsx");

  function handleClick(btnName) {
    setButton(btnName);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <button
          onClick={() => {
            handleClick("components");
          }}
        >
          Components
        </button>
        <button
          onClick={() => {
            handleClick("jsx");
          }}
        >
          Jsx
        </button>
        <button
          onClick={() => {
            handleClick("props");
          }}
        >
          Props
        </button>
        <button
          onClick={() => {
            handleClick("state");
          }}
        >
          State
        </button>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[button].title}</h3>
        <p>{EXAMPLES[button].description}</p>
        <pre>
          <code>{EXAMPLES[button].code}</code>
        </pre>
      </div>
    </section>
  );
}
