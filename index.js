//
const http = require('http');

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

//handle request response
app.handleReqRes = (req, res)=>{
    //response handle
    res.end('Hello World'); 
}

app.createServer()

