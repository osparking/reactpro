const name = "항재";

function showMsg() {
  return "장관이다!";
}
function Hello(props) {
  console.log(props);
  const {name, message} = props;
  return (
    <div>
      <h1>안녕하십니까 - {name} - {message}</h1>
    </div>
  );
}

export default Hello;
