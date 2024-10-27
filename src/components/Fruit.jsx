export default function ({ name, price, emoji }) {
  return (
    <>
      {price > 1000 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
