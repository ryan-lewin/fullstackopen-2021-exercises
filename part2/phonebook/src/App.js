import React, {useState, useEffect} from "react";
import axios from "axios";
import peopleService from "./services/people";
import Search from "./components/Search";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/people')
      .then(res => {
        setPeople(res.data)
      })
  }, [])
  
  const addPerson = (newName, newNumber) => {
    const newPerson = {
      id: people.length,
      name: newName,
      number: newNumber
    }

    !nameExists(newPerson.name) 
      ? peopleService.create(newPerson)
      .then(response => {
        setPeople(people.concat(newPerson)) 
      })
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
