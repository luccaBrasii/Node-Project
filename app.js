const express = require("express");
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Routes = require('./api/routes')
const app = express();
const PORT = process.env.PORT || 3000;

//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({ 
            defaultLayout: 'main', 
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
                } 
             })
        );
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    //Body-parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
    //Rotas da api - Controller
        Routes(app)

//Rotas
    app.get('/', (req, res) => {
        res.status(200).render('formulario');
    })


//Inicia o Servidor
    app.listen(PORT, () => {
        console.log("http://localhost:3000/");
    })
    