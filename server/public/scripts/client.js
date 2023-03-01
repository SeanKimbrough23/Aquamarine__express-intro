$(document).ready(onReady); // 1

function onReady(){ // 2
    console.log('WE ARE WORKING 😆');

    // function to get quotes from server
    getQuotes(); // 3

    // 8  listener for newQuoteButton
    $('#newQuoteButton').on('click' , addQuote)
}
function addQuote(){
    console.log('Inside add quote' );

    //  9  make a POST request to server
    $.ajax({
        method: 'POST', //the type of request
        url: '/',
        data: {
            text: "we are farmers", //req.body.text
            author: "farmers insurance" // req.body.author
        }
    }).then(function(response){ // this can also be an arrow function .then((response) => )
        console.log('Yayaya, POST request successful!');
        getQuotes()
    }).catch(function(response){
        alert('request failed! (Post to /)')
    })
}

function getQuotes(){ // 4
    //Use AJAX to get quotes from server 
    $.ajax({
        method: 'GET', //this matches app.get('/quotes', function(req, res){} from our server.js file
        url: '/quotes' // 5  <---- this is the route we are telling it to follow from t:5000/quotes
    }).then(function(response ){ // this is getting the res.send(quoteList); from the server.js file (this is our HAPPY Path)
        console.log('Success!!!!', response) // 10 response will be quoteList from server
                                            // if quote list was added  to by POST request,
                                            // then it will include thee new quotes

        // pass response of quotes into render function
        // this will be quoteList in this example  
        renderToDom(response) // 7
}).catch(function(response){ // how we deal with an unexpected situation or error (This is our SAD path)
    alert("Request failed Try Again Later")
});
}
function renderToDom(quotes) { // 6
    console.log('Quotes:', quotes)
    $('#quotesoutput').empty();
    for (let quote of quotes) { // use this to loop over quotes and then append to the DOM
        $('#quotesoutput').append(`
        <li>
        ${quote.text} by ${quote.author}
        </li>
        `)
    }
}