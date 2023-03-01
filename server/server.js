const express = require('express'); // gives us acces to a function from express

// 1 Create an instance of express by calling the function.
const app = express();
const port = 5000; // for instances where you are working with different servers 

// 2 Now we want to point this app to our public folder
app.use(express.static('server/public')); // giving it a path to our public folder so it is available



 const quoteList = require('./modules/quoteList'); // 8. example after we moved quoteList into separate file called quoteList.js, now we are requiring it
// 5 To create a GET request
// Normal URL is http://localhost:5000/
// To use GET request: http://localhost:5000/quotes
app.get('/quotes', function(req, res){ // req = request, res= response
// when this function gets called at this endpoint we need 2 things: 1. console.log 2. Response
console.log('Request for /quotes was made');

// send back the list of quotes
// We can see in our brower
res.send(quoteList); // We can only send 1 response per request, anything after res.send will not work

//respond with status code
// res.sendStatus(200);

//Respond with status code & a thing
// res.send(400).send('this request is broken'); ---> this is just to show that it doesn't work

}) // in this function we have a request to GET quotes List array and we then get a response of server sending back the quote list


// 6. After this function is written.. restart server in terminal with ctrl C and refresh browser with localhost:5000/quotes <---- this text would change depending on what we are GET

// 3 Now we give code to start our server
// arrow function ()=> will write and execute a function in the same place 
app.listen(port, () => {
    console.log('listening on port', port)
});
