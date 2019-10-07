$(window).load(function(){
			$('#loading_screen').fadeOut('slow');
			$('body').css({
				'overflow-y':'auto'
			});
			$('#pf01_home_content').delay(5000).css({
					'opacity':'0'
			}).animate({
					'opacity':'1'	
			},650);
			$('#pf01_home_content>hgroup>h2:nth-of-type(1)').delay(5000).css({
					'top':'100%',
					'opacity':'0'
			}).animate({
					'top':'50%',
					'opacity':'1'	
			},650);
			$('#pf01_home_content>hgroup>h2:nth-of-type(2)').delay(5300).css({
					'top':'0%',
					'opacity':'0'
			}).animate({
					'top':'50%',
					'opacity':'1'	
			},650);
			$('#pf01_home_content>hgroup>hr').delay(5700).css({
					'height':'0',
					'opacity':'0'					
			}).animate({
					'height':'100%',
					'opacity':'1'	
			},700);
			$('#pf01_home_content_txt').delay(6350).css({
					'opacity':'0'
			}).animate({
					'opacity':'1'	
			},800);
			$('.scroll_ani').delay(5700).css({					
					'opacity':'0'
			}).animate({					
					'opacity':'1'	
			},700);		

});
		
		
		$(document).ready(function(){
			

			setInterval(function(){
				$('#loading_screen>div>p>span').addClass('loadani');
			},500);

			//$('#loading_screen>div>p>span').removeClass('loadani'); add와 시간 차를 두고 반복하고 싶은데 흠.... 

			
			$('.main_gnb_bg.left, .main_gnb_bg.right').css('background','#f3f0ed');	
			$('#main_gnb_anchor>li>a').append('<hr noshade color="#000">');
			$('#main_gnb_anchor>li:nth-child(1)>a').addClass('selected');
			$('#main_gnb_anchor>li>a>hr').css({
				'width':'1%',
				'margin':'0 auto',
				'opacity':'0'
			});
			function home_content_txt(){
				if($(window).width()>=650){
					$('#pf01_home_content_txt').empty().append(
					"안녕하세요, 웹 퍼블리셔 김종완입니다.<br>.class가 웹 문서 곳곳에서 활약하듯 class있는 웹 퍼블리셔가 되겠습니다."
					);
				}else if($(window).width()<650 && $(window).width()>=320){
					$('#pf01_home_content_txt').empty().append(
					"안녕하세요, 웹 퍼블리셔 김종완입니다.<br>.class가 웹 문서 곳곳에서 활약하듯<br>class있는 웹 퍼블리셔가 되겠습니다."
					);
				}
			}
			home_content_txt();
			
			
			var sectionHeight=$('#pf01_home').height();

			$('#main_gnb_anchor>li>a').each(function(i,item){
				$(item).bind('click',function(e){
					e.preventDefault();
					$('html, body').animate({
						scrollTop:sectionHeight*i
					},750);
					$('#contact_businesscard').css({
							'transform':'rotateX(0) rotateY(0)',
							'-webkit-transform':'rotateX(0) rotateY(0)',
							'-moz-transform':'rotateX(0) rotateY(0)',
							'-ms-transform':'trotateX(0) rotateY(0)',
							'-o-transform':'rotateX(0) rotateY(0)'
					});
					$('#contact_businesscard>#pf01_contact_front').css({
							'z-index':'1'
					});
					$('#contact_businesscard>#pf01_contact_back').css({
							'z-index':'0'
					});
				});
			});
			
			function scrollreaction(){
				$(window).scroll(function(){				
					var gnbHeight=$('#main_gnb').height();
					var scrollTop = $(window).scrollTop();
					if(scrollTop>=0 && scrollTop<sectionHeight-gnbHeight){
						$('.main_gnb_bg.left, .main_gnb_bg.right').css('background','#f3f0ed');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(1)>a').addClass('selected');
					}else if(scrollTop>=sectionHeight-gnbHeight && scrollTop<sectionHeight*2-gnbHeight){
						$('.main_gnb_bg.left').css('background','#f3f0ed');
						$('.main_gnb_bg.right').css('background','#ece9e7');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(2)>a').addClass('selected');
					}else if(scrollTop>=sectionHeight*2-gnbHeight && scrollTop<sectionHeight*3-gnbHeight){
						$('.main_gnb_bg.left').css('background','#efe4dc');
						$('.main_gnb_bg.right').css('background','#efe4dc');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(3)>a').addClass('selected');
					}else if(scrollTop>=sectionHeight*3-gnbHeight && scrollTop<sectionHeight*4-gnbHeight){
						$('.main_gnb_bg.left').css('background','none');
						$('.main_gnb_bg.right').css('background','none');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(4)>a').addClass('selected');
					}else if(scrollTop>=sectionHeight*4-gnbHeight && scrollTop<sectionHeight*5-gnbHeight){
						$('.main_gnb_bg.left').css('background','none');
						$('.main_gnb_bg.right').css('background','none');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(5)>a').addClass('selected');
					}else if(scrollTop>=sectionHeight*5-gnbHeight && scrollTop<sectionHeight*6){
						$('.main_gnb_bg.left').css('background','none');
						$('.main_gnb_bg.right').css('background','none');
						$('#main_gnb_anchor>li>a').removeClass('selected');
						$('#main_gnb_anchor>li:nth-child(6)>a').addClass('selected');
					}		
				});
			}
			
			scrollreaction();

			
			/*
			$('#pf01_skills_content1>div>label').each(function(){
				$('#pf01_skills_content1>div>label:nth-of-type(1)').click(function(){
					$('#pf01_skills_content1>div>label:nth-of-type(2)').prependTo('#pf01_skills_content1>div')
				});
				$('#pf01_skills_content1>div>label:nth-of-type(3)').click(function(){
					$('#pf01_skills_content1>div>label:nth-of-type(2)').appendTo('#pf01_skills_content1>div')
				});
			});//input으로 바꾸자...*/
			
			


			var pagenation1=$('.swiper-pagination1 .swiper-pagination-bullet');
			var pagenation2=$('.swiper-pagination2 .swiper-pagination-bullet');
			var graphicTitle=$('#graphic_modal_title_inner');
			
			var pagenation3=$('.swiper-pagination3>span');
			var graphicLabel=$('#pf01_graphic>div>a>label');

			/*$(".swiper2").bind('click mousemove mouseover mouseout touch mouseup mouseenter mouseleave touchstart touchmove touchend keydown keyup keypress scroll'*/
			function swipe1Trigger(){
				pagenation2.each(function(i,item){
					if($(item).hasClass('swiper-pagination-bullet-active')){
						pagenation1.eq(i).trigger('click');
					}
				});
			}
			
			graphicLabel.each(function(i,item){
				$(item).click(function(){
					pagenation3.eq(i).trigger('click');
					$('.graphic_button').trigger('click'); //이벤트가 있어야 됨!!
				});
			});


			function gts(){
				graphicTitle.each(function(){
					if($('.graphic_content1.swiper-slide-active .gs1').hasClass('swiper-slide-active')){
							//graphicTitle.removeClass('move2 move3 move4 move5 move6 move7 move8');
							//graphicTitle.addClass('move1');
							graphicTitle.css({
								'top':'0'
						});
					}else if($('.graphic_content1.swiper-slide-active .gs2').hasClass('swiper-slide-active')){
							//graphicTitle.removeClass('move1 move3 move4 move5 move6 move7 move8');
							//graphicTitle.addClass('move2');
							graphicTitle.css({
								'top':'-100%'
						});
					}else if($('.graphic_content1.swiper-slide-active .gs3').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-200%'
						});
					}else if($('.graphic_content2.swiper-slide-active .gs4').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-300%'
						});
					}else if($('.graphic_content3.swiper-slide-active .gs5').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-400%'
						});
					}else if($('.graphic_content3.swiper-slide-active .gs6').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-500%'
						});
					}else if($('.graphic_content3.swiper-slide-active .gs7').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-600%'
						});
					}else if($('.graphic_content3.swiper-slide-active .gs8').hasClass('swiper-slide-active')){
							graphicTitle.css({ //css말고 animate일때 가장 처음 받은 값이 다음 조건에 따라 변하지 않는 문제가 있었음 질문!
								'top':'-700%'
						});
					}
				});	
			}
			

			/*
			function gts(){
				if($('.graphic_content1').hasClass('swiper-slide-active') && $('.gs2.swiper-slide').hasClass('swiper-slide-active')){
						graphicTitle.animate({
							'top':'-100%'
						},500);
				}else if($('.graphic_content1').hasClass('swiper-slide-active') && $('.gs3.swiper-slide').hasClass('swiper-slide-active')){
						graphicTitle.animate({
							'top':'-200%'
						},500);
				}
			}*/
			//graphic_content

			setInterval(function(){
				swipe1Trigger();
				gts();
			});
			
			var modalTouchGuide = "";
			modalTouchGuide += '<article class="touchguide"><label for="touchguide"></label>';
			modalTouchGuide += '<div><ul><li></li><li></li><li></li></ul>';
			modalTouchGuide += '<ul><li></li></ul>';
			modalTouchGuide += '<ul><li></li><li></li><li></li><li></li></ul>';
			modalTouchGuide += '<img src="images/pf01_touch.svg" alt="touch"></div>';
			modalTouchGuide += '<p>이 창은 클릭하면 사라집니다</p></article>'
			

			$('.bigger_content').prepend(modalTouchGuide);
			
			function touchguide(){
				if($('#touchguide').is(':checked')){
					$('.touchguide').css({
						'display':'block'
					});
				}else{
					$('.touchguide').css({
						'display':'none'
					});
				}
			}
			
			$('#touchguide').change(function(){
				touchguide();
			});


			var winWidth=$(window).width();
			var docHeight=$(document).height();
			var contactHeight=$('#pf01_contact').height()/2;
			console.log(contactHeight);
			console.log(docHeight-contactHeight);
			
			function mousemoveEvent(){
				$('#pf01_contact').on('mousemove',function(event){
					if(winWidth>1024){
						$('#contact_businesscard').css({
							'transform':'rotateX('+(event.pageY*0.5)+'deg) rotateY('+(event.pageX*0.5)+'deg)',
							'-webkit-transform':'rotateX('+(event.pageY*0.5)+'deg) rotateY('+(event.pageX*0.5)+'deg)',
							'-moz-transform':'rotateX('+(event.pageY*0.5)+'deg) rotateY('+(event.pageX*0.5)+'deg)',
							'-ms-transform':'rotateX('+(event.pageY*0.5)+'deg) rotateY('+(event.pageX*0.5)+'deg)',
							'-o-transform':'rotateX('+(event.pageY*0.5)+'deg) rotateY('+(event.pageX*0.5)+'deg)'
						});
					}
				});
			}

			mousemoveEvent();

			
			$('#bc_flip').change(function(){
				if($(this).is(':checked')){
					$('label[for="bc_flip"]>span').empty().text('face');
				}else{
					$('label[for="bc_flip"]>span').empty().text('back');
				}
			});




			$(window).resize(function(){
				var winWidth=$(window).width();
				var docHeight=$(document).height();
				var contactHeight=$('#pf01_contact').height()/2;
				var pagenation1=$('.swiper-pagination1 .swiper-pagination-bullet');
				var pagenation2=$('.swiper-pagination2 .swiper-pagination-bullet');
				var graphicTitle=$('#graphic_modal_title_inner');
				var sectionHeight=$('#pf01_home').height();
				var pagenation3=$('.swiper-pagination3>span');
				var graphicLabel=$('#pf01_graphic>div>a>label');
				home_content_txt();
				mousemoveEvent();
			});





		});	