function criptografar(){
    let texto = document.querySelector('textarea').value
    if(texto == ''){
        document.querySelector('.apresentacao__descriptografar').style.display = "none"
        document.querySelector('.apresentacao__descriptografar__vazio').style.display = "flex"
    }else{
        document.querySelector('.apresentacao__descriptografar').style.display = "flex"
        document.querySelector('.apresentacao__descriptografar__vazio').style.display = "none"
        textoCriptografado = document.querySelector('.apresentacao__descriptografar__texto')
    }
}