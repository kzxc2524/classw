

$(document).ready(function(){
	var categoryHeight1 = $("#shop_content h2").height();
	var categoryHeight2 = $("#shop_content #category_box").height();
	var categoryHeight3 = $("#shop_content #all_goods .goods").outerHeight();
	
	$("#all_goods").height(
		3*categoryHeight3+20
	);

	$(".ss a").each(function(i,item){
		$(item).before('<input type="checkbox" name="add_likes'+i+'" id="add_likes'+i+'"><label for="add_likes'+i+'"></label>');
	});

	
	$('.goods').hide();

	if('#for=category_all:checked'){
	
		$('.goods').show();
	}

	$('label[for=category_all]').click(function(){
	
	    $('.goods').show();	
		});

	$('label[for=category_cup]').click(function(){
	
		$('.goods').hide();
	    $('.goods.mg').show();	
		});
	$('label[for=category_tshirts]').click(function(){
	
		$('.goods').hide();
	    $('.goods.ts').show();	
		});
	$('label[for=category_note]').click(function(){

		$('.goods').hide();
	    $('.goods.nt').show();	
		});
	$('label[for=category_cardholder]').click(function(){

		$('.goods').hide();
	    $('.goods.ch').show();	
		});
	$('label[for=category_electro]').click(function(){

		$('.goods').hide();
	    $('.goods.mp').show();	
		});
	$('label[for=category_blind]').click(function(){

		$('.goods').hide();
	    $('.goods.bd').show();	
		});
	$('label[for=category_alined]').click(function(){

		$('.goods').hide();
	    $('.goods.cd').show();	
		});

	

	
	$(".ss label").bind("click",function(){
			$(".seleted_likes").empty();
			$(".seleted_likes").append($(".ss input").length-$(".ss input:not(:checked)").length+1);
		});
	
	$("#likes_select").bind("click",function(){
			
			alert($(".ss input").length-$(".ss input:not(:checked)").length + "개 상품이 장바구니에 추가됐습니다 ^^");
			$(".ss input").prop("checked",false);
			$(".seleted_likes").empty();
			$(".seleted_likes").append($(".ss input(:checked)").length+0);
	});
		


	$('#controll_category_box, #controll_category_box li').slideUp('1');

		$('label[for="controll_category"]').click(function(){
			$('#controll_category_box, #controll_category_box li').slideToggle('100',function(){			
			});
		});
		
		$('#controll_category_box label').bind('click',function(){
			$('#controll_category_box label').css("color","white");
			$(this).css("color","black");		
		});
	



});