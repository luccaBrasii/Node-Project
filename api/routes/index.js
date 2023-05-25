const bodyParser = require("body-parser");
const PostagemController = require('../controller/PostagemController')

module.exports = app => {
    //CONFIG
        app.use(bodyParser.json())

    //CRUD
        //CREATE
            app.post('/add', PostagemController.createPost)

        //READ
            app.get('/home', PostagemController.findTodos)
        
        //DELETE
            app.get('/posts/delete/:id', PostagemController.deletar)
}