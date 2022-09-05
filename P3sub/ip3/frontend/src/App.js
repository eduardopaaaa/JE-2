import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const[newName, setNewName] = useState('');
  const[newCard, setNewCard] = useState('');
  const[newGame, setNewGame] = useState('');
  const[newImg, setNewImg] = useState('');
  const[newVid, setNewVideo] = useState('');
  const[vg, setVg] = useState([]);


const handleNewNameChange = (event) => {
  setNewName(event.target.value);
}

const handleNewCardChange = (event) => {
  setNewCard(event.target.value);
}

const handleNewGameChange = (event) => {
  setNewGame(event.target.value);
}

const handleNewImgChange = (event) => {
  setNewImg(event.target.value);
}

const handleNewVideoChange = (event) => {
  setNewVideo(event.target.value);
}


const handleNewGameSubmit = (event) => {
  event.preventDefault();
  axios.post(
    'http://localhost:3000/vg',
    {
      library: newName,
      game: newCard,
      card: newGame,
      image: newImg,
      video: newVid

    }
  ).then(() => {
    axios
    .get('http://localhost:3000/vg')
    .then((response) => {
      setVg(response.data)
    })
  })
}

useEffect(() => {
  axios
  .get('http://localhost:3000/vg')
  .then((response) => {
    setVg(response.data)
  })
},[])

const handleDelete = (gameData) => {
  axios
  .delete(`http://localhost:3000/vg/${gameData._id}`)
  .then(() => {
    axios
    .get('http://localhost:3000/vg')
    .then((response) => {
      setVg(response.data)
    })
  })
}
const handleToggleComplete = (gameData) => {
  axios
  .put(`http://localhost:3000/vg/${gameData._id}`,
  {
    library: gameData.library,
    playCheck: !gameData.playCheck,
    game: gameData.game,
    card: gameData.card,
    image: gameData.image,
    video: gameData.video,
  }
  ).then (() => {
    axios
    .get('http://localhost:3000/vg')
    .then((response) => {
      setVg(response.data)
    })
  })
}

const updateData = (vg) => {
  axios.put(`http://localhost:3000/vg/${vg._id}`,
  {
    library: newName? newName : vg.library,
    playCheck: vg.playCheck,
    game: newGame? newGame : vg.game,
    card: newCard? newCard : vg.card,
    image: newImg? newImg : vg.image,
    video: newVid? newVid : vg.video,
  }
  ).then(() => {
    axios.get('http://localhost:3000/vg').then((response) => {
      setNewName(response.data)
    })
  })
}

return (
  <main>
    <h1>Video Game Database</h1>
    <section>
      <h2 class='container'>Submit New Game</h2>
      <form class='form-control' onSubmit={handleNewGameSubmit}>
  
        Developer: <input class='form-control' placeholder='Bungie' type='text' onChange={handleNewNameChange}/><br/>

        Game: <input class='form-control' placeholder='Destiny 2' type='text' onChange={handleNewGameChange}/><br/>

        Genre: <input class='form-control' placeholder='FPS-MMO' type='text' onChange={handleNewCardChange}/><br/>

        <input class='form-control' placeholder='Insert Video Game Cover Image' type='url' onChange={handleNewImgChange}/><br/>

        <input class='form-control' placeholder='Insert Video Game GIF' type='url' onChange={handleNewVideoChange}/><br/>

        <input class='btn btn-outline-primary' type='submit' value="SUBMIT"/>

        <br/>
      </form>

    </section>
    <section>
    <br/>
    <h2 class='container'>Video Game Library</h2>
    <ul>
    {
          vg.map((vg) => {
            return ( <li
              
            key={vg._id}>
              

              {
              (vg.playCheck)?
              <div class='container'><h2 onClick = {() => {
                handleToggleComplete(vg)
              }}>{vg.library}</h2></div>
              :
              <div class='container' onClick = {() => {
                handleToggleComplete(vg)
              }}> <h2>{vg.game} {vg.playCheck? 'Read' : 'Not Read'} </h2> <h3>{vg.card}</h3> 
              <h2><img src={vg.image}/></h2> </div>
              }
              <div>
              <button class= 'btn btn-outline-danger' onClick={(event) => {handleDelete(vg)}}>DELETE </button>
			  

              <form class='container' onSubmit={(event) => { updateData(vg)}}>

			  <label> Developer: 
				<input className='form-control' type='text' defaultValue={vg.library} onChange={handleNewNameChange}/></label><br />

			  <label> Game: <input className='form-control' type='text' defaultValue={vg.game} onChange={handleNewGameChange}/></label><br />

			  <label> Genre: <input className='form-control' type='text' defaultValue={vg.card} onChange={handleNewCardChange}/></label><br />

			  

                <input className="btn btn-primary" type="submit" value="Update" />
			  </form>

			  <button class= 'btn btn-warning' type="button"  onClick={(event) =>  
				
				{handleToggleComplete(vg)}
			  }
			  > PLAYED </button><br/>
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
