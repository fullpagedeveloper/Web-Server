const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    // response.end(`<h1>Hallo Http Server Gokil</h1>`);

    const {method} = request;

    if (method === 'GET') {
         // response ketika GET
        response.end('<h1>Hallo!</h1>')
    }

    if (method === 'POST') {
         // response ketika POST
        response.end('<h1>Hai!</h1>')
    }

    if (method === 'PUT') {
         // response ketika PUT
        response.end('<h1>Bonjour!</h1>')
    }

    if (method === 'DELETE') {
         // response ketika DELETE
        response.end('<h1>Salam!</h1>')
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})


/** TEST AND OUTPUT
 curl -X GET http://localhost:5000
// output: <h1>Hello!</h1>
curl -X POST http://localhost:5000
// output: <h1>Hai!</hai>
curl -X PUT http://localhost:5000
// output: <h1>Bonjour!</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Salam!</h1>
 */