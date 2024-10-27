export default function ({ soldout, name, price, emoji }) {
  return (
    <li>
      {emoji} {name} {price} {soldout ? "품절" : ""}
    </li>
  );
}
