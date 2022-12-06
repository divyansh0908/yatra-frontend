const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.send('Hello world');
    }
);

server.listen(5000, () => {
    console.log('Listening on port 5000');
    }
);