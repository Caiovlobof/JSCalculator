function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - somar (+)\n 2 - subtrair (-)\n 3 - multiplicar (*)\n 4 - dividir (/)\n 5 - dividir inteiro (%)\n 6 - potenciar (**)');
if (!operacao || operacao >= 7) {
    alert('Not Valid');
    calculadora();
} else {

    let n1 = Number(prompt('Insert first number:'));
    let n2 = Number(prompt('Insert second number:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Not valid')
        calculadora();
    } else {
        function somar() {
            resultado = n1 + n2;
            alert (`${n1} + ${n2} = ${resultado}`)
            novaOperacao()
        }

        function subtrair() {
            resultado = n1 - n2;
            alert (`${n1} - ${n2} = ${resultado}`)
            novaOperacao()
        }

        function multiplicar() {
            resultado = n1 * n2;
            alert (`${n1} * ${n2} = ${resultado}`)
            novaOperacao()
        }

        function dividir() {
            resultado = n1 / n2;
            alert (`${n1} / ${n2} = ${resultado}`)
            novaOperacao()
        }

        function dividirInteiro() {
            resultado = n1 % n2;
            alert (`${n1} % ${n2} = ${resultado}`)
            novaOperacao()
        }

        function potenciar() {
            resultado = n1 ** n2;
            alert (`${n1} ** ${n2} = ${resultado}`)
            novaOperacao()
        }

        function novaOperacao() {
            let opcao = prompt('Again?\n 1 - Yes\n 2 - No');
            
            if (opcao == 1) {
                calculadora();
            } else (opcao == 2)
            {
                alert('Bye')
                novaOperacao();
            }
        }
    }

    if (operacao == 1) {
        somar();
    } else if (operacao == 2) {
        subtrair();
    } else if (operacao == 3) {
        multiplicar();
    } else if (operacao == 4) {
        dividir();
    } else if (operacao == 5) {
        dividirInteiro();
    } else if (operacao == 6) {
        potenciar();
    }
}

}

calculadora();