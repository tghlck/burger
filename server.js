const express = require("express");
const expHbs = require("express-handlebars");


//create instance of express
const app = express();

//set port
const PORT = process.env.PORT || 8080;

//set hb as the engine, main is the name of the file in layouts
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


