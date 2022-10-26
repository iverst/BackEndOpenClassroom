const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//permet l'utilisation des json
const stuffRoutes = require('./routes/stuff');

app.use(express.json());
app.use(bodyParser.json());


mongoose.connect(
    'mongodb+srv://server:papi@cluster0.wpxe1ke.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(error => console.log('Connexion à MongoDB échouée ! : ' + error)
);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');    
    next();
});


app.use('/api/stuff', stuffRoutes);




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