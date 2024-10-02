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

// Hamburger
const menuBar = document.querySelector(".menu-bars");
const menuList = document.querySelector(".nav-links");

menuBar.addEventListener('click', () => {
  menuList.classList.toggle('showmenu');
});

// const software = document.querySelector("software");
// const softwareList = document.querySelector("software-sub-link");

// software.addEventListener('click', () => {
//   software-sub-link.classList.toggle('show');

// });

