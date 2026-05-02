export default function Card({ image, title, text }) {
  return (
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}
