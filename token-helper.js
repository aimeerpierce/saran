/* Token Helper */
var mongoService = require('./mongo-service.js');

/* Returns a list of all tokens and their permissions string.
   The permission string is a comma separated list of attribute
   names which should be returned when retrieving users given
*/
module.exports.tokenList = (req,response) => {
    mongoService.getViewer((err, val) => {
        response.json({data:val, error: err});
    });
};

/* Adds a new token and permission pair to the database
   which can be used to filter response data in /user */
module.exports.addToken = (req,response) => {
    var token = req.query.token;
    var permission = req.query.permission;

    mongoService.addViewer(token, permission);
    response.json({data: "success"});
};