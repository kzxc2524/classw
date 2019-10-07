$(document).ready(function(){
	/*function backsize(){
		$('#discography_back').css({
			'min-height':$(window).height(),
			'max-height':$(window).height()*1.1
		});
	};*/

	function slideUpDown(){
		if($(window).width()>=320 && $(window).width()<=549){
			$('.tap_box li:not(:first-child)').slideUp();
			$('.tap_box li').each(function(i,item){
				$(item).click(function(){
					$('.tap_box li').not($(this)).slideToggle();
				});
			});
		}
	};
	
	function albumsize(){
		if($(window).width()>1280){
			$('.discography_album').css({
				'width':$('#discography_container').width()*0.22,
				'height':$('#discography_container').width()*0.22
			});
			$('.discography_album_name p').css({
				'line-height':$('#discography_container').width()*0.22+'px'
			});
		}else if($(window).width()>=768 && $(window).width()<=1280){
			$('.discography_album').css({
				'width':$('#discography_container').width()*0.27,
				'height':$('#discography_container').width()*0.27
			});
			$('.discography_album_name p').css({
				'line-height':$('#discography_container').width()*0.27+'px'
			});
		}else if($(window).width()>=550 && $(window).width()<=767){
			$('.discography_album').css({
				'height':$('#discography_container').width()*0.3
			});
			$('.discography_album_name p').css({
				'line-height':$('#discography_container').width()*0.3+'px'
			});
		}else if($(window).width()>=320 && $(window).width()<=549){
			$('.discography_album').css({
				'height':$('#discography_container').width()*0.485
			});
			$('.discography_album_name p').css({
				'line-height':$('#discography_container').width()*0.485+'px'
			});
		}
	};

	function changeback(){
		$('.discography_album').each(function(i,item){
			$(item).hover(function(){
				$('#discography_back').css({				
					'background-image':'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('+$(item).find('img').attr('src')+')',
					'background-position':'center top',
					'background-repeat':'no-repeat, no-repeat',
					'background-size':'cover',
					'-webkit-background-size':'cover',
					'-moz-background-size':'cover',
					'-ms-background-size':'cover',
					'-o-background-size':'cover',
					'z-index':'0'
				});
			});
		});
	};

	function animateOpacity(){
		$('.discography_album').each(function(i,item){
			if($(item).offset().top>=$('#main_footer').offset().top-150){
				$(item).removeClass('showOpacity').addClass('hideOpacity');
			}else{
				$(item).removeClass('hideOpacity').addClass('showOpacity');
			}
		});
	}
	

	//backsize();		  // 배경 height
	animateOpacity(); //scroll에 따라 나타나고 사라짐
	slideUpDown();	  // 탭 버튼 토글
	albumsize();	  // 앨범 각각 사이즈
	changeback();	  // 앨범 클릭시 배경 변화

	var setsize;
	var scrolling;

	$(window).resize(function(){
		setsize=true;
	});

	$(window).scroll(function(){
		scrolling=true;
	});	

	setInterval(function(){
		if(scrolling){
			animateOpacity();
		}
		if(setsize){
			albumsize();
			//backsize();
		}
	});

	$('input[name=discography_tap]').change(function(){
		if($(this).is(':checked')){
			animateOpacity();
		}
	});
	
	
	$('.album_list>ol>li>span').addClass('album_playing');
	$('.album_list>ol>li>span').each(function(i,item){		
		$(item).click(function(){
			if($(item).hasClass('album_pause')){
				$(item).removeClass('album_pause').addClass('album_playing');
				
			}else if($(item).hasClass('album_playing')){
				$(item).removeClass('album_playing').addClass('album_pause');
				$('.album_list>ol>li>span').not($(item)).removeClass('album_pause').addClass('album_playing');
			}
		});		
	});
	$('.album_all_play').click(function(){
		var tt=$(this).prev().prev();
		alert(tt.text()+'의 전곡을 재생합니다')
	});
	
	$('.slide_close').click(function(){
		$('#albuminfo_back_black').css({
			'top':'100%'
		});
	});
	

	var albumIndex = $('.discography_album_name p');
	//var slideButton = $('.swiper-pagination-bullet').get();
	//get은 요소를 DOM 객체로 반환하기 때문에 다른 메소드를 사용할 수 없음!
	//eq는 사용할 수 있음!

	albumIndex.each(function(i,item){
		$(item).click(function(){
			$('.swiper-pagination-bullet').eq(i).trigger("click");
			$('#albuminfo_back_black').css({
				'top':'0'
			});
		});
	});



});