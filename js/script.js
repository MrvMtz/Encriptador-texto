
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){

    const mensaje = document.getElementById("txt-area1").value;
    
    if(validarTextoVacio(mensaje)=== true){
        
        advertencia(1);

    }else if(validarCaracteres(mensaje)=== true){

        advertencia(2);

    }else{

        let encriptado = encriptar(mensaje);
        document.getElementById("txt-area2").value = encriptado;
        let titulo= "Mensaje encriptado correctamente";
        let imgSrc="img/candado.png";
        cambiarContenido(titulo, imgSrc);
        
    }
    
}

function btnDesencriptar(){
    
    const mensaje = document.getElementById("txt-area1").value;
    
    if(validarTextoVacio(mensaje)=== true){

        advertencia(1);
    
    }else if(validarCaracteres(mensaje)=== true){

        advertencia(2);

    }else{

        let desencriptado = desencriptar(mensaje);
        document.getElementById("txt-area2").value = desencriptado;
        let titulo= "Mensaje desencriptado correctamente";
        let imgSrc="img/candado-abierto.png";
        cambiarContenido(titulo, imgSrc);
        
    }
       
}

function copiar(){
    
    const mensajeCopiado = document.getElementById("txt-area2").value;
    document.getElementById("txt-area1").value = mensajeCopiado;

}

function encriptar(mensaje){
    
    let mensajeEncriptado="";

    for (let i = 0; i < mensaje.length; i++) {
        
        let letra = mensaje.charAt(i);
      
        if (letra === "a") {
            mensajeEncriptado += "ai";
        } else if (letra === "e") {
            mensajeEncriptado += "enter";
        } else if (letra === "i") {
            mensajeEncriptado += "imes";
        } else if (letra === "o") {
            mensajeEncriptado += "ober";
        } else if (letra === "u") {
          mensajeEncriptado += "ufat";
        } else {
          mensajeEncriptado += letra;
        }
      }
    
      return mensajeEncriptado;
}

function desencriptar(texto){
    
    texto = texto.replace(/ai/gi, "a");
    texto = texto.replace(/enter/gi, "e");
    texto = texto.replace(/imes/gi, "i");
    texto = texto.replace(/ober/gi, "o");
    texto = texto.replace(/ufat/gi, "u");

    return texto;
  
}



function validarTextoVacio(msj){
    
    if (msj===""){

        return true;   

    }else{

        return false;

    }
    
}

function validarCaracteres(msj){

    let equivalenteAscii = "";
    let resultado=false;

    for (let i = 0; i < msj.length; i++) {
        
        equivalenteAscii = msj[i].charCodeAt(0);

        if((equivalenteAscii > 64 & equivalenteAscii < 90) || (equivalenteAscii > 127)){
            
            resultado= true;
            break;

        }else{
            
            resultado= false;
           
        }

    }

    return resultado;

}

function advertencia(tipo){

    let titulo= "";
    let imgSrc= "";

    if (tipo===1){

        alert("Por favor ingrese un mensaje.");
        titulo= "Ningun mensaje encontrado.";
        imgSrc="img/buscar.png";
        cambiarContenido(titulo, imgSrc);
        document.getElementById("txt-area2").value = "";

    }else if(tipo===2){
        
        alert("Por favor utilize unicamente letras minúsculas y sin acentos.");
        titulo= "Caracteres no soportados.";
        imgSrc="img/buscar.png";
        cambiarContenido(titulo, imgSrc);
        document.getElementById("txt-area2").value = "";
    }

}

function cambiarContenido(titulo,rSrc){

    var nTitulo = document.getElementById("text-resultado");
    var nImagen = document.getElementById("ima-resultado");

    nTitulo.textContent= titulo;
    nImagen.src = rSrc;
    nImagen.style.display = 'inline'
}

const textarea = document.getElementById("txt-area2");

textarea.addEventListener('wheel', function(event) {
  event.preventDefault();
  textarea.scrollTop += event.deltaY;
});

