const btnAlteraTema = document.querySelector("#botao-alterar-tema")
const bodyPagina = document.querySelector("body")
var imgButton = document.querySelector(".imagem-botao")
btnAlteraTema.addEventListener("click", function(){
    
    if(bodyPagina.className == "dark-mode"){
        imgButton.setAttribute('src', './src/imagens/sun.png')
        bodyPagina.classList.remove("dark-mode")
        bodyPagina.classList.add("light-mode")
    }else{
        imgButton.setAttribute('src', './src/imagens/moon.png')
        bodyPagina.classList.remove("light-mode")
        bodyPagina.classList.add("dark-mode")
    }
})