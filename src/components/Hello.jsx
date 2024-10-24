const name = "항재";

function showMsg() {
    return "장관이다!";
}
function Hello() {
  return <h1>안녕하십니까 - {showMsg()}</h1>;
}

export default Hello;
