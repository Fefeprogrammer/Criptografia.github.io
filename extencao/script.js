document.addEventListener('DOMContentLoaded', function(){

    let codar = document.querySelector('#encript').addEventListener('click', function(){
        let texto = document.querySelector('#texto').value
        document.querySelector('#resultado').innerHTML = Encrypt(texto)
    })

    let decodar = document.querySelector('#decrypt').addEventListener('click', function(){
        let texto = document.querySelector('#texto').value
        document.querySelector('#resultado').innerHTML = Decrypt(texto)
    })


    function Encrypt(txt){
        let dec = btoa(txt)
        return dec
    }

    function Decrypt(txt){
        let dec = atob(txt)
        return dec
    }
})