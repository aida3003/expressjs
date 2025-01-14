const express = require("express");
const router = express.Router();




  router.get("/accueil", (req, res) => {
    res.render ('index');
  });
  router.get("/", (req, res) => {
    res.redirect("/accueil");
  });
  router.get("/contact", (req, res) => {
    res.render ('contact');
  });
  
  router.get("/formation", (req, res) => {
    res.render('formation');
  });
  
  router.use((req, res) => {
    res.render('erreur');
  });

  module.exports=router