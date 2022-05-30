import { useState } from "react";
import "./App.css";
import { IPerson, PersonStatus } from "./data/interfaces";

const person: IPerson = {
  firstName: "Ali",
  lastName: "Dankal",
  age: 40,
  isMember: false,
  scores: [22],
  status: PersonStatus.Employee,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>
        {person.status === PersonStatus.Employee && (
          <>
            The person {person.firstName} {person.lastName} is {person.age}{" "}
            years old. The person has {person.scores} scores. His status is:{" "}
            {PersonStatus [person.status]}
          </>
        )}
      </p>
    </div>
  );
}

export default App;
