const express = require('express'); // gives us acces to a function from express
const bodyParser = require('body-parser'); // 9. we are requiring body Parser from package.json like express 


// 1 Create an instance of express by calling the function.
const app = express();
const port = 5000; // for instances where you are working with different servers 

// 2 Now we want to point this app to our public folder
app.use(express.static('server/public')); // giving it a path to our public folder so it is available

// we are configuring our instance of the server to use bodyparser
app.use(bodyParser.urlencoded({extended:true})); //10

//  12 This moves our quoteList into a different file 
 //const quoteList = require('./modules/quoteList'); // 8. example after we moved quoteList into separate file called quoteList.js, now we are requiring it
 let quoteList = [ // 4
 {text: "Nationwide is on your side", author: "Nationwide"},
 {text: "Just Do It!", author: 'Nike'},
 {text: "You're In Good Hands", author:"Allstate"}
];


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

}) ;// in this function we have a request to GET quotes List array and we then get a response of server sending back the quote list

// 11 Route for POST request 
app.post('/', (req, res) => {
console.log('Does this work POST 🥸');

// this is grabbing a new quote from the request body
// The request body is the data that is sent from the client 
    let incomingText = req.body.text  // (how we access data) the last part .text comes from PostMan (whatever we title in POSTMAN under body under key will go here ) we have text in key box on PostMan
    let incomingAuthor = req.body.author //(how we access data) the last part .author comes from PostMan (whatever we title in POSTMAN under body under key will go here ) we have author in key box on PostMan

console.log('Incoming quote to add', incomingText); // to see if let quote = req.body.text is working
console.log('Incoming author to add', incomingAuthor); // to see if let author = req.body.author is working

//this is a new quote object
// which will be pushed to the quotesList array

const newQuote = {
    text: incomingText,
    author: incomingAuthor
};
quoteList.push(newQuote);
console.log('All quotes:' , quoteList)


    res.sendStatus(201);
})




// 6. After this function is written.. restart server in terminal with ctrl C and refresh browser with localhost:5000/quotes <---- this text would change depending on what we are GET

// 3 Now we give code to start our server
// arrow function ()=> will write and execute a function in the same place 
app.listen(port, () => {
    console.log('listening on port', port)
});
