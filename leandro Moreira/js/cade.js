
const verificarProduto = function (opcao) {
    let resultado = "<br><h3>Opção selecionada</h3>"

    switch (opcao) {
        case 'hb2':
            
            resultado += 'hamburguer simples está com o preço de R$30,10'
            console.log('hamburguer simples está com o preço de R$30,10')
            
            break
        case 'hb3':
            resultado += 'hamburguer duplo está com o preço de R$40,10'
            console.log('hamburguer duplo está com o preço de R$40,10')
            break
        case 'hb4':
            resultado += 'hamburguer bacon está com o preço de R$45,10'
            console.log('hamburguer bacon está com o preço de R$45,10')
            break
        default:
            console.log('Opção invalida');
            break;
    }
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado 
}
