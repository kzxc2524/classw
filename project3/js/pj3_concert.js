$(document).ready(function(){
	function backsize(){
		$('#concert_back').css({
			'height':$(window).height()*1.2
		});
	};
	
	backsize();

	function animateOpacity(){
		$('.concert_content>li').each(function(i,item){
			if($(item).offset().top<=$('#main_footer').offset().top-150){
				$(item).removeClass('hideOpacity').addClass('showOpacity');
			}else{
				$(item).removeClass('showOpacity').addClass('hideOpacity');
			}
		});
	}
	
	
	animateOpacity();

	$('input[name=concert_tap]').change(function(){
		if($(this).is(':checked')){
			animateOpacity();
			backsize();
		}
	});
	
	var setsize;
	var scrolling;

	$(window).bind('scroll resize',function(){
		scrolling = true;
		setsize=true;
	});
	

	setInterval(function(){
		if(scrolling){
			animateOpacity();
			backsize();
		}
	});	
	
	/*$('.concert_content>li').css({
		'opacity':'0',
		'margin-top':'40px'	
	});

	function animateOpacity(){
		$('.concert_content>li').each(function(i,item){
			if($(item).offset().top<=$('#main_footer').offset().top-150){
				$(item).animate({
					'opacity':'1',
					'margin-top':'0'	
				},1000);
			}
		});
	}

	animateOpacity();
	
	
	$('.concert_content>li').css({
		'opacity':'0',
		'margin-top':'40px'	
	});

	
	$('.concert_content>li').each(function(i,item){
		if($(item).offset().top<=$('#main_footer').offset().top-150){
			$(item).animate({
				'opacity':'1',
				'margin-top':'0'	
			},1000);
		}else{
			$(item).animate({
				'opacity':'0',
				'margin-top':'40px'	
			},1000);
		}
	});

	$('input[name=concert_tap]').change(function(){
		if($(this).is(':checked')){
			$('.concert_content>li').each(function(i,item){
				if($(item).offset().top<=$('#main_footer').offset().top-150){
					$(item).animate({
						'opacity':'1',
						'margin-top':'0'	
					},1000);
				}else{
					$(item).animate({
						'opacity':'0',
						'margin-top':'40px'	
					},1000);
				}
			});
		}
	});

	
	
	$(window).resize(function(){
		$('.concert_content>li').each(function(i,item){
				if($(item).offset().top<=$('#main_footer').offset().top-150){
					$(item).animate({
						'opacity':'1',
						'margin-top':'0'	
					},1000);
				}else{
					$(item).animate({
						'opacity':'0',
						'margin-top':'40px'	
					},1000);
				}
			});
	});
	$('input[name=concert_tap]').change(function(){
		if($(this).is(':checked')){
			$('.concert_content>li').each(function(i,item){
				if($(item).offset().top<=$('#main_footer').offset().top-150){
					$(item).animate({
						'opacity':'1',
						'margin-top':'0'	
					},1000);
				}else{
					$(item).animate({
						'opacity':'0',
						'margin-top':'40px'	
					},1000);
				}
			});
		}
	});

	var scrolling;


	$(window).bind('scroll resize',function(){
		scrolling = true;
	});

	

	setInterval(function(){
		if(scrolling){
			animateOpacity();
		}
	});*/
	
}); //wrapper