(function($j) {
        $j(document).ready(function() {
            const slider = document.getElementById("simuladorRange");
            const output = document.getElementById("simuladorResult");
            const simuladorCredito = $j('#formSimulador').data('simulador-credito');
            const simuladorParcela = $j('#formSimulador').data('simulador-parcela');
            const simuladorEntrada = $j('#formSimulador').data('simulador-entrada');
            const simuladorValor = $j('#formSimulador').data('simulador-valor');
            slider.oninput = function() {
                $j(output).removeClass('blur');
                $j(output).find('.credito strong').text('R$ ' + currencyText(simuladorCredito[this.value - 1]));
                $j(output).find('.parcela strong').text('R$ ' + currencyText(simuladorParcela[this.value - 1]));
                if ($j(output).find('.entrada strong').length) {
                    $j(output).find('.entrada strong').text('R$ ' + currencyText(simuladorEntrada[this.value - 1]));
                    $j(output).find('.valor strong').text('R$ ' + currencyText(simuladorValor[this.value - 1]));
                }
                if (this.value >= simuladorParcela.length) {
                    $j(output).find('.notificacoes_extra').text('Para crédito superior a R$ ' + currencyText(simuladorCredito[this.value - 1]) + ' preencha o formulário abaixo.');
                } else {
                    $j(output).find('.notificacoes_extra').text('');
                }
            }
            function currencyText(v) {
                const vP = parseInt(v * 100);
                let vPT = "";
                const vPS = vP.toString();
                const countVPS = vPS.length;
                for (let t = 0; t < countVPS; t++) {
                    if (t === (countVPS - 2)) {
                        vPT += ",";
                    }
                    if (t === (countVPS - 5) && t > 0) {
                        vPT += ".";
                    }
                    vPT = vPT + vPS[t];
                }
                return vPT;
            }
        })
    }
)(jQuery)
