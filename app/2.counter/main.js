let token = 0;
let myButtonElement1 = document.getElementById('counter-1');
let diplayElement1 = document.getElementById('diplay-1');
myButtonElement.addEventListener('click',function(){
    token = token + 1;
    diplayElement1.innerHTML = token;
    });