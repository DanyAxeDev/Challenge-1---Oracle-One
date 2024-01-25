function criptografar(){
    let texto = document.querySelector('textarea').value
    if(texto == ''){
        document.querySelector('.conteudo__visualizacao').style.display = "none"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "flex"
    }else{
        document.querySelector('.conteudo__visualizacao').style.display = "flex"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "none"
        let campoTextoCrip = document.querySelector('.conteudo__visualizacao__texto')
        var regex = /[\u00C0-\u00FFA-Z]/g;
        if(texto.match(regex)){
            campoTextoCrip.style.color = "red"
            campoTextoCrip.innerHTML = "Por favor, insira somente letras minúsculas, sem letras maiúsculas, acentos ou caracteres especiais."
        }else{
            campoTextoCrip.style.color = "#495057"
            let palavrasTexto = texto.split(" ")
            let palavrasMod = []
    
            palavrasTexto.forEach((palavra) => {
                if(palavra.includes("e")){
                    var palavraModE = palavra.replaceAll("e", "enter")
                }else{
                    palavraModE = palavra
                }
                if(palavraModE.includes("i")){
                    var palavraModI = palavraModE.replaceAll("i", "imes")
                }else{
                    palavraModI = palavraModE
                }
                if(palavraModI.includes("a")){
                    var palavraModA = palavraModI.replaceAll("a", "ai")
                }else{
                    palavraModA = palavraModI
                }
                if(palavraModA.includes("o")){
                    var palavraModO = palavraModA.replaceAll("o", "ober")
                }else{
                    palavraModO = palavraModA
                }
                if(palavraModO.includes("u")){
                    var palavraModU = palavraModO.replaceAll("u", "ufat")
                }else{
                    palavraModU = palavraModO
                }
                palavrasMod.push(palavraModU)
            })
            let frase = palavrasMod.join(" ")
            campoTextoCrip.innerHTML = frase
        }
    }
}

function descriptografar(){
    let texto = document.querySelector('textarea').value
    if(texto == ''){
        document.querySelector('.conteudo__visualizacao').style.display = "none"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "flex"
    }else{
        document.querySelector('.conteudo__visualizacao').style.display = "flex"
        document.querySelector('.conteudo__visualizacao__vazio').style.display = "none"
        let campoTextoCrip = document.querySelector('.conteudo__visualizacao__texto')
        let palavrasTexto = texto.split(" ")
        let palavrasDescripto = []

        palavrasTexto.forEach((palavra) => {
            if(palavra.includes("ufat")){
                var palavraU = palavra.replaceAll("ufat", "u")
            }else{
                palavraU = palavra;
            }
            if(palavraU.includes("ober")){
                var palavraO = palavraU.replaceAll("ober", "o")
            }else{
                palavraO = palavraU;
            }
            if(palavraO.includes("ai")){
                var palavraA = palavraO.replaceAll("ai", "a")
            }else{
                palavraA = palavraO;
            }
            if(palavraA.includes("imes")){
                var palavraI = palavraA.replaceAll("imes", "i")
            }else{
                palavraI = palavraA;
            }
            if(palavraI.includes("enter")){
                var palavraE = palavraI.replaceAll("enter", "e")
            }else{
                palavraE = palavraI;
            }
            palavrasDescripto.push(palavraE)
        })
        let fraseDescripto = palavrasDescripto.join(" ")
        campoTextoCrip.innerHTML = fraseDescripto
    }    
}

function copiar(){
    let campoVisualizacao = document.querySelector(".conteudo__visualizacao__texto").innerText
    navigator.clipboard.writeText(campoVisualizacao)
    alert("Texto copiado com sucesso!")
}