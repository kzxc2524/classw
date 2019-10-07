 // 캐릭터 페이지 스크립트
 	$(document).ready(function(){
		for (i=1; i<180; i++){
			$(".all_character:first").clone().appendTo("#all_character");
		}

		
		
		var cdb = $('#character_array_name p').get();
		var cnickdb = $('#character_array_name span').get();

		$(".all_character").each(function(index,item){
			$(item).addClass('all_character'+(index+1))
			$(item).find('p').empty();
			$(item).find('img').attr('src','image/character/character'+(index+1)+'.png');
			$(item).find('p:first').append(cdb[index]);
			$(item).find('p:nth-of-type(2)').append(cnickdb[index]);
		});
		
		$(".all_character1").addClass('g y1900 abnormal');
		$(".all_character2").addClass('g x villain');
		$(".all_character3").addClass('g y2010 abnormal');
		$(".all_character4").addClass('g y2020 abnormal');
		$(".all_character5").addClass('g y2000 hero');
		$(".all_character6").addClass('g y1900 y2000 y2010 y2020 hero');
		$(".all_character7").addClass('g y2020 hero');
		$(".all_character8").addClass('g y2020 hero');
		$(".all_character9").addClass('g y2020 hero ');
		$(".all_character10").addClass('g y2010 abnormal');
		$(".all_character11").addClass('g x hero');
		$(".all_character12").addClass('g y2000 villain');
		$(".all_character13").addClass('g y2010 villain');
		$(".all_character14").addClass('g y2000 villain');
		$(".all_character15").addClass('g y2000 villain');
		$(".all_character16").addClass('g y2020 villain');
		$(".all_character17").addClass('g y2020 abnormal');
		$(".all_character18").addClass('g y2000 y2010 abnormal');
		$(".all_character19").addClass('g y1900 y2000 y2010 y2020 hero');
		$(".all_character20").addClass('g y1900 abnormal');
		$(".all_character21").addClass('g y2010 abnormal');
		$(".all_character22").addClass('g y2010 abnormal');
		$(".all_character23").addClass('g y2000 hero');
		$(".all_character24").addClass('g ago y1900 y2000 y2010 y2010 hero');
		$(".all_character25").addClass('g y2010 abnormal');
		$(".all_character26").addClass('g y2000 villain');
		$(".all_character27").addClass('g ago abnormal');
		$(".all_character28").addClass('n y2020 abnormal');
		$(".all_character29").addClass('n x villain');
		$(".all_character30").addClass('n y1900 abnormal');
		$(".all_character31").addClass('n ago villain');
		$(".all_character32").addClass('n y1900 abnormal');
		$(".all_character33").addClass('d y1900 hero');
		$(".all_character34").addClass('d y1900 hero');
		$(".all_character35").addClass('d x villain');
		$(".all_character36").addClass('d y1900 abnormal');
		$(".all_character37").addClass('r y1900 y2000 villain');
		$(".all_character38").addClass('r y1900 abnormal');
		$(".all_character39").addClass('r x abnormal');
		$(".all_character40").addClass('r x villain');
		$(".all_character41").addClass('r y1900 y2000 y2010 hero');
		$(".all_character42").addClass('m y1900 abnormal');
		$(".all_character43").addClass('m y1900 hero');
		$(".all_character44").addClass('m ago hero');
		$(".all_character45").addClass('m y2010 villain');
		$(".all_character46").addClass('m x hero');
		$(".all_character47").addClass('m x villain');
		$(".all_character48").addClass('m x abnormal');
		$(".all_character49").addClass('m x hero');
		$(".all_character50").addClass('m x villain');
		$(".all_character51").addClass('m x hero');
		$(".all_character52").addClass('m x hero');
		$(".all_character53").addClass('m x hero');
		$(".all_character54").addClass('m y2010 abnormal');
		$(".all_character55").addClass('m y1900 y2000 y2010 hero');
		$(".all_character56").addClass('m y2020 abnormal');
		$(".all_character57").addClass('m y2000 y2010 y2020 abnormal');
		$(".all_character58").addClass('b y2020 villain');
		$(".all_character59").addClass('b y2010 abnormal');
		$(".all_character60").addClass('b y2010 abnormal');
		$(".all_character61").addClass('b y2000 hero');
		$(".all_character62").addClass('b y2010 abnormal');
		$(".all_character63").addClass('b y2000 y2010 hero');
		$(".all_character64").addClass('b x hero');
		$(".all_character65").addClass('b x villain');
		$(".all_character66").addClass('b y2010 villain');
		$(".all_character67").addClass('b y2010 villain');
		$(".all_character68").addClass('b y2020 abnormal');
		$(".all_character69").addClass('b y2020 abnormal');
		$(".all_character70").addClass('b y1900 abnormal');
		$(".all_character71").addClass('b y2010 abnormal');
		$(".all_character72").addClass('b y1900 villain');
		$(".all_character73").addClass('s y2010 villain');
		$(".all_character74").addClass('s x hero');
		$(".all_character75").addClass('s y1900 hero');
		$(".all_character76").addClass('s x hero');
		$(".all_character77").addClass('s y2000 y2010 hero');
		$(".all_character78").addClass('s y2010 hero');
		$(".all_character79").addClass('s x hero');
		$(".all_character80").addClass('s ago y1900 y2000 y2010 y2020 hero');
		$(".all_character81").addClass('s ago abnormal');
		$(".all_character82").addClass('s ago y1900 y2000 y2010 y2020 hero');
		$(".all_character83").addClass('s y1900 villain');
		$(".all_character84").addClass('s y2020 villain');
		$(".all_character85").addClass('s y2000 abnormal');
		$(".all_character86").addClass('s x hero');
		$(".all_character87").addClass('s ago villain');
		$(".all_character88").addClass('s y2000 abnormal');
		$(".all_character89").addClass('s y2020 hero');
		$(".all_character90").addClass('o y2020 villain');
		$(".all_character91").addClass('o x villain');
		$(".all_character92").addClass('o y2020 abnormal');
		$(".all_character93").addClass('o y2020 abnormal');
		$(".all_character94").addClass('o y2020 abnormal');
		$(".all_character95").addClass('o y1900 abnormal');
		$(".all_character96").addClass('o y2000 hero');
		$(".all_character97").addClass('o y1900 villain');
		$(".all_character98").addClass('o y2020 hero');
		$(".all_character99").addClass('o y2010 villain');
		$(".all_character100").addClass('o y1900 y2000 villain');
		$(".all_character101").addClass('o x hero');
		$(".all_character102").addClass('o y2000 abnormal');
		$(".all_character103").addClass('o y1900 villain');
		$(".all_character104").addClass('o y2000 hero');
		$(".all_character105").addClass('o ago villain');
		$(".all_character106").addClass('o y2000 y2010 hero');
		$(".all_character107").addClass('o x hero');
		$(".all_character108").addClass('o y2010 abnormal');
		$(".all_character109").addClass('o x hero');
		$(".all_character110").addClass('o y2020 villain');
		$(".all_character111").addClass('o y2010 abnormal');
		$(".all_character112").addClass('o x villain');
		$(".all_character113").addClass('o y2020 hero');
		$(".all_character114").addClass('o y1900 hero');
		$(".all_character115").addClass('o x hero');
		$(".all_character116").addClass('o y2020 villain');
		$(".all_character117").addClass('o y2010 abnormal');
		$(".all_character118").addClass('o y2020 abnormal');
		$(".all_character119").addClass('o y2010 abnormal');
		$(".all_character120").addClass('o y2020 abnormal');
		$(".all_character121").addClass('o y1900 hero');
		$(".all_character122").addClass('o y2000 abnormal');
		$(".all_character123").addClass('o y2010 abnormal');
		$(".all_character124").addClass('o y2010 abnormal');
		$(".all_character125").addClass('o y2020 hero');
		$(".all_character126").addClass('o y2000 villain');
		$(".all_character127").addClass('o y2020 abnormal');
		$(".all_character128").addClass('o y2010 hero');
		$(".all_character129").addClass('j y2000 abnormal');
		$(".all_character130").addClass('j y2000 villain');
		$(".all_character131").addClass('j y2020 villain');
		$(".all_character132").addClass('j y2000 y2010 hero');
		$(".all_character133").addClass('j y2020 villain');
		$(".all_character134").addClass('j y2010 villain');
		$(".all_character135").addClass('j y2000 villain');
		$(".all_character136").addClass('j ago abnormal');
		$(".all_character137").addClass('j y2010 abnormal');
		$(".all_character138").addClass('j y2010 abnormal');
		$(".all_character139").addClass('j y2010 villain');
		$(".all_character140").addClass('j y2000 villain');
		$(".all_character141").addClass('j x villain');
		$(".all_character142").addClass('j ago hero');
		$(".all_character143").addClass('j y2000 hero');
		$(".all_character144").addClass('j y2000 abnormal');
		$(".all_character145").addClass('j y2000 abnormal');
		$(".all_character146").addClass('j y2010 villain');
		$(".all_character147").addClass('j y2000 hero');
		$(".all_character148").addClass('c y2010 hero');
		$(".all_character149").addClass('c x villain');
		$(".all_character150").addClass('c x villain');
		$(".all_character151").addClass('c y2020 hero');
		$(".all_character152").addClass('k y2020 hero');
		$(".all_character153").addClass('k y1900 villain');
		$(".all_character154").addClass('k y2000 villain');
		$(".all_character155").addClass('k y2020 hero');
		$(".all_character156").addClass('k ago villain');
		$(".all_character157").addClass('k y1900 y2000 y2010 y2020 hero');
		$(".all_character158").addClass('k x villain');
		$(".all_character159").addClass('k y1900 y2000 hero');
		$(".all_character160").addClass('k y1900 villain');
		$(".all_character161").addClass('t x hero');
		$(".all_character162").addClass('t x hero');
		$(".all_character163").addClass('t y2020 villain');
		$(".all_character164").addClass('p y1900 y2000 abnormal');
		$(".all_character165").addClass('p y2020 villain');
		$(".all_character166").addClass('p x hero');
		$(".all_character167").addClass('p x villain');
		$(".all_character168").addClass('h y2010 abnormal');
		$(".all_character169").addClass('h y1900 hero');
		$(".all_character170").addClass('h y2010 abnormal');
		$(".all_character171").addClass('h y2000 abnormal');
		$(".all_character172").addClass('h y2000 hero');
		$(".all_character173").addClass('h y2000 villain');
		$(".all_character174").addClass('h y2010 villain');
		$(".all_character175").addClass('h x hero');
		$(".all_character176").addClass('h y1900 villain');
		$(".all_character177").addClass('h y2010 villain');
		$(".all_character178").addClass('h y2020 abnormal');
		$(".all_character179").addClass('h x abnormal');
		$(".all_character180").addClass('h y2000 hero');

		var contentHeight = $('#all_character').outerHeight(true);
			
		
		/*if(768<= $(window).width()<=960){			
			$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('1',function(){			
			});
		}else if($(window).width() < 768){
			$("#filtering_box>div>div, #filtering_box>div, #filtering_box>p").slideUp('1',function(){				
			});
			$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('1',function(){			
			});
			$('#controll_filter_reset').offset({bottom:$('#character_controller').offset().top});
		}
		

		$(window).resize(function(){
			if(768<= $(window).width()<=960){
			$("#filtering_box>div>div, #filtering_box>div, #filtering_box>p").slideUp('1',function(){				
			});
			$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('1',function(){			
			});
		}else if($(window).width() < 768){
			$("#filtering_box>div>div, #filtering_box>div, #filtering_box>p").slideUp('50',function(){				
			});
			$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('1',function(){			
			});

			$('#controll_filter_reset').offset({bottom:$('#character_controller').offset().top});
		}

			
			
		});*/
			
		$('#controll_filtering_box, #controll_filtering_box>div, #controll_filtering_box>p').slideToggle('100');
		if($(window).width() <=960){
		$('#filtering_box>div, #filtering_box>p').slideToggle('100');
		}
		$("#filtering_box>div>p").click(function(){
			$(this).parent().children('div').slideToggle('100',function(){			
			});
		});

		$("#filtering_box>h3").click(function(){
			if($(window).width() <=960){
				$("#filtering_box>div, #filtering_box>p").slideToggle('100',function(){			
				});
			}
		});
		
		$('#filtering_box label').bind('click',function(){
			$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");		
		});			
		$('#controll_filtering_box label').bind('click',function(){
				$("#controll_filtering_box label").css("color","#828282");
				$(this).css("color","black");
		});
		$('#filtering_box label').bind('click',function(){	
			if($(window).width() <=960){
				$("#filtering_box>div, #filtering_box>p").slideToggle('100',function(){			
				});
			}
		});		
		

		$('#controll_filtering_box label').bind('click',function(){
				if($(window).width() <=960){
				$("#controll_filtering_box, #controll_filtering_box>div, #controll_filtering_box>p").slideUp('100',function(){			
				});
			}
		});

		$("label[for=controll_filtering]").bind('click',function(){
			$("#controll_filtering_box, #controll_filtering_box>div, #controll_filtering_box>p").slideToggle('100',function(){			
				});
		});

		$(window).resize(function(){
			if($(window).width() <=960){
				$("#filtering_box>div, #filtering_box>p").css('display','none');
			}
		});

		/*
			$('#filtering_box').css('height',contentHeight+351);
			
			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");		
			});			
			
			$('#controll_filtering_box label').bind('click',function(){
				$("#controll_filtering_box label").css("color","#828282");
				$(this).css("color","black");				
			});
		}else if(768<= $(window).width() <=960){
			$('#filtering_box').css('height','auto');
			$('#character_content').css('min-height',780);
			$("#filtering_box>h3").click(function(){				
				
			});

			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");
				$("#filtering_box>div, #filtering_box>p").slideUp('100');
			});
			
			
			$('#controll_filtering_box label').bind('click',function(){
				$("#controll_filtering_box label").css("color","#828282");
				$(this).css("color","black");
				$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('50',function(){			
				});
			});


		}else if($(window).width() < 768){			
			$("#filtering_box>h3").click(function(){
				
				$('#character_content').css('min-height',780);
			});
			
			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");	
				$("#filtering_box>div, #filtering_box>p").slideUp('100');
			});

			$('#controll_filtering_box label').bind('click',function(){
				$("#controll_filtering_box label").css("color","#828282");
				$(this).css("color","black");
				$("#controll_filtering_box, #controll_filtering_box>div, #controll_filter_reset").slideUp('50',function(){			
				});
			});
			
				
		}*/


		

			/*$('#controll_filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");	
				$("#filtering_box>div, #filtering_box>p").slideDown('100');
			});*/
		
		/*$(window).resize(function(){
			if($(window).width() >= 961){
			$('#filtering_box').css('height',contentHeight+351);
			$("#filtering_box>div>p").click(function(){
				$(this).parent().children('div').slideToggle('100',function(){			
				});
			});
			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");		
			});

		}else if(768<= $(window).width() <=960){
			$('#filtering_box').css('height','auto');
			$("#filtering_box>div>p").click(function(){
				$(this).parent().children('div').slideToggle('100',function(){			
				});
			});
			$("#filtering_box>h3").click(function(){
				$(this).parent().children('div, p').slideToggle('200',function(){			
				});
				$('#character_content').css('min-height',780);
			});
			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");
				$("#filtering_box>div, #filtering_box>p").slideUp('100');
			});
		}else if($(window).width() < 768){
			$('#filtering_box').css('height','auto');
			
			$("#filtering_box>div>p").click(function(){
				$(this).parent().children('div').slideToggle('100',function(){			
				});
			});
			$("#filtering_box>h3").click(function(){
				$(this).parent().children('div, p').slideToggle('200',function(){			
				});
				$('#character_content').css('min-height',780);
			});
			
			$('#filtering_box label').bind('click',function(){
				$("#filtering_box label").css("color","#828282");
				$(this).css("color","black");	
				$("#filtering_box>div, #filtering_box>p").slideUp('100');
			});
		}
		
		
		});*/
		


		
		
		var g = $(".g").length;
		var n = $(".n").length;
		var d = $(".d").length;
		var r = $(".r").length;
		var m = $(".m").length;
		var b = $(".b").length;
		var s = $(".s").length;
		var o = $(".o").length;
		var j = $(".j").length;
		var c = $(".c").length;
		var k = $(".k").length;
		var t = $(".t").length;
		var p = $(".p").length;
		var h = $(".h").length;
		var ago = $(".ago").length;
		var y1900 = $(".y1900").length;
		var y2000 = $(".y2000").length;
		var y2010 = $(".y2010").length;
		var y2020 = $(".y2020").length;
		var x = $(".x").length;
		var hero = $(".hero").length;
		var villain = $(".villain").length;
		var abnormal = $(".abnormal").length;

		
		
		$('input[name=filter]' ).change(function(){
			if($('input#name_filter_g').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".g").css('display','block');					
			}	
			if($('input#name_filter_n').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".n").css('display','block');
				
			}	
			if($('input#name_filter_d').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".d").css('display','block');
			}	
			if($('input#name_filter_r').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".r").css('display','block');
			}	
			if($('input#name_filter_m').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".m").css('display','block');
			}	
			if($('input#name_filter_b').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".b").css('display','block');
			}	
			if($('input#name_filter_s').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".s").css('display','block');
			}	
			if($('input#name_filter_o').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".o").css('display','block');
			}
			if($('input#name_filter_j').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".j").css('display','block');
			}	
			if($('input#name_filter_c').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".c").css('display','block');
			}	
			if($('input#name_filter_k').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".k").css('display','block');
			}	
			if($('input#name_filter_t').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".t").css('display','block');
			}	
			if($('input#name_filter_p').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".p").css('display','block');
			}	
			if($('input#name_filter_h').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".h").css('display','block');
			}

			if($('input#time_filter_ago').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".ago").css('display','block');
			}
			if($('input#time_filter_1900').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".y1900").css('display','block');
			}
			if($('input#time_filter_2000').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".y2000").css('display','block');
			}
			if($('input#time_filter_2010').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".y2010").css('display','block');
			}
			if($('input#time_filter_2020').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".y2020").css('display','block');
			}
			if($('input#time_filter_x').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".x").css('display','block');
			}

			if($('input#sort_filter_hero').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".hero").css('display','block');
			}
			if($('input#sort_filter_villain').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".villain").css('display','block');
			}
			if($('input#sort_filter_abnormal').is(":checked")){
				$(".all_character").css('display','none');
				$(".all_character").filter(".abnormal").css('display','block');
			
			}

			
		});

		

		/*$('input#name_filter_g').change(function(){
		 if($('input#name_filter_g').is(":checked")){
		   $(".all_character").hide();
			$(".all_character").filter$(".g").clone().insertBefore("#gagalin");
			$('.g:nth-of-type(-n+'+g+')').show();
			}
		});*/
		

		$('#filter_reset').bind('click',function(){
			location.reload();
			location.href= 'pj2_character.html#all_character';
		 });

		 $('#controll_filter_reset').bind('click',function(){
			location.reload();
			location.href= 'pj2_character.html#all_character';
		 });

	
		$('input[name=character_page]').each(function(index,item){
			$(item).change(function(){
				if($(item).is(':checked')) {
					$(".seleted_page").empty();
					$(".seleted_page").append(index+1);
				}
			});
		});
		
		

	});

/*$('#gagalin').empty();		
			$('#gagalin').append("result : "+$('.all_character').css('display').length);*/
	
		/*for (i=1; i<=8; i++){
		if($("#character_page"+i).prop('checked')=true) {
			$(".seleted_page").empty();
			$(".seleted_page").append(i);
		}*/
		

		

		/*$('.all_character').hide();
				
		for(i=1; i<=8; i++){
		if($("#character_page"+i).is(":checked")){
			$('.all_character:nth-of-type(n+'+(i*25-24)+'):nth-of-type(-n+'+(i*25)+')').show();
			}			
		}*/



	/*if($('input#character_page1').prop('checked',true)){
			$(".all_character:nth-of-type(n+1):nth-of-type(-n+25)").show();
			}

		if($('input#character_page3').prop('checked',true)){
			$(".all_character:nth-of-type(n+51):nth-of-type(-n+75)").show();
			}
		
		if($('input#character_page4').prop('checked',true)){
			$(".all_character:nth-of-type(n+76):nth-of-type(-n+100)").show();
			}
		
		if($('input#character_page5').prop('checked',true)){
			$(".all_character:nth-of-type(n+101):nth-of-type(-n+125)").show();
			}
		
		if($('input#character_page6').prop('checked',true)){
			$(".all_character:nth-of-type(n+126):nth-of-type(-n+150)").show();
			}
		
		if($('input#character_page7').prop('checked',true)){
			$(".all_character:nth-of-type(n+151):nth-of-type(-n+175)").show();
			}
		
		if($('input#character_page8').prop('checked',true)){
			$(".all_character:nth-of-type(n+176):nth-of-type(-n+200)").show();
			}*/