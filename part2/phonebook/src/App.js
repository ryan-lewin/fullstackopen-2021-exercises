import React, {useState} from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [people, setPeople] = useState([
    { id: 0, name: 'Ryan', number: '0412345678'},
    { id: 1, name: 'Joe', number: '0412345678'},
    { id: 2, name: 'Guy', number: '0412345678'},
    { id: 3, name: 'Sam', number: '0412345678'},
    { id: 4, name: 'Tom', number: '0412345678'},
  ])

  const [filter, setFilter] = useState('')
  
  const addPerson = (newName, newNumber) => {
    const newPerson = {
      id: people.length,
      name: newName,
      number: newNumber
    }

    !nameExists(newPerson.name) 
      ? setPeople(people.concat(newPerson)) 
      : alert(`${newPerson.name} has already been added to the phonebook`)
  }

  const updateFilter = updatedFilter => {
    setFilter(updatedFilter)
  }

  const nameExists = name => people.some((el) => el.name === name)

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Search sendFilter={updateFilter}/>
      <Form sendData={addPerson}/>
      <h2>Numbers</h2>
      <Numbers people={people} filter={filter}/>
    </div>
  );
}

export default App;
