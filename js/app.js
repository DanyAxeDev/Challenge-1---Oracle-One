function criptografar(){
    let texto = document.querySelector('textarea').value
    if(texto == ''){
        document.querySelector('.conteudo__visualizacao').style.display = "none"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "flex"
    }else{
        document.querySelector('.conteudo__visualizacao').style.display = "flex"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "none"
        textoCriptografado = document.querySelector('.conteudo__visualizacao__texto')
    }
}