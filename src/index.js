const express = require("express");
const path = require("path")

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//midlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require("./routes/links"));

//public
app.use(express.static(path.join(__dirname, "public")));


// starting the server
app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});