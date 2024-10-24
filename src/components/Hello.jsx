const name = "항재";

function showMsg() {
  return "장관이다!";
}
function Hello() {
  return (
    <div>
      <h1>안녕하십니까 - </h1>
      <h2>{showMsg()}</h2>
    </div>
  );
}

export default Hello;
