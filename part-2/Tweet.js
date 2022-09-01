const Tweet = (prop) => {
  return (
    <div>
      <h1>Username: {prop.username}</h1>
      <p>Name: {prop.name}</p>
      <p>Date: {prop.date}</p>
      <p>Message: {prop.message}</p>
    </div>
  );
};
