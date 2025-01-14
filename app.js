const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mesroutes = require("./routes/mesroutes");
const app = express();

// motteur de visualisatio template ejs
app.set('view engine' , 'ejs')
app.set('views' , 'pages')

//middleware pour le jour et heure de mon serveur
app.use((req, res, next) => {
  const date = new Date();
  const jours = date.getDay();
  const heures = date.getHours();
  if (jours >= 1 && jours <= 5 && heures >= 8 && heures <= 18) {
    next();
  } else {
    console.log("serveur indisponible");
    res.send("<h1>erreur 404 : Serveur non disponible</h1>");
  }
});

app.use((req, res, next) => {
  console.log("la date d'aujourd'hui est : " + Date().toString());
  next();
});
//midleware tierces
app.use(morgan("dev"));
//midleware static
app.use(express.static("public"));


app.use(mesroutes)
app.listen(3001, () => {
  console.log("le serveur est ecouté sous http://localhost:3001");
});
