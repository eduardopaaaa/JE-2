import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {

    const [name, setName] = useState('Ed')

  const sayHello = () => {
    alert('Hello')
  }
  return(
  <div>
    <h1>
      My First React App
    </h1>
    <button onClick={sayHello}>clickme</button>
  </div>
  )
}

const ComponentTwo = () => {
  return(
  <div>
    <h1>
      Second Component
      <ComponentThree/>
    </h1>
  </div>
  )
}

const ComponentThree = () => {
  return(
  <div>
    <h1>
      Third Component
      
    </h1>
  </div>
  )
}


export default App;
