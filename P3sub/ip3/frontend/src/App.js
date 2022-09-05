import axios from 'axios';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const[newName, setNewName] = useState('');
  const[newGenre, setNewGenre] = useState('');
  const[newGame, setNewGame] = useState('');
  const[newImg, setNewImg] = useState('');
  const[newVid, setNewVideo] = useState('');
  const[vg, setVg] = useState([]);
}

const handleNewNameChange = (event) => {
  setNewName(event.target.value);
}

const handleNewGenreChange = (event) => {
  setNewGenre(event.target.value);
}

const handleNewGameChange = (event) => {
  setNewGame(event.target.value);
}

const handleNewImgChange = (event) => {
  setNewImg(event.target.value);
}

const handleNewVideoChange = (event) => {
  setNewVid(event.target.value);
}


const handleNewGameSubmit = (event) => {
  event.preventDefault();
  axios.post(
    'http://localhost:3000/vg',
    {
      library: newName,
      game: newGenre,
      card: newGame,
      image: newImg,
      video: newVid

    }
  ).then(() => {
    axios
    .get('http://localhost:3000/vg')
    .then((response) => {
      setVG(response.data)
    })
  })
}

useEffect(() => {
  axios
  .get('http://localhost:3000/vg')
  .then((response) => {
    setVG(response.data)
  })
},[])

const handleDelete = (gameData) => {
  axios
  .delete(`http://localhost:3000/vg/${gameData._id}`)
  .then(() => {
    axios
    .get('http://localhost:3000/vg')
    .then((response) => {
      setVG(response.data)
    })
  })
}
const handleToggleComplete = (gameData) => {
  
}
export default App;
