$(function(){
	/*alert('usando jquery');*/
	$('main,img,footer').hide();	
	$('main,footer').slideDown(1500);
	$('img').toggle(1000);
	$('h1').mouseenter(function(){
		$('img').hide();
	});
	$('h1').mouseleave(function(){
		$('img').show();
	});
});
