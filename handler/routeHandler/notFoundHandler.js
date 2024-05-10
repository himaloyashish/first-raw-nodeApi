
/**
 * Tile : Handler
 * Description : Req and req sample handler
 * Author : Himaloy Ashish
 * 
*/

const handler = {};


handler.notFoundHandler = ( requestProperties, callback) =>{

    callback(404, {
        message : "Requested url was not found"
    })
}

module.exports = handler;

