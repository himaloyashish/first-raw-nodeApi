//
const http = require('http');

const {handleReqRes }  = require('./helper/handleReqRes');

// app object - module scaffolding
const app = {};

//Configuration
app.config= {
    port: 3000
};

//createServer
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening the port ${app.config.port}`);
    })
};

app.handleReqRes = handleReqRes;


//handle request response
app.createServer();

