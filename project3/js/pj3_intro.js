
$(document).ready(function(){
		$('body').css({
			'width':$(window).width(),
			'height':$(window).height()
		});
		if($(window).width()>=551){
		$('#cube_container').css({
			'width':$(window).width()*0.27,
			'height':$(window).width()*0.27
			});
			$('.album_shadow').css({'width':$(window).width()*0.6125});
		}else if($(window).width()<=550 && $(window).width()>=320){
			$('#cube_container').css({
			'width':$(window).width()*0.5,
			'height':$(window).width()*0.5
			});
			$('.album_shadow').css({'width':$(window).width()*3});
		}		
		$('#intro_section').css({'height':$('#cube_container').height()});
		
		
		$(window).resize(function(){
			$('body').css({
				'width':$(window).width(),
				'height':$(window).height()
			});
			if($(window).width()>=551){
				$('#cube_container').css({
				'width':$(window).width()*0.27,
				'height':$(window).width()*0.27
				});
				$('.album_shadow').css({'width':$(window).width()*0.6125});
			}else if($(window).width()<=550 && $(window).width()>=320){
				$('#cube_container').css({
				'width':$(window).width()*0.5,
				'height':$(window).width()*0.5
				});
				$('.album_shadow').css({'width':$(window).width()*3});
			}
	
			$('#intro_section').css({'height':$('#cube_container').height()});
		});

		if($('#rotate_action0').is(':checked')){
			$('.next_arrow').attr('for','rotate_action1');
			$('.prev_arrow').attr('for','rotate_action2');
			
			if($('#music_player').hasClass('actived')){
				$('.three_d_item>img:nth-of-type(2)').removeClass('playing');
				$('.three_d_item1>img:nth-of-type(2)').addClass('playing');
			}else{
				$('.three_d_item1>img:nth-of-type(2)').removeClass('playing');
			}
		}
		$('input[name=rotate_action]').each(function(i){
			$(this).change(function(){
				if($('#rotate_action0').is(':checked')){
					$('.current_num, hgroup>h3, hgroup>h4, .little_title').empty();
					$('.current_num').append('01');
					$('hgroup>h3').append('10월의 날씨(October rain)');
					$('hgroup>h4').append('ALBUM 3.1 | TITLE');
					$('.little_title').prepend('10cm-10월의 날씨<br><span>ALBUM 3.1</span>')
					$('hgroup>h3, hgroup>h4, .little_title').css({'opacity':0}).animate({'opacity':'1'},500);
					$('#music_player').attr('src','audio/october_rain.mp3');
					$('body').css({'background-image':'url(image/origin_back.png)',
									'background-size':'100% 100%',
									'-webkit-background-size':'100% 100%',
									'-moz-background-size':'100% 100%',
									'-ms-background-size':'100% 100%',
									'-o-background-size':'100% 100%'
								});
					if($('#music_player').hasClass('actived')){
						$('.three_d_item>img:nth-of-type(2)').removeClass('playing');
						$('.three_d_item1>img:nth-of-type(2)').addClass('playing');
					}else{
						$('.three_d_item1>img:nth-of-type(2)').removeClass('playing');
					}
					
					$('.next_arrow').attr('for','rotate_action1');
					$('.prev_arrow').attr('for','rotate_action2');
				}else if($('#rotate_action1').is(':checked')){
					$('.current_num, hgroup>h3, hgroup>h4, .little_title').empty();
					$('.current_num').append('02');
					$('hgroup>h3').append('그러나(however)');
					$('hgroup>h4').append('ALBUM 4.3 | TITLE');
					$('.little_title').prepend('10cm-그러나<br><span>ALBUM 4.3</span>')
					$('hgroup>h3, hgroup>h4, .little_title').css({'opacity':0}).animate({'opacity':'1'},500);
					$('#music_player').attr('src','audio/however.mp3');
					$('body').css({'background-image':'url(image/forth_back.png)',
									'background-size':'100% 100%',
									'-webkit-background-size':'100% 100%',
									'-moz-background-size':'100% 100%',
									'-ms-background-size':'100% 100%',
									'-o-background-size':'100% 100%'
								});
					if($('#music_player').hasClass('actived')){
						$('.three_d_item>img:nth-of-type(2)').removeClass('playing');
						$('.three_d_item2>img:nth-of-type(2)').addClass('playing');
					}else{
						$('.three_d_item2>img:nth-of-type(2)').removeClass('playing');
					}
					
					$('.next_arrow').attr('for','rotate_action2');
					$('.prev_arrow').attr('for','rotate_action0');
				}else if($('#rotate_action2').is(':checked')){
					$('.current_num, hgroup>h3, hgroup>h4, .little_title').empty();
					$('.current_num').append('03');
					$('hgroup>h3').append('폰서트(phonecert)');
					$('hgroup>h4').append('ALBUM 4.0 | TITLE');
					$('.little_title').prepend('10cm-폰서트<br><span>ALBUM 4.0</span>')
					$('hgroup>h3, hgroup>h4, .little_title').css({'opacity':0}).animate({'opacity':'1'},500);
					$('#music_player').attr('src','audio/phonecert.mp3');
					$('body').css({'background-image':'url(image/eighth_back.png)',
									'background-size':'100% 100%',
									'-webkit-background-size':'100% 100%',
									'-moz-background-size':'100% 100%',
									'-ms-background-size':'100% 100%',
									'-o-background-size':'100% 100%'
								});

					if($('#music_player').hasClass('actived')){
						$('.three_d_item>img:nth-of-type(2)').removeClass('playing');
						$('.three_d_item3>img:nth-of-type(2)').addClass('playing');
					}else{
						$('.three_d_item3>img:nth-of-type(2)').removeClass('playing');
					}

					$('.next_arrow').attr('for','rotate_action0');
					$('.prev_arrow').attr('for','rotate_action1');
				}
			});
		});
		$('input[name=rotate_action]').css({'margin-top':'200px'});
		
		

		
		/*$('.next_arrow').click(function(){
			$('.current_num, hgroup>h3, hgroup>h4, .little_title').empty();
			if(i<=$('input[name=rotate_action]').length-1){
			$('.next_arrow').attr('for','rotate_action'+(i+1));
			$('.prev_arrow').attr('for','rotate_action'+i);
			i++;
			$('.current_num').append('0'+i);
			}else if(i>=$('input[name=rotate_action]').length){
				i=1;
				$('.next_arrow').attr('for','rotate_action'+i);
				$('.prev_arrow').attr('for','rotate_action'+(i+2));
				$('.current_num').append('0'+i);
			}		
		});
		
		$('.prev_arrow').click(function(){
			$('.current_num, hgroup>h3, hgroup>h4, .little_title').empty();
			if(i<=$('input[name=rotate_action]').length-1 && i>0){
			$('.next_arrow').attr('for','rotate_action'+(i+1));
			$('.prev_arrow').attr('for','rotate_action'+i);
			i--;
			$('.current_num').append('0'+(i+1));
			}else if(i<=0 || i>=$('input[name=rotate_action]').length){
				i=2;
				$('.next_arrow').attr('for','rotate_action'+i);
				$('.prev_arrow').attr('for','rotate_action'+(i+1));
				$('.current_num').append('0'+(i+1));
			}
		});*/



		
});//wrapper