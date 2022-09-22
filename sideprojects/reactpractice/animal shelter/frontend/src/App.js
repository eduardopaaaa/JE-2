
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';




const App = () => {

  const[newDescription, setNewDescription] = useState('');
  const[newComplete, setNewComplete] = useState(false);
  const[newSpec, setNewSpec] = useState('')
  const[newImg, setNewImg] = useState('')
  const[todos, setTodos] = useState([]);
 

  
  console.log(newDescription);
  console.log(newComplete);
  console.log(newSpec);
  console.log(newImg);

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  }

  const handleNewSpecChange = (event) => {
    setNewSpec(event.target.value);
  }

   const handleNewImgChange = (event) => {
    setNewImg(event.target.value);
  }

  const handleNewCompleteChange = (event) => {
    setNewComplete(event.target.checked);
  }

  const handleNewTodoFormSubmit = (event) =>{
    event.preventDefault();
    axios.post(
      'http://localhost:3000/todos',
      {
        name: newDescription,
        reserved: newComplete,
        species: newSpec,
        image: newImg
      }
    ).then(() => {
      axios
      .get('http://localhost:3000/todos')
      .then((response) => {
        setTodos(response.data)
      })
    })
  }
    

  useEffect(() => {
    axios
    .get('http://localhost:3000/todos')
    .then((response) => {
      setTodos(response.data)
    })
  },[])

const handleDelete = (todoData) => {
  // console.log(todoData);
  axios
  .delete(`http://localhost:3000/todos/${todoData._id}`)
  .then(() => {
    axios
      .get('http://localhost:3000/todos')
      .then((response) => {
        setTodos(response.data)
      })
  })
}

const handleEdit = (todoData) => {
  // console.log(todoData);
  axios
  .edit(`http://localhost:3000/todos/${todoData._id}`)
  .then(() => {
    axios
      .get('http://localhost:3000/todos')
      .then((response) => {
        setTodos(response.data)
      })
  })
}

const handleToggleComplete = (todoData) => {
  axios
  .put(`http://localhost:3000/todos/${todoData._id}`,
  {
    name: todoData.name,
    reserved: !todoData.reserved,
    species: todoData.species,
    image: todoData.image
  }
  )
 .then(() => {
  axios
  .get('http://localhost:3000/todos')
  .then((response) => {
    setTodos(response.data)
  })
 })
}

  return (
    <main>
      <h1>National Animal Shelter</h1>
      <section>
        <h2 class='container'>Animal Adoption Database</h2>
        <form class='form-control' onSubmit={handleNewTodoFormSubmit}>
          Animal Name: <input class='form-control' placeholder='Luna' type='text' onChange={handleNewDescriptionChange}/><br/>
          Species: <input class='form-control' placeholder='German Short-Haired Pointer' type="text" onChange={handleNewSpecChange}/><br/>
          <input class='form-control' placeholder='Insert Image URL' type='url' onChange={handleNewImgChange}/><br/>
          Reserved for Adoption <input type="checkbox" onChange={handleNewCompleteChange}/><br/>
          <br/>
          <input class= 'btn btn-primary' type="submit" value="Fetch"/>
          <br/>
        </form>
      </section>
    <section>
      <br/>
      <h2 class='container'>Available Animals:</h2>
      <ul>
        {
          todos.map((todo) => {
            return ( <li
              onClick = {() => {
                handleToggleComplete(todo)
              }}
            key={todo._id}>
              

              {
              (todo.reserved)?
              <div class='container'>{todo.name} is reserved</div>
              :
              <div class='container'> <h2>{todo.name} | Available for adoption</h2> <h2>{todo.species}</h2> 
              <h2><img src={todo.image}/></h2> </div>
              }
              <div>
              <button class= 'btn btn-danger' onClick={(event) => {handleDelete(todo)}}>Delete
              </button> 
              <button class= 'btn btn-warning' onClick={(event) => {handleEdit(todo)}}>Edit
              </button>
              </div>
              

              </li>
              
            )
          
  
        })
      }
      
      </ul>
    </section>
    </main>
  )
}

export default App;
