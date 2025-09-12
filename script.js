//Variaveis do nome, e varieveis de preço com valor para ser adicionado na hora da seleção dos itens
let nome = prompt("bem-vindo ao nosso restaurante?! diga-nos seu nome:")
let precoItem1 = 0
let precoItem2 = 0
let precoItem3 = 0

alert("esse é o nosso cardapio")
alert(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    vc pode escolher 3 pratos
    `)
alert("se NÃO quiser fazer o pedido digite 5, mas se quiser continuar digite outro numero!")
//parte da escolha do itens e adicição dos valores as variaveis com switch
let item1 = parseInt(prompt("qual sera seu primeiro prato?"))
if (item1 === 5) {
    alert("muito obrigado! volte sempre")
} else {
    switch (item1) {
        case 1:
            item1 = "HamBúrguer"
            precoItem1 = +20
            break
        case 2:
            item1 = "Pizza"
            precoItem1 = +35
            break
        case 3:
            item1 = "Refrigerante"
            precoItem1 = +5
            break
        case 4:
            item1 = "Batata"
            precoItem1 = +12
            break
        case 5:
            alert("que pena")
            break
        default:
            alert("valor invalido")
    }

    let item2 = parseInt(prompt("qual sera seu segundo prato?"))
    if (item2 === 5) {
        alert("muito obrigado! volte sempre")
    } else {
        switch (item2) {
            case 1:
                item2 = "HamBúrguer"
                precoItem2 = +20
                break
            case 2:
                item2 = "Pizza"
                precoItem2 = +35
                break
            case 3:
                item2 = "Refrigerante"
                precoItem2 = +5
                break
            case 4:
                item2 = "Batata"
                precoItem2 = +12
        }

        let item3 = parseInt(prompt("qual sera seu ultimo prato?"))
        if (item3 === 5) {
            alert("muito obrigado! volte sempre")
        } else {
            switch (item3) {
                case 1:
                    item3 = "HamBúrguer"
                    precoItem3 = +20
                    break
                case 2:
                    item3 = "Pizza"
                    precoItem3 = +35
                    break
                case 3:
                    item3 = "Refrigerante"
                    precoItem3 = +5
                    break
                case 4:
                    item3 = "Batata"
                    precoItem3 = +12
            }

            //calculo para o total bruto
            let totalBruto = precoItem1 + precoItem2 + precoItem3
            //abaixo ha calculo dos descontos, se for estudante ganha 10% de desconto e se a compra der acima de 50, ganha um desconto de 5%
            //aqui ele está testando pra saber se há os dois descontos, ou se ha um ou outro ou os dois 
            let perguntaEstudante = prompt("você tem carteirinha de estudante? (s/n)").toLowerCase()
            if (perguntaEstudante == "s" && totalBruto > 50) {
                let desconto = ((totalBruto * 10) / 100) + ((totalBruto * 5) / 100)
                let total = totalBruto - desconto
                //após os calculo e subtração para saber o valor liquido, ele ira exibir no alert o recibo
                alert(`
        Obrigado ${nome}!
        Pratos escolhidos:
        - ${item1} de R$${precoItem1}
        - ${item2} de R$${precoItem2}
        - ${item3} de R$${precoItem3}
        total sem desconto: R$${totalBruto}
        total com desconto: R$${total.toFixed(2)}
        `)
            } else if (perguntaEstudante == "s" && totalBruto < 50) {
                let desconto = (totalBruto * 10) / 100
                let total = totalBruto - desconto
                alert(`
        Obrigado ${nome}!
        Pratos escolhidos:
        - ${item1} de R$${precoItem1}
        - ${item2} de R$${precoItem2}
        - ${item3} de R$${precoItem3}
        total sem desconto: R$${totalBruto}
        total com desconto: R$${total.toFixed(2)}
        `)
            } else if (perguntaEstudante == "n" && totalBruto > 50) {
                let desconto = (totalBruto * 5) / 100
                let total = totalBruto - desconto
                alert(`
    Obrigado ${nome}!
    Pratos escolhidos:
    - ${item1} de R$${precoItem1}
    - ${item2} de R$${precoItem2}
    - ${item3} de R$${precoItem3}
    total sem desconto: R$${totalBruto}
    total com desconto: R$${total.toFixed(2)}
    `)
            } else {
                let desconto = 0
                let total = totalBruto - desconto
                alert(`
    Obrigado ${nome}!
    Pratos escolhidos:
    - ${item1} de R$${precoItem1}
    - ${item2} de R$${precoItem2}
    - ${item3} de R$${precoItem3}
    total sem desconto: R$${totalBruto}
    total com desconto: R$${total.toFixed(2)}
    `)
            }
        }
    }
}
