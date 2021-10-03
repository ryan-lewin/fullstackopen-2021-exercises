import React, {useState} from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [people, setPeople] = useState([
    { id: 0, name: 'Ryan Lewin'}
  ])
  
  const addPerson = data => {
    const newPerson = {
      id: people.length,
      name: data.name
    }
    setPeople(people.concat(newPerson))
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Form sendData={addPerson}/>
      <h2>Numbers</h2>
      <Numbers people={people}/>
    </div>
  );
}

export default App;
