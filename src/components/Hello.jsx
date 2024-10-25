function Hello({person}) {
  return (
    <div>
      <h1>
        안녕하십니까 - {person.name}- {person.message}-
        {person.emoji}- {person.numbers}
      </h1>
    </div>
  );
}

export default Hello;
