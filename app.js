const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),

    app = express();





app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


//routes
app.get('/', (req, res) => {
    res.render('home')
});


app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('website started')
});
