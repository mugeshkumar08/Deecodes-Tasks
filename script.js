// Image slider 
let slidePosition=0;
const sliders=document.querySelectorAll('.slides');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.querySelector('#btn-next');


btnPrev.addEventListener('click',function(){
  PrevSlide();
});
btnNext.addEventListener('click',function(){
  NextSlide();
});

function updatePosition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
    
  });

  sliders[slidePosition].classList.add('active');

}

function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  updatePosition();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
}

setInterval(()=>{
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
},3000);

// Hamburger menubar
const hamburger = document.querySelector('.menu-bars');
const menuList = document.getElementById('menuList');

hamburger.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

// Hamburger submenu 
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    submenu.addEventListener('click', (event) => {
        event.preventDefault(); 
        submenu.classList.toggle('active'); 
    });
});




