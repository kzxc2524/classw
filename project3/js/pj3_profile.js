$(document).ready(function(){

	function basicAction(z){
		if(z="0"){
			$('.profile_info1_1').css('top','-200%').stop().animate({'top':'0'});
			$('.profile_info2_1').css('bottom','-100%').stop().animate({'bottom':'0'});
			$('#basic_info').css('right','-100%').stop().animate({'right':'0'});
		}else if(z="1"){
			$('.profile_info1_2').css('top','-200%').animate({'top':'0'});
			$('.profile_info2_2').css('bottom','-100%').animate({'bottom':'0'});
			$('.profile_info2_2 h3, .profile_info2_2 p').css('marign-right','-100%').animate({'margin-right':'0'});
		}
	};
	



	var swiperSlide1 = $('#profile_content_top .swiper-slide');
	var swiperPagination1 = $('#profile_content_top .swiper-pagination-bullet');
	var swiperPagination2 = $('#profile_content_bottom .swiper-pagination-bullet');
	/*
	$('#profile_content_top').bind('click scroll keydown keypress keyup scroll mousedown mouseenter mouseleave mouseout mouseup mouseover mousemove hover focus touchstart touchmove touchend',function(){
		swiperPagination1.each(function(i,item){			
			if($(item).hasClass('swiper-pagination-bullet-active')){
				swiperPagination2.eq(i).trigger('click');
			}

		});
	});*/
	
	function triggerClick(){
		swiperPagination1.each(function(i,item){
			if($(item).hasClass('swiper-pagination-bullet-active')){
				swiperPagination2.eq(i).trigger('click');
			}
		});
	}
	
	console.log(swiperSlide1);

	function bgMove(){
		swiperSlide1.each(function(i,item){
			if($(item).hasClass('swiper-slide-active')){
				$(item).parent().parent().prev().removeClass('moveX1 moveX2 moveX3 moveX4 moveX5');
				$(item).parent().parent().prev().addClass('moveX'+i);
			}
		});
	}
	
	setInterval(function(){
		triggerClick();
		bgMove();
	});
	



	/*setInterval(function(){
		swiperSlide1.each(function(i,item){
				if($(item).offset().left >= 0 && $(item).offset().left <= 10){
			swiperPagination2.eq(i-1).trigger('click');
			return;
			}
		});
	});
	swiperSlide1.each(function(i,item){
		$(item)
		if($(item).offset().left == 0){
			swiperPagination2.eq(i-1).trigger('click');
		}
	});

	/*$('#profile_content_top').bind('click keydown keypress keyup scroll mousedown mouseenter mouseleave mouseout mouseup mouseover mousemove hover focus touchstart touchmove touchend',function(){
		swiperPagination1.each(function(i,item){
			if($(item).hasClass('swiper-pagination-bullet-active')){
				swiperPagination2.eq(i).delay(500).trigger('click');
			}
		});
	});
	*/
	
});