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

    //Pegar todas os posts
        static async findTodos(req,res){
            try{
                //Pega os posts e ordena por id decrescente
                    const posts = await db.Postagens.findAll({order:[['id',"DESC"]]})
                
                //Manda para o 'home.handlebars' o objeto 'post'
                    return res.status(200).render('home', {post: posts})
            }catch(erro){
                res.status(500).json(erro)
            }
            }

    //Deletar um registro
        static async deletar(req,res){
            const id = req.params.id
            try{
                await db.Postagens.destroy({where:{id: id}})
                return res.status(200).send('Post deletado com sucesso!')
            }catch(err){
                console.log(err);
                return res.status(500).send('Erro ao deletar post!, tente novamente')
            }
        }
}

module.exports = PostagemController