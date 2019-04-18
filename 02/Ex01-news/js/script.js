var mensagem = document.querySelector('.mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    if (email.value == '' || email.value.length == 0){
        mensagem.textContent = 'Digite um email válido'
    } else if  (email.value.indexOf('@') <= 0 || email.value.indexOf('@') >= email.value.length-1){
        mensagem.textContent = 'O email informado é inválido'
    } else if (email.value.search(' ') !=-1) {
        mensagem.textContent = 'Email informado é inválido'
    }  else if (email.value.search('.') == -1) {
        mensagem.textContent = 'Email informado é inválido'
        }else { 
        mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
    }  
})