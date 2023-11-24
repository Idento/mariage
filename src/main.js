const open_menu = document.getElementById('open_menu');
const close_menu = document.getElementById('close_menu');
const menu = document.getElementById('menu');
const linkmenu = document.querySelectorAll('.link');


function openMenu(){ // Ouverture du menu avec une animation de slide
  menu.style.display = "flex";
  menu.style.animation = 'SlideIn .5s ease-in both';
  menu.style.height = '100%';
  menu.style.width = '100%';
  menu.style.marginTop = '0%';
  menu.style.marginLeft = '0%';
  open_menu.style.display = "none";
  close_menu.style.display ="flex";
}

function closeMenu(){
  menu.style.display ="flex";
  menu.style.animationName = "SlideOut"
  window.setTimeout( function() {
    close_menu.style.display ="none";
  })
  open_menu.style.display = "flex";
  menu.style.display = 'none';
}

function resizeMenu(){
    menu.style.height = '200px';
    menu.style.width = '150px';
    menu.style.marginTop = '5%';
    menu.style.marginLeft = '5%';
}

function closeMenuWhenClick(){
  for(let i = 0; i < linkmenu.length; i++){
    linkmenu[i].addEventListener('click', function(){
      if (window.matchMedia('(max-width: 800px').matches || window.matchMedia('(max-device-width: 800px').matches){
        closeMenu();
      }
    })
  }
}

open_menu.addEventListener('click', openMenu);
close_menu.addEventListener('click', closeMenu);
closeMenuWhenClick();



window.addEventListener('resize', function(){
  if (window.matchMedia('(min-width: 800px').matches){
    menu.style.display = 'flex';
    resizeMenu();
  } else if (window.matchMedia('(max-width: 800px').matches){
    menu.style.display = 'none';
    close_menu.style.display = 'none';
    open_menu.style.display = 'flex';
    }
})

