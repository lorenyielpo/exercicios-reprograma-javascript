var mensagem = document.querySelector('.login__subtitle');
var email = document.querySelector('#loginInputEmail');
var senha = document.querySelector('#loginInputPassword');
var regex = /^(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
    evento.preventDefault();

    if ((email.value == '' || email.value.length == 0) || (senha.value == '' || senha.value.length == 0)) {
        mensagem.textContent = 'Digite um e-mail e uma senha'
    } else if ((email.value.indexOf('@') <= 0) ||
        (email.value.indexOf('@') >= email.value.length - 1) || (email.value.search('@') == -1) ||
        (email.value.search(' ') != -1) ||
        (email.value.indexOf('.') <= 0) ||
        (email.value.indexOf('.') >= email.value.length - 1) || (email.value.search('.') == -1)) {
        mensagem.textContent = 'O email informado ou a senha é  inválido'
    } else if (senha.value.length < 6) {
    mensagem.textContent = 'Sua senha deve conter ao menos 6 caracteres'
    } else if(senha.value.match(regex)) {
        mensagem.textContent = 'Sua senha não pode conter caracteres especiais'
    }else {
        mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso!'
    }
})