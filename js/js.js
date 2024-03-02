$(function() {
    var vez = 1;

    function casasIguais(a, b, c) {
        var casaA = $(".casa[data-posicao=" + a + "]");
        var casaB = $(".casa[data-posicao=" + b + "]");
        var casaC = $(".casa[data-posicao=" + c + "]");
        var textoA = casaA.text();
        var textoB = casaB.text();
        var textoC = casaC.text();
        return textoA !== "" && textoA === textoB && textoB === textoC;
    }

    function verificarFimDeJogo() {
        if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ) {
            var vencedor = vez === 1 ? "X" : "O";
            $("#resultado").html("<h1>O jogador " + vencedor + " venceu!</h1>");
            $(".casa").off("click");
        }
    }

    $(".casa").click(function() {
        var textoAtual = $(this).text();
        if (textoAtual === "") {
            $(this).text(vez === 1 ? "X" : "O");
            verificarFimDeJogo();
            vez = vez === 1 ? 2 : 1;
        }
    });
});