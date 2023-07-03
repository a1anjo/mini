const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require('helmet');
var useragent = require('express-useragent');
var path = require('path');

//route inititializations


// const userRoutes = require('./routes/userRoutes')
// const securityRoutes = require('./routes/securityRoutes')
// const visitorRoutes = require('./routes/visitorRoutes')
// const securityAllocationRoutes=require('./routes/securityAllocationRoutes')
// const navigationRoutes=require('./routes/navigationRoutes')
const adminRoute=require('./routes/adminRoute')
const buyerRoute=require('./routes/buyerRoute')
const sellerRoute=require('./routes/sellerRoute')
// const roomRoutes=require('./routes/roomRoutes')
// const roomBookingRoutes=require('./routes/roombookingRoutes')

var app = express();
app.use(cors());
app.use(helmet());
app.options('*', cors());
app.set('view engine', 'ejs');

var server = http.createServer(app);

const port = process.env.PORT ||5000;

mongoose.Promise = global.Promise;
//live
mongoose.connect('mongodb+srv://elna:qwertyuiop@cluster0.mhcjzha.mongodb.net/Cluster0',

    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("DataBase connected.");
        console.log("Fetched Live Data.");
    },
        err => {
            console.log("db connection error");
            console.log(err);
        });





app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//middleware
app.use(function (req, res, next) {
   debugger;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);
    next();
})
app.use(express.json({ limit: '150mb' }));
app.use(express.urlencoded({ extended: true, limit: '150mb' }));

app.set('view engine', 'ejs');

app.get('/u/:id', (req, res) => {
    s3.readFile(res, req.params.id)
    return;
});
app.get('/wp/:id', (req, res) => {
    if (req.params.id) {
        if (path.extname(req.params.id) === ".svg") {
            s3.readFile(res, req.params.id)
            return;
        }
    }

    s3.readFile(res, ('wp_' + req.params.id + ".webp"))
    return;
});

//app.use


app.get('/health', async (req, res) => {
    res.send({
        status: true,
        d: Date.now(),
        msg: "Use API end point!"
    });
    res.end();
});

app.get('/login',(req,res)=>{
res.render('sample',req.query);
});
app.get('/log',(req,res)=>{
    res.render('aindex',req.query);
});
app.get('/buyer',(req,res)=>{
    res.render('buyer',req.query);
});
app.get('/component',(req,res)=>{
    res.render('components-accordion',req.query);
});
app.get('/chips',(req,res)=>{
    res.render('Computer Chips',req.query);
});
app.get('/compwaste',(req,res)=>{
    res.render('computerwaste',req.query);
});
app.get('/computerwaste',(req,res)=>{
    res.render('compwaste',req.query);
});
app.get('/forget',(req,res)=>{
    res.render('forget',req.query);
});
app.get('/fritterlogin',(req,res)=>{
    res.render('fritterlogin',req.query);
});
app.get('/fritterlogin',(req,res)=>{
    res.render('fritterlogin',req.query);
});
app.get('/frittersignup',(req,res)=>{
    res.render('frittersignup',req.query);
});
app.get('/frittersup',(req,res)=>{
    res.render('frittersignup1',req.query);
});
app.get('/Greencard',(req,res)=>{
    res.render('Green Card Waste',req.query);
});
app.get('/Mobile',(req,res)=>{
    res.render('Mobile Scrap',req.query);
});
app.get('/Mobilewaste',(req,res)=>{
    res.render('mobilewaste1',req.query);
});
app.get('/newuser',(req,res)=>{
    res.render('new user',req.query);
});
app.get('/oldusedmobile',(req,res)=>{
    res.render('Old Used Mobiles',req.query);
});
app.get('/onetimepassword',(req,res)=>{
    res.render('onetimepassword',req.query);
});
app.get('/product1',(req,res)=>{
    res.render('product(1)',req.query);
});
app.get('/product',(req,res)=>{
    res.render('product',req.query);
});
app.get('/seller',(req,res)=>{
    res.render('seller',req.query);
});
app.get('/seller1',(req,res)=>{
    res.render('seller1',req.query);
});
app.get('/signin',(req,res)=>{
    res.render('sign in',req.query);
});
app.get('/smartphone',(req,res)=>{
    res.render('Smartphone waste',req.query);
});
app.get('/components-accordion',(req,res)=>{
    res.render('components-accordion.',req.query);
});
app.get('/components-alert',(req,res)=>{
    res.render('components-alert',req.query);
});
app.get('/components-breadcrumbs',(req,res)=>{
    res.render('components-breadcrumbs',req.query);
});
app.get('/components-buttons',(req,res)=>{
    res.render('components-buttons',req.query);
});
app.get('/components-cards',(req,res)=>{
    res.render('components-cards',req.query);
});
app.get('/components-carousel',(req,res)=>{
    res.render('components-carousel',req.query);
});
app.get('/components-contact',(req,res)=>{
    res.render('components-contact',req.query);
});
app.get('/components-tabs',(req,res)=>{
    res.render('components-tabs',req.query);
});
app.get('/forms-editors',(req,res)=>{
    res.render('forms-editors',req.query);
});
app.get('/forms-elements',(req,res)=>{
    res.render('forms-elements',req.query);
});
app.get('/forms-layouts',(req,res)=>{
    res.render('forms-layouts',req.query);
});
app.get('/forms-validation',(req,res)=>{
    res.render('forms-validation',req.query);
});
app.get('/icons-bootstrap',(req,res)=>{
    res.render('icons-bootstrap',req.query);
});
app.get('/icons-boxicons',(req,res)=>{
    res.render('icons-boxicons',req.query);
});
app.get('/icons-remix',(req,res)=>{
    res.render('icons-remix',req.query);
});
app.get('/tables-general',(req,res)=>{
    res.render('tables-general',req.query);
});
app.get('/usersprofile',(req,res)=>{
    res.render('usersprofile',req.query);
});
app.get('/pages-contact',(req,res)=>{
    res.render('pages-contact',req.query);
});
app.get('/pages-login',(req,res)=>{
    res.render('pages-login',req.query);
});
app.get('/pages-register',(req,res)=>{
    res.render('pages-register',req.query);
});
// app.use(userRoutes)
// app.use(securityRoutes)
// app.use(visitorRoutes)
// app.use(securityAllocationRoutes)
// app.use(navigationRoutes)
 app.use(adminRoute)
 app.use(buyerRoute)
 app.use(sellerRoute)





server.listen(port, () => {
    console.log(`Server with ws capability running on port ${port}`);
    
});