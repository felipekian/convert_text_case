class TextConvert {

    text_uppercase(text) {
        /** texto em maiúsculo */

        return (text.toUpperCase());
    }

    text_lowerCase(text) {
        /** texto em minúsculo */

        return (text.toLowerCase());
    }

    text_Estilo_Frase(text) {
        /** deixa a primiera letra maiúscula e o restante em minúsculas */

        let first = text.substring(0, 1);
        let last = text.substring(1, text.length);

        first = this.text_uppercase(first)
        last = this.text_lowerCase(last)

        return first + last;
    }

    text_limpar_espacos(text) {
        /** remove os espaços desnecessários */
        text = text.trim().replace(/\s{2,}/g, ' ');
        return text
    }

    text_primeiras_maiusculas(text) {
        /** deixa todas as primeiras letras de cada palavra em maiúsculas e o restante em minúsculas */

        let text_modify = ""
        let block = false

        for (let i = 0; i < text.length; i++) {

            let letra = text[i];

            if (i == 0 && letra != " ") {
                letra = this.text_uppercase(letra)
                text_modify = text_modify + letra
            } else if (block == true) {
                letra = this.text_uppercase(letra)
                text_modify = text_modify + letra
                block = false
            } else if (letra != " ") {
                letra = this.text_lowerCase(letra)
                text_modify = text_modify + letra
            } else if (letra == " ") {
                block = true
                text_modify = text_modify + " "
            }
        }

        return text_modify
    }

    text_alternado(text) {
        /** Deixa o texto com letras alternadas entre maiúsculo e minúsculo começando com  maiúsculo */

        let flag = true
        let new_text = ""

        for (let i = 0; i < text.length; i++) {

            if (text[i] == " ") {
                new_text = new_text + " "
            } else if (flag == true) {
                let letra = text[i]
                new_text = new_text + this.text_uppercase(letra)
                flag = false
            } else {
                let letra = text[i]
                new_text = new_text + this.text_lowerCase(letra)
                flag = true
            }
        }

        return new_text;
    }

    text_alternado_invertido(text) {
        /** Inverte de minúsculo para maiúsculo e vice versa */

        let new_text = ""

        for (let i = 0; i < text.length; i++) {

            let letra = text[i]

            if (letra == " ") {
                new_text = new_text + " "
            } else if (letra == this.text_lowerCase(letra)) {
                new_text = new_text + this.text_uppercase(letra)
            } else {
                new_text = new_text + this.text_lowerCase(letra)
            }
        }

        return new_text;
    }

    text_cont_letter(text) {
        /** retorna o tamanho da string recebida */

        return text.length
    }

    text_cont_word(text) {
        /** retorna o total de palavra dando split e depois contando o total de palavras */

        text = this.text_limpar_espacos(text)
        return text.split(" ").length
    }

    text_inverter(text) {
        /** troca o texto de trás para frente invertendo */

        let new_text = ""

        for (let i = text.length - 1; i > -1; i--) {
            new_text = new_text + text[i]
        }

        return new_text
    }

    text_substituir(text, palavra_de, palavra_para) {
        /** substitui a ocorrencia de determinada palavra ou outra */

        var strbusca = eval('/'+palavra_de+'/g'); 
        return text.replace(strbusca, palavra_para)
    }

}


