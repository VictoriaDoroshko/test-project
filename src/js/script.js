const sliderText = document.querySelector('.slider-text');
const sliderMain = document.querySelector('.slider-main');

let mySliderMain = new Swiper (sliderMain, {
  slidePerView: 1,
  loop: true,
  effect: 'fade',
});
let mySliderText = new Swiper(sliderText, {
  slidePerView: 1,
  loop: true,
  thumbs: {
    swiper: mySliderMain,
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


//Parallax

$('.mouse-parallax').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();

  $('.mouse-parallax__content').css(
    'transform',
    'translate(' +  x * 50 + 'px,  ' + y * 50 + 'px)'
  );

  $('.mouse-parallax__content2').css(
    'transform',
    'translate(' + x * 60 + 'px,  ' + y * 60 + 'px)'
  );

  $('.mouse-parallax__content3').css(
    'transform',
    'translate(' + x * 80 + 'px,  ' + y * 80 + 'px)'
  );
});
