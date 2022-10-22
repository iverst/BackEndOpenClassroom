const http =  require('http');
const server = http.createServer((req, res) => {
    res.end('voilà la réponse du serveur !')
});

//server.listen(3000 );
server.listen(3000 || process.env.PORT);