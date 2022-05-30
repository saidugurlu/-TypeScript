import { useState } from "react";
import "./App.css";
import { IPerson} from "./data/interfaces";

const person: IPerson = {
  firstName: "Ali",
  lastName: "Dankal",
  age: 40,
  isMember: false,
  scores: [22, 56, 88],
  status: 'customer'
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>
      {person.status === 'customer' && (
          <>
            The person {person.firstName} {person.lastName} is {person.age}{" "}
            years old. Their scores are: {person.scores.join(', ')} and his status is: {person.status}
          </>
        )}
      </p>
    </div>
  );
}

export default App;
