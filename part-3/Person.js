const Person = (prop) => {
  let reply;
  let name;
  let hobbies;
  if (
    prop.age >= 18
      ? (reply = "Please go vote")
      : (reply = "You must be 18 to vote")
  )
    if (
      prop.name.length > 6 ? (name = prop.name.slice(0, 6)) : (name = prop.name)
    )
      return (
        <div>
          <p>Learn some information about this person</p>
          <p>Name: {name}</p>
          <p>Age: {prop.age}</p>
          <p>{reply}</p>
          <ul>
            {prop.hobbies.map((h) => (
              <li>{h}</li>
            ))}
          </ul>

          <p>-------------------------------------------</p>
        </div>
      );
};
