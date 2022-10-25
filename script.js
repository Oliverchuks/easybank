const hamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body');
const close = document.querySelector('.close');


btnhamburger.addEventListener('click', function(){
   console.log ('click hamburger');

   if(header.classList.contains('open')){// close menu bar
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    element.classList.remove('close');
    });
    
   }
   else{ //open menu bar
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
    element.classList.add('fade-out');
    element.classList.add('close');
    element.classList.add('fade-in');
    });
    
   }
});