//
const http = require('http');

const url = require('url');
const { StringDecoder } = require('string_decoder')

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


    const decoder = new StringDecoder('utf-8'); 
    let realData = '';


    req.on('data', (buffer) => {
        realData += decoder.write(buffer)

    })

    req.on('end', () =>{
        realData += decoder.end();
        console.log(realData);

        res.end('Hello World'); 

    })



}

app.createServer();

