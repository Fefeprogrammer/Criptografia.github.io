function encriptar() {
    var texto = document.getElementById("texto").value;
    var texto_codificado = btoa(texto);
                        
    document.getElementById("resultado").innerHTML = texto_codificado;
}
                
function desc() {
    var texto = document.getElementById("texto").value;
    var texto_decodificado = window.atob(texto);
                        
    document.getElementById("resultado").innerHTML = texto_decodificado;
 }