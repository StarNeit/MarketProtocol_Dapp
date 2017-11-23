var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/views/';

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Add headers
app.use(function (req, res, next) {
    var allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000'];

    var origin = req.headers.origin;

    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// parse application/json
app.use(bodyParser.json());


router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});
/*
router.get("/",function(req,res){
    res.render(path + "deploy.html");
});*/

router.get("/contracts",function(req,res){
    res.sendFile(path + "contracts.html");
});

router.get("/trading",function(req,res){
    res.sendFile(path + "trade.html");
});

app.use("/",router);

app.listen(process.env.PORT || 8919,function(){
    console.log("Live at Port 8919");
});