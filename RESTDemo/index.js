const express = require('express');
const app = express();
const path=require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    {
        username: 'Bob',
        comment: 'lol nice one'
    },
    {
        username: 'Tanya',
        comment: 'Thanks for the tips'
    },
    {
        username: 'Randy',
        comment: 'I love this song'
    },
    {
        username: 'Michelle',
        comment: 'can\'t wait to meet them at the concert'
    }
]

app.get('/comments', (req, res) =>{
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res)=> {
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
})

app.post('/tacos', (req, res) => {
    res.send('POST /tacos response');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})

