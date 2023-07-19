function helloWorld(){
    alert("Hello World")
}

/*  PALABRAS RESERVADAS:
    VAR = Escopo Global
    LET = Escopo Local
    CONST = Contante - Escopo Global
*/

/*
    Case Sensitive = reconhece letras maiusculas e minusculas

    por Tag: getElementByName()
    por Id: getElementById()
    por Nome: getElementByName()
    por Classe: getElementByClassName()
    por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
// let nome = <input id="nome" type="text" name="nome"
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function enviar(){
    alert("Olá" + nome.value)
}

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ) {
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Nome Valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() { 
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else { 
        alert (' Peencha o formulário corretamente antes de enviar')    
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}