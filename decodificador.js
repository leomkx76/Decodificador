//função que codifica e retorna o texto com expresões regulares
function codificar (texto){
    let letrasEx = [/e/g, /i/g, /a/g, /o/g, /u/g]
    let codigo = ["enter", "imes", "ai", "ober", "ufat"]
    let i = 0
    while(i <= codigo.length){
        texto = texto.replace (letrasEx[i], codigo[i])
        i++
    }
    return  texto
}

//função que decodifica e retorna o texto
function decodificar (texto){
    let letras = ["e", "i", "a", "o", "u"]
    let codigoEx = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
    let i = 0
    while(i <= letras.length){
        texto = texto.replace (codigoEx[i], letras[i])
        i++
    }
    return texto
}

// para codificar
function recebetexto(){
    let resultado = document.getElementById("texto-entrada").value
    if(/[.a-z]/gm.test(resultado)){
    document.getElementById("texto-entrada").value = ""
    document.getElementById("texto-saida").innerText = codificar(resultado)
    }
    else{
        alert("Insira seu texto para codificar ou decodificar apenas com letras minúsculas e sem acento!")
    }
}

// para decodificar
function recebecodif(){
    let resultado = document.getElementById("texto-entrada").value
    if(/[.a-z]/gm.test(resultado)){
    document.getElementById("texto-entrada").value = ""
    document.getElementById("texto-saida").innerText = decodificar(resultado) 
} 
else{
    alert("TInsira seu texto para codificar ou decodificar apenas com letras minúsculas e sem acento!")
} 
}


// para copiar o texto do resultado
function copiarTexto(){
    let copyTextarea = document.getElementById("texto-saida")
    copyTextarea.select()
    document.execCommand("copy")
    alert("Texto copiado para área de transferência")
  }