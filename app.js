var logo = document.getElementById('loo');
var nav = document.getElementById('nav');
var ao = document.getElementById('link1');
var aoo = document.getElementById('link2');
var aooo = document.getElementById('link3');
window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    if(scrolled > 681){
      
      nav.style.background = 'black';
      nav.style.color = 'white';
      ao.style.color = 'white';
      aoo.style.color = 'white';
      aooo.style.color = 'white';
      logo.classList.add("logo2");
      logo.classList.remove("logo");
    }else{
       nav.style.color = 'black';
       ao.style.color = 'black';
       aoo.style.color = 'black';
       aooo.style.color = 'black';
        nav.style.background = 'white';
        logo.classList.add("logo");
        logo.classList.remove("logo2");
    }
});
 document.getElementById('menu').addEventListener('click',()=>{
  document.getElementById('nav-ul').style.display='flex';
 })
function menu(){

};

