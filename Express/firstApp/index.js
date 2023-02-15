const express = require('express');
const app = express();

//Display message when recieving ANY incoming request (GET, POST, PUT, ect)
// app.use((req, res) =>{
//     console.log('New request recieved!');
//     // res.send("We got your request, this is a response.");
//     res.send(`<h1>This is my webpage</h1>`);
// })

//routes 
app.get('/', (req, res) =>{
    res.send('Welcome to the home page!');
})

app.get('/r/:subreddit', (req, res) =>{
    const { subreddit } = req.params;
    res.send(`<h1>Welcome to the ${subreddit} subreddit!!</h1`);
})

app.get('/r/:subreddit/:postID', (req, res) =>{
    const { subreddit, postID} = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit!!</h1`);
})

app.post('/cats', (req, res) => {
    res.send("POST REQUEST!!!");
})

app.get('/cats', (req, res) =>{
    res.send("Meow!!");
})

app.get('/dogs', (req, res) => {
    res.send("Woof!");
})

app.get('/search', (req, res) =>{
    const { q } = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})


app.get('*', (req, res) => {
    res.send(`I don't know that path.`);
})

//start listening for requests on port (current port = 3000)
app.listen(8080, () => { 
    console.log(`Listening on port 8080!`);
    
})
