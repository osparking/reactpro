const name = "항재";

function showMsg() {
  return "장관이다!";
}
function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>안녕하십니까 - {props.name}</h1>
    </div>
  );
}

export default Hello;
