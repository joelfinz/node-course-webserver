const express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('<h1>ASS</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Hello World',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});