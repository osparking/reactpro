function Hello(props) {
  return (
    <div>
      <h1>
        안녕하십니까 - {props.person.name}- {props.person.message}-
        {props.person.emoji}- {props.person.numbers}
      </h1>
    </div>
  );
}

export default Hello;
