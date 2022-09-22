import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Answer from './components/Answer.js'
import Character from './components/Character.js'
import '/Users/hacker/dev/SEIR-Zoidberg/unit_3/w07d01/student_labs/intermediate-react/src/css/cover.css'
import '/Users/hacker/dev/SEIR-Zoidberg/unit_3/w07d01/student_labs/intermediate-react/src/css/index.css'


const App = () => {
  const [score, setScore] = useState(0)
  let [character, setCharacters] = useState([])
  let [answer, setAnswers] = useState([])
  

  let gameStart = () => {
      setScore(score + 1)
    }

    let gameEnd = () => {
        setScore(score - 1)
      }
        // I tried to do a answer reveal button, but in the end i think i just need more practice to pull it off. That or my brain was fried from trying to figure out why the import was not working as intended

      const aReveal = () => {
        document.getElementById("myAnswer");
       if (getAnswers === answer) {
         answer = "block";
       } else {
         answer = "none";
       }
     }
      


      
  const getCharacters = () => {
    axios.get('http://jservice.io/api/random?counter=1').then((response) => {
      setCharacters(response.data)
      setAnswers(response.data)
      console.log(response.data)
    })
  }

  const getAnswers = () => {
    axios.get('http://jservice.io/api/random?counter=1').then((response) => {
      setAnswers(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    getAnswers()
    getCharacters()

  }, [])

  

  return (
  
  
     <body class='fa-ul'>
    <Container> 
    
    <div>
    
            <div className=' JE-center container cover-container'> 
              
                <h1 class='fa-border'> Welcome to Jeopardy! </h1>
                <h2 class='fa-border'>SCORE: ${score}</h2>
                  <h3> <button className='btn btn-outline-warning' onClick = {gameStart}>Increase</button> <button className='btn btn-outline-warning fa-pull-right' onClick = {gameEnd}>Decrease</button> </h3>
                  <h2 class='fa-border fa-fw'>PLAY </h2>
                    <h3 >  <button className='btn btn-outline-warning .fa-pull-right' onClick = {getCharacters}>Random Question</button> </h3>
                    <h3 class=''>  <button className='btn btn-outline-warning' onClick = {getAnswers}>Answer</button> </h3>
                    


                    {character.map((character) => {
                      return (
                        <div class='fa-border JE-large' key={character.id}>
                          <Character character={character}/>
                        </div>
                      )
                    })}
                    {answer.map((answer) => {
                      return (
                        <div class='fa-border JE-large' id= "myAnswer" key={answer.id}>
                          <Answer answer={answer}/>
                        </div>
                      )
                    })}

                       
            </div>

    </div>
    
    </Container>
    </body> 
                    
  )
}

  

export default App;


{/* <button id="myAnswer" onClick= {aReveal} >Reveal Answer</button> */}