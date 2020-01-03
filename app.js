const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router(),
    async = require('async'),
    methodOverride = require('method-override');



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


//routes
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/services', (req, res) => {
    res.render('services')
});
app.get('/contracts', (req, res) => {
    res.render('contracts')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});




app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('website started')
})
