const db = require('../models')

class PostagemController{
    
    //Criar Postagem
        static async createPost(req,res){
            let titulo = req.body.titulo
            let conteudo = req.body.conteudo
            try{
                await db.Postagens.create({
                    "titulo": titulo,
                    "conteudo":conteudo
                    }).then(()=>{
                        //Se tudo der certo redireciona para a pagina 'HOME', rota configurada em APP.JS
                        res.status(200).redirect('/home')
                    }).catch((erro)=>{
                        res.status(500).send('Ocorreu um erro, tente novamente! '+ erro)
                    })
            }catch(err){
                res.status(500).send(err)
            }}
}

module.exports = PostagemController