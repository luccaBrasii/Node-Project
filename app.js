const express = require("express");
const handlebars = require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 3000;

//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars');
        app.set('views', './views');


//Rotas
    app.get('/', (req, res) => {
        res.status(200).render('formulario');
    })


//Inicia o Servidor
    app.listen(PORT, () => {
        console.log("http://localhost:3000/");
    })
    