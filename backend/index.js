import express from "express";
import mysql from "mysql";
import cors from "cors";

const app= express()

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Majorproject4*",
    database:"article"

})

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

//AUTH PROBLEM
app.use(express.json())
app.use(cors())

/*app.get("/articles",(req,res)=>{
    const q ="SELECT * FROM articles"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})*/
app.get("/articles", (req, res) => {
    const { category } = req.query;
    let q = "SELECT * FROM articles";

    // If a category ID is provided, filter by category ID
    if (category) {
        q = `SELECT * FROM articles WHERE category_id = ${category}`;
    }

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



app.post("/articles",(req,res)=>{
    const q ="INSERT INTO articles(`title`,`author`,`content`,`created`,`category`,`image`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.author,
        req.body.content,
        req.body.created,
        req.body.category,
        req.body.image,];

  db.query(q,[values],(err,data)=>{
    if (err) return res.json(err);
    return res.json("Articles sucess");
  });
})

app.delete("/articles/:id",(req,res)=>{
    const articleId= req.params.id;
    const q = "DELETE FROM articles WHERE id =?"

    db.query(q,[articleIdId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully!");
    })
})

app.put("/articles/:id",(req,res)=>{
    const articleId= req.params.id;
    const q = "UPDATE articles SET `title`=?,`author`=?,`content`=?,`created`=?,`category`=?,`image`=? WHERE id=?";
    const values=[
        req.body.title,
        req.body.author,
        req.body.content,
        req.body.created,
        req.body.category,
        req.body.image,];


    db.query(q,[...values,articleId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been updated successfully!");
    })
})


app.listen(4400,()=>{
    console.log("Connected to backend!9")
})