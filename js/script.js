const navbar = document.querySelector('.navbar');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function () {
       navbar.classList.toggle('active',this.window.scrollY > 0) 
    });

    menu_btn.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    });


var app = new Vue({
    el:'#portafolio',
    data:{
        ventana_1: false,
        ventana_2: false,
        ventana_3: false,
        ventana_4: false,
        video_1: false,
        video_2: false,
    }
})