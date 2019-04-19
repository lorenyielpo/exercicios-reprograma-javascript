var botao = document.querySelector('.transacao__button')

botao.addEventListener('click',function(evento){
    evento.preventDefault();
    // Inputs (elementos no DOM)
    var valorTransacao = document.getElementById('transacaoInputName').value
    var valorValor = document.getElementById('transacaoInputMoney').value
    var valorData = document.getElementById('transacaoInputDate').value

    var linha = document.createElement('tr')

    var colunaTransacao = document.createElement('td')
    colunaTransacao.textContent = valorTransacao
    linha.appendChild(colunaTransacao)

    var colunaValor = document.createElement('td')
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)

    var colunaData = document.createElement('td')
    colunaData.textContent = valorData
    linha.appendChild(colunaData) 

    var tabela = document.querySelector('.extrato__body')
    tabela.appendChild(linha)

    var corpo = document.querySelector('body')

    if (valorValor >=0 && valorValor <= 10) {
        corpo.style.backgroundColor = 'verde'
    } else if (valorValor > 10 && valorValor <= 50) {
        corpo.style.backgroundColor = 'orange'
    } else {
        corpo.style.backgroundColor = 'red'
    }

    document.querySelector('.transacao__form').reset();
    
    
})


