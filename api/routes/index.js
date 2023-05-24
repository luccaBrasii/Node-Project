const bodyParser = require("body-parser");
const PostagemController = require('../controller/PostagemController')

module.exports = app => {
    //Config
        app.use(bodyParser.json())

    //CRUD
        //CREATE
            app.post('/add', PostagemController.createPost)

}