$(document).ready(function(){
	var bannerTop = $('#universe_banner').offset().top;
	var bannerHeight =$('#universe_banner').height();
	
	$('.universe_banners>h2').hover(function(){
		var topMove = $(this).offset().top;
		var halfHeight =$(this).height()/2;		
		$('#universe_banner>hr').animate({top:topMove-halfHeight},200,'linear');
	},function(){	
	});
	
	$(".universe_inner1 input").change(function(){
		//change 메소드 안에 .is(':checked') 해줘야 변경 감지함!
		if($(this).is(':checked')){
			$(".universe_inner1 input").not(this).next().css({
			'display':'none'
			});
		}else{
			$(".universe_inner1 input").next().css({
			'display':'block'});
		}
	});


	$("#universe_inner_button2, #universe_inner_button3").change(function(){
		if($('#universe_inner_button2').is(':checked') || $('#universe_inner_button3').is(':checked')){
			$(".universe_inner1 input").prop('checked',false);
			$(".universe_inner1 input").next().css({
			'display':'block'});
		}
	});

	/*if(	$(".universe_inner1>label>input").is('checked')==true){
		$(".universe_inner1>label").addClass("moveshow")
	}

	$(document).mousemove(function(event){
		var x = event.pageX;
		$('#universe_banner>hr').css({'top':x+'px'});
	});*/



	/*$('.universe_banners>div').slideUp();
	$('.universe_banners>h2').click(function(){
		
		$(this).next('div').slideToggle();
	});
	*/
});