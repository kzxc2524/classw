/*var notice_title = document.getElementsByClassName('notice_title');
var iframe = document.getElementsByTagName('iframe');

 notice_title.onclick = function(){
	iframe.stopVideo();
 };


console.log(notice_title);
console.log(iframe);*/

$(document).ready(function(){
	$('.notice_content').slideUp(0).css('opacity',0);
	
	$('.notice_title').each(function(i,item){
		$(item).click(function(){
			$(item).next('div').slideToggle(500).animate({'opacity':1},500);
			$('.notice_title').not($(item)).next('div').slideUp(500).animate({'opacity':0},0);
			
		});
	});

	$('.notice_content').css({'max-height':$(window).height()*0.3})
});