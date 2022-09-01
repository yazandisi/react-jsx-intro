const App = () => (
  <div>
    <Person name="YazanEEE" age={27} hobbies={["Code", "Running"]} />
    <Person name="SammyE" age={17} hobbies={["Swim", "Eat"]} />
    <Person name="RawanE" age={24} hobbies={["Play games", "sleep"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
