import {useState} from 'react'

const Add = (props) => {
  let emptyPerson = { name: '', age: '', main_power:'', team:''}
  const [person, setPerson] = useState(emptyPerson)

  const handleChange = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(person)
    setPerson(emptyPerson)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={person.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" value={person.age} onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="main_power">Power: </label>
        <input type="text" name="main_power" value={person.main_power} onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="team">Team: </label>
        <input type="text" name="team" value={person.team} onChange={handleChange}/>
        <br/>
        <br/>
        <br/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
