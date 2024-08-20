const btn = document.getElementById('btn')

function calcular(){
    nom_produto = window.prompt('Qual produto voce esta comprando?')
    preco_produto = window.prompt(`Quanto custa ${nom_produto} que voce esta comprando?`)
    pagamento = window.prompt(`Qual foi o valor que voce deu para pagar ${nom_produto}?`)
    troco = pagamento - preco_produto
    window.alert(`Voce comprou ${nom_produto} que custou ${preco_produto}. Deu ${pagamento} em dinheiro e vai receber ${troco} de troco.
Volte Sempre!`)
}