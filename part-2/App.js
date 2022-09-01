const App = () => (
  <div>
    <Tweet
      username="yazandisi"
      name="Yazan"
      date="08/29/22"
      message="I like tweets"
    />
    <Tweet
      username="rawandisi"
      name="Rawan"
      date="08/30/22"
      message="I dont like tweets"
    />
    <Tweet
      username="sammydisi"
      name="Sammy"
      date="08/31/22"
      message="I like instagram"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
