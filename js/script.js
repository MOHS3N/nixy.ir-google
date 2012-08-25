// JavaScript Document
var browser_height = $(window).innerHeight();
$(function(){
	$('div.main-menu').css({'margin-top':(browser_height/2)-100});
	
	
	$('div.mail').hover(function(){
			$('div.mail').css({'border-color':'#FC0'});
			$('img.black').css({'opacity':'0'});
			
	},function(){
		
			$('div.mail').css({'border-color':'rgba(299, 299, 299 ,0)'});
			$('img.black').css({'opacity':'1'});	
	});
			
	$('div.mail').click(function(){
		
		$('div.mail').toggleClass('add-mail','mail');
		$('div.mail').removeClass('mail');
		$('div.main-menu').css({'margin-top':'50px'})
	 })		
})