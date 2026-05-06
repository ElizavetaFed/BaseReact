export default function Header({ title }) {
  const words = ["Fundamental", "Core", "General", "Important"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  getRandomInt(3);
  return (
    <header>
      <img src="/react-core-concepts.png" alt="Stylized atom" />
      <h1>{title}</h1>
      <p>
        {words[getRandomInt(words.length)]} React concepts you will need for
        almost any app you are going to build
      </p>
    </header>
  );
}
