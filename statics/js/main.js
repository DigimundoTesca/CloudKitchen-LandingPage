/*$(function() {
  var imagenes = ['banner1.jpg', 'banner2.jpeg', 'banner3.jpg', 'banner4.JPG'];
  $('#mainbanner').css({'background-image': 'url(statics/images/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
}); */

do {
	$(document).ready(function() {

	var contenedor = $('#mainbanner');
	var imagenes = ['banner1.jpg', 'banner2.jpeg', 'banner3.jpg', 'banner4.JPG', 'banner5.jpeg', 'banner6.jpeg', 'banner7.jpeg'];
	var tiempo = 2500;
	contenedor.css({'background-image':'url(statics/images/banner1.jpg)'});

	function image(){
	setTimeout(function() {
	contenedor.fadeIn('slow', 0.3, function() {
	$(this).css({'background-image': 'url(statics/images/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
	image();}).fadeIn('slow', 0.3); },tiempo); }

	image();
	});
} while (false);



/*change background color*/
  $(document).scroll(function(){
    if($(this).scrollTop() > 20) {
      $('#navbar-main').css({"background-color":"rgba(2,4,0,0.8)"});
    } else {
      $('#navbar-main').css({"background-color":"rgba(0,0,0,0.15)"});
    }
  });
