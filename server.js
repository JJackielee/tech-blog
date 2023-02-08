require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');
const allRoutes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use(allRoutes);
app.get("/",(req,res)=>{
    res.send("hello welcome to techblog!")
})


sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});