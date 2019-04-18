var mensagem = document.querySelector('.mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
    evento.preventDefault();

    if ((email.value == '' || email.value.length == 0)) {
        mensagem.textContent = 'Digite um e-mail'
    } else if ((email.value.indexOf('@') <= 0) ||
        (email.value.indexOf('@') >= email.value.length - 1) || (email.value.search('@') == -1) ||
        (email.value.search(' ') != -1) ||
        (email.value.indexOf('.') <= 0) ||
        (email.value.indexOf('.') >= email.value.length - 1) || (email.value.search('.') == -1)) {
        mensagem.textContent = 'O email informado é  inválido'
    } else {
        mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso!'
    }
})