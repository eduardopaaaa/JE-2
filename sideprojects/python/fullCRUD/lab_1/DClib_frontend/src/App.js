import {useState, useEffect} from 'react'
import axios from 'axios'

import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [people, setPeople] = useState([])

  const getPeople = () => {
    axios.get('http://localhost:8000/api/characters').then(
      (response) => setPeople(response.data),
      (err) => console.error(err)
    ).catch((error) => console.error(error))
  }

  const handleCreate = (addPerson) => {
    // let nextId = people[people.length - 1].id + 1
    axios.post('http://localhost:8000/api/characters', addPerson)
    .then((response) => {
      // addPerson.id = nextId
      setPeople([...people, response.data])
    })
  }

  const handleDelete = (deletedPerson) => {
    axios.delete('http://localhost:8000/api/characters/' + deletedPerson.id)
    .then((response) => {
      setPeople(people.filter(person => person.id !== deletedPerson.id))
    })
  }

  const handleUpdate = (editPerson) => {
    axios.put('http://localhost:8000/api/characters/' + editPerson.id, editPerson)
    .then((response) => {
      setPeople(people.map((person) => {
        return person.id !== editPerson.id ? person : editPerson
      }))
    })
  }

  useEffect(() => {
    getPeople()
  }, [])

  return(
    <>
      <h1>People</h1>
      <Add handleCreate={handleCreate}/>
      <div className='people'>
        {people.map((person) => {
          return (
            <div className='person' key={person.id}>
              <h4>Name: {person.name}</h4>
              <h5>Age: {person.age}</h5>
              <h6>Power: {person.main_power} </h6>
              <h7>Team: {person.team} </h7>
              <Edit handleUpdate={handleUpdate} person={person}/>
              <button onClick={()=> {handleDelete(person)}} value={person.id}>X</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App;
