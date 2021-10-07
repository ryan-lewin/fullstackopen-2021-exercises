import React, {useState, useEffect} from "react";
import peopleService from "./services/people";
import Search from "./components/Search";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    peopleService.getAll()
      .then(response => {
        setPeople(response)
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

  const deletePerson = id => {
    const confirmed = window.confirm('Confirm deletion')
    if(confirmed === true) {
      peopleService.remove(id)
      .then(response => {
        setPeople(response)
      })
    }
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
      <Numbers people={people} filter={filter} sendDeleteData={deletePerson}/>
    </div>
  );
}

export default App;
