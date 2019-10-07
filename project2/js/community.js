
$(document).ready(function(){
	$('.cs	.subject_plus:contains("7.31")').parent().children('span').css({
		'background':'url(images/icon/tri_red.svg)',
		'background-repeat':'no-repeat',
		'background-position':'center center'
	});

	$('input[name=webtoon_board_tap]').each(function(i,item){
		
		if($(item).is(':checked')){
			$("label[for=webtoon_board_tap"+(i+1)+"]").css({
			'color':'#fdc010'
			});
		
		}
		
	});

	if($(window).width()<768){
		
		$('#webtoon_board_tap_button>ul>li>label:not(:first)').slideToggle();
		}
	
	$('#webtoon_board_tap_button>ul>li>label').click(function(){
		$('#webtoon_board_tap_button>ul>li>label').css('color','#fff');
		$(this).css('color','#fdc010');
		if($(window).width()<768){
		
		$('#webtoon_board_tap_button>ul>li>label').not(this).slideToggle();
		}

	});

	
	
	

	/*if($(window).width()<=768){
		$("#webtoon_board_tap_button").addClass("swiper-container swiper1");
		$("#webtoon_board_tap_button>ul").addClass("swiper-wrapper");
		$("#webtoon_board_tap_button>ul>li").addClass("swiper-slide");
	}*/
	
});

