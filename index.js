//
const http = require('http');

const url = require('url');

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
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmEdPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    console.log(headersObject);

    res.end('Hello World'); 
}

app.createServer();

