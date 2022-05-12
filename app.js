const express = require('express');
const mongoose = require('mongoose');
const antivirus = require('./models.js/antivirus');



const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

mongoose.connect('mongodb+srv://user:alibaba@cluster0.9hkad.mongodb.net/FYESecu?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 

app.use(express.json())

app.post('/api/post',(req,res)=>{
  //delete req.body._id;
  const tmp=new antivirus({...req.body});
  tmp.save()
  .then(()=> res.status(201).json({message: 'Objet enregistré'}))
  .catch(error=> res.status(400).json({error}));
});



app.get('/api/antivirus/', (req, res) => {
  
        antivirus.find()
          .then(antivirus => {
              res.status(200).json(antivirus);
              console.log(antivirus)
            
          })
          .catch(error => res.status(404).json({ error }));

  });

module.exports = app;