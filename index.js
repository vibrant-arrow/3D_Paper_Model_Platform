import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.listen(port, ()=> {
    console.log("You're runnning your 3D website at port", port)
})
