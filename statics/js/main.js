$ = jQuery.noConflict();

do {
	$(document).ready(function() {

	var contenedor = $('#mainbanner');
	var imagenes = ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpeg', 'banner4.jpeg', 'banner5.jpeg', 'banner6.jpeg', 'banner7.jpeg'];
	var tiempo = 2500;
	contenedor.css({'background-image':'url(statics/images/banner3.jpeg)'});

	function image(){
	setTimeout(function() {
	contenedor.fadeIn('slow', 0.3, function() {
	$(this).css({'background-image': 'url(statics/images/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
	image();}).fadeIn('slow', 0.3); },tiempo); }

	image();
	});
} while (false);
/*show menu*/
$(document).ready(function(){
	$('#show-menu').on("click", function(){
		$('#navigation').animate({right:"0"},700);
		$('#show-menu').css({'visibility':"hidden"});
		$('.modal').css({'visibility':"visible"},700);
		$('.modal').animate({opacity:"1"},700);
	});
});
/*change background color*/
  $(document).scroll(function(){
    if($(this).scrollTop() > 25) {
      $('#navbar-main').css({"background-color":"rgba(0,0,0,0.8)"});
    } else {
      $('#navbar-main').css({"background-color":"rgba(0,0,0,0.01)"});
    }
  });
/*menu lateral*/
	var navigation		= document.getElementById('navigation');
	var hammer		= new Hammer.Manager(navigation);
	var swipe		= new Hammer.Swipe();

	hammer.add(swipe);
	hammer.on('swiperight', function(){
	   $(navigation).animate({right: "-85%"}, 500)
 		 $('#show-menu').css({'visibility':"visible"});
		 $('.modal').animate({'visibility':"hidden"},100);
 		$('.modal').animate({opacity:"0"},700);
	});
