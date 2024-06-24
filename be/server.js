
const sequelize = require("./database/connection");
let User = require("./model/user");
const express = require("express");
const app = express();
let port = 3000;



sequelize
.authenticate()
.then(() => {
  console.log("Connessione al database avvenuta con successo.");
})
.catch((error) => {
  console.error("Errore durante la connessione al database:", error);
});


console.log("HELLO WORLD");
//START APP//
app.listen(port, () => {
    console.log(`Il server è in ascolto sulla porta ${port}`);
});