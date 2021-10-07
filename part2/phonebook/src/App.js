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
      name: newName,
      number: newNumber
    }
    if(!nameExists(newName)) {
      peopleService.create(newPerson)
      .then(response => {
        setPeople(people.concat(newPerson)) 
      })
    } else {
      updatePerson(people.filter(person => person.name === newName)[0], newPerson)
    }
  }

  const updatePerson = (person, newDetails) => {
    const confirmedUpdate = window.confirm('Would you like to update?')
    if(confirmedUpdate === true){
      peopleService.update(person.id, newDetails)
      .then(response => {
        setPeople(response)
      })
    }
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
