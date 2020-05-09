
function emitAlertCampoVazio() {
    bootbox.alert({
        message: "<h4>O campo está vazio!</h4>",
        centerVertical: true
    });
}

function setTextBox(text) {
    $("#texto").val(text)
}


// BOTÃO UPPERCASE
$("#btn_uppercase").click(() => {

    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_uppercase(text))

    return;
});


// BOTÃO LOWERCASE
$("#btn_lowercase").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_lowerCase(text))

    return;
});


// BOTÃO ESTILO FRASE
$("#btn_frase").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_Estilo_Frase(text))

    return;
});


// BOTÃO LIMPAR ESCAPOS EM BRANCO
$("#brn_clear_spaces").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_limpar_espacos(text))

    return;
});


//BOTÃO PRIMEIRAS LETRA DE CADA NOME EM MAUISCULO
$("#btn_primeira_maiusculas").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_primeiras_maiusculas(text))

    return;
});


//BOTÃO ALTERNADO
$("#btn-alternado").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_alternado(text))

    return;
});


//BOTÃO ALTERNADO INVERTIDO
$("#btn-alternado_invertido").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_alternado_invertido(text))

    return;
});


//BOTÃO LIMPAR CAMPOS
$("#btn_clear_text").click(() => {
    $("#texto").val("")
    return;
});


//BOTÃO CONTAR PALAVRAS
$("#btn_cont_palavras").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }
    let textConvert = new TextConvert()

    bootbox.alert({
        message: "<h4>Total de palavras: " + textConvert.text_cont_word(text) + "</h4>",
        centerVertical: true
    });

    return;
});


//BOTÃO CONTAR LETRA
$("#btn_cont_letra").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    bootbox.alert({
        message: "<h4>Total de caracteres: " + textConvert.text_cont_letter(text) + "</h4>",
        centerVertical: true
    });

    return;
});


//BOTÃO CONTAR LETRA
$("#btn_copy").click(() => {
    $("#texto").select()
    document.execCommand('copy');
    return;
});


//BOTÃO INVERTER TEXTO
$("#btn-inverter_texto").click(() => {
    let text = $("#texto").val()

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_inverter(text))

    return;
});


//BOTAO SUBSTITUIR
$("#btn_substituir").click(() => {
    let text = $("#texto").val()
    let palavra_de = $("#text_de").val();
    let palavra_para = $("#text_para").val();

    if (text.length == 0) {
        emitAlertCampoVazio()
        return
    }

    let textConvert = new TextConvert()

    setTextBox(textConvert.text_substituir(text, palavra_de, palavra_para))


    $("#text_de").val("");
    $("#text_para").val("");
    $("#modal_substituir").modal('hide');

    return;
});

