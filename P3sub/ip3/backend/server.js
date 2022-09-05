const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const VG = require('./models/VG.js')
const app = express();
app.use(express.json())
app.use(cors())


///////////////////////////////////////////////////////
// Routes Start
///////////////////////////////////////////////////////

app.post('/VG', (req, res)=>{
  VG.create(req.body, (err, createdCard) => {
      res.json(createdCard);
  })
});



app.get('/VG', (req, res) => {
    VG.find({}, (err, findCard) => {
        res.json(findCard)
    })
});


app.delete('/VG/:id', (req, res) => {
    VG.findByIdAndRemove(req.params.id, (err, deleteCard) => {
      res.json(deleteCard)
    })
});


app.put('/VG/:id', (req, res) => {
    VG.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateCard) => {
      res.json(updateCard)
    })
});

///////////////////////////////////////////////////////
// Routes End
///////////////////////////////////////////////////////


mongoose.connect('mongodb://localhost:27017/VG')
mongoose.connection.once('open', () => {
    console.log('connected to mongodb...');
})
app.listen(3000, () => {
  console.log('listening...');
})
