var restify = require('restify'); //Restify is the server that the backend.
var server = restify.createServer();
var corsMiddleware = require('restify-cors-middleware');
var request = require('request');

function subscribe(req, res, next) {
    var email = req.body.email; // We are grabbing the email.
    var dataCenter = 'Mailchimp_DATA_CENTER';
    var apiKey = 'Mailchimp_API_KEY';
    var listID = 'Mailchimp_list_ID';

    var options = {
        url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`, //Put all the email into the list with in Mailchimp.
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': `apikey ${apiKey}`},
        body: JSON.stringify({email_address: email, status: 'subscribed'})
    }

    request(options, function(error, response, body) {
        // eslint-disable-next-line react/no-typos
        try {
            var respObj = {}; //Initial response object
            if (response.statusCode === 200) {
              respObj = { success: `Subscribed using ${email}!`, message: JSON.parse(response.body) };
            } else {
              respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
            }
            res.send(respObj);
          } catch (err) {
            var respErrorObj = { error: 'There was an error with your request', message: err.message };
             //This message just for the developer to see what going on.
            res.send(respErrorObj);
        }
    });
    next();
}

//Enable CORS Middleware
var cors = corsMiddleware ({
    origin: ['http://localhost:3000']
});

server.use(restify.plugin.bodyParser());
//Use CORS...
server.pre(cors.preflight);
server.use(cors.actual);

//Subscribe endpoint
server.post('/subscribe', subscribe);

server.listen(8080, function(){
    console.log('%s listening at %s', server.name, server.url);
});
