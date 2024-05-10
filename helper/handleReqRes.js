/**
 * 
 * Title: Req and res handler
 * Description: It is a helper for handle request.
 * 
 * 
 * 
*/

// Dependencies

const url = require('url');
const route = require('../route');
const { StringDecoder } = require('string_decoder');
const { notFoundHandler } = require('../handler/routeHandler/notFoundHandler');


const handler = {};

handler.handleReqRes = (req, res)=>{
    //response handle
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmEdPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmEdPath,
        method,
        queryStringObject,
        headersObject

    }

    const decoder = new StringDecoder('utf-8'); 
    let realData = '';

    const chosenHandler = route[trimmEdPath] ? route[trimmEdPath] : notFoundHandler;

    chosenHandler(requestProperties, ( statusCode, payload)=>{

        statusCode = typeof(statusCode) == "number" ? statusCode : 500;
        payload = typeof(payload) == 'object' ? payload : {};

        const payloadString = JSON.stringify(payload)

        // Return the final response 
        res.writeHead(statusCode);
        res.end(payloadString);
    } )

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)

    })

    req.on('end', () =>{
        realData += decoder.end();

        console.log(realData);
        res.end('Hello World'); 

    })

}


module.exports = handler;