var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true
  },
});

// Cursor

$(document).ready(function(){ 
  $("#block").mousemove(
 
 function (pos) {  
 $("#floatingmes").show(); 
   $("#floatingmes").css('left',(pos.pageX+20)+'px').css('top',(pos.pageY-20)+'px'); 	
   }   
  
  ).mouseleave(function() {
   $("#floatingmes").hide();  
}); 
  
}); 

