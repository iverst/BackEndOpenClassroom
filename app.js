const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Thing = require('./models/Thing');

const app = express();
//permet l'utilisation des json
app.use(express.json());

mongoose.connect(
    'mongodb+srv://server:papi@cluster0.wpxe1ke.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');    
    next();
});


app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.get('/api/stuff', (req, res ,next) =>  {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({error}))

})

app.get('/api/stuff/:id', (req, res ,next) =>  {
    Thing.findOne( { _id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json( {error}))
})








module.exports = app;

//////////////////////////////////////////////////////////////////
/*


app.use((req, res, next) => {
    console.log('traitement');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => 
{
    res.json({ message: 'requête reçue'})
    next();
});

app.use((req, res, next) => {
  console.log('réponse envoyée !');
})


*/

/////////////////////////////////////////////////////
/*

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
    next();
})

*/

/////////////////////////////////////////////////////

/*
app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
          },
          {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
          },

    ];
    res.status(200).json(stuff);
});

*/