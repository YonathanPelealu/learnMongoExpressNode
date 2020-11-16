const requestIp = require("detect-client-ip")

const ipMiddleware = function(req, res, next) {
        const clientIp = requestIp.retriveIP(req);
        console.log(clientIp);
        res.send(clientIp)
 
        next();    
};
module.exports = {ipMiddleware}