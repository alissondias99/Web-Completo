var video = []
video[1] = []
video[1] = 'FullMetal'
video[1] = 'Anime'

function getVideo(video) {

    try{//Caso de um erro, tente alguma coisa

        console.log(video[0]['nome'])//O indice 0 não existe então não é possivel ler a variavel nome, logo retora um erro
    
    } catch(e){ //Recebe o erro como parametro e trata ele de alguma maneira

        //console.log(e) //O erro em formato de string
        console.log('Erro tratado')
        throw new Error('Houve um erro, estamos corrigindo ele agora')//Caso haja algum erro, abre uma exceção, e execyta uma ação

    } finally{ //após tentar alguma coisa, faça alguma coisa

        console.log('É obrigatorio passar por aqui')

    }

    console.log("Deu certo")
}

getVideo(video)