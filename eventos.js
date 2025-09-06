const divo = document.getElementById('divo');
const botoncito = document.getElementById('botoncito');


divo.addEventListener("click", function (){
    alert('Hola! Soy el div');
});

botoncito.addEventListener("click", function(){
    botoncito.stopPropagation();
})