const express = require ("express");
const app = express ();
const bodyPraser = require ("body-parser");

app.use (bodyPraser.urlencoded({extended: true}));

app.get ("/", function (req, res){
    res.sendFile (__dirname + "/bmicalculator.html");
});

app.post ("/", function (req, res){
    res.send ("<center>" + Number(req.body.n2) /(Number((req.body.n1 )) * Number (req.body.n1)) + "</center>");
})

app.listen (3000);
