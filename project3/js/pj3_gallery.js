$(document).ready(function(){
	var topActive=$('.swiper-pagination-bullet-active').offset().top;
	var Height = $('.swiper-pagination').offset().top;
	/*
	$('.swiper-pagination-bullet').click(function(){
		$('.swiper-pagination').animate({scrollTop:topActive-Height});
	});*/
	//topActive 값이 변하는 걸 감지하고 구할 수 있게 해야함!
	console.log(topActive-Height);
	//$('.swiper-pagination').animate({scrollTop:scrollTop2-thumbHeight*1.49},500);

	$('#video_container').fadeOut();

	if($('input#gallery_photo').is(':checked')){
			$('#photo_container').fadeIn();
	}

	$('input[name="gallery_tap"]').change(function(){
		if($('input#gallery_photo').is(':checked')){
			$('#video_container').fadeOut();
			$('#photo_container').fadeIn();
			$('.swiper-pagination.photo .swiper-pagination-bullet:nth-of-type(1)').trigger('click');
		}else if($('input#gallery_video').is(':checked')){
			$('#photo_container').fadeOut();
			$('#video_container').fadeIn();
			$('.swiper-pagination.video .swiper-pagination-bullet:nth-of-type(1)').trigger('click');
		}
	});
	
	/*
	setInterval(function(){
		if($('.swiper-pagination-bullet-active').offset().top >= Height)
		$('.swiper-pagination-bullet-active').animate({
			scrollTop:$('.swiper-pagination').offset().top
		});
	});
	*/
	
});