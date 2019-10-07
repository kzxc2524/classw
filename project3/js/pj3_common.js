$(document).ready(function(){
	$('#gnb_box').css({
				'height':$(window).height(),
				'width':$(window).height()/4+40		
			})
	
	$('#gnb_box>ul>li>a').css('line-height',$('#gnb_box>ul>li>a').height()+'px');
	
	$('input[type=submit]').click(function(e){
		e.preventDefault();		
	});
	$('a').click(function(e){
		e.preventDefault();		
	});
	$(".unprevent").unbind();

	$(window).resize(function(){
		$('#gnb_box').css({
				'height':$(window).height(),
				'width':$(window).height()/4+40	
			})
			$('#gnb_box>ul>li>a').css('line-height',$('#gnb_box>ul>li>a').height()+'px');
		});
		
		$('#gnb_bnt').change(function(){
			if($(this).is(':checked')){
				$('#g_search_bnt').prop('checked',false);
				$('#langs ol').slideUp();
			}
		});


	 $('#langs ol').css({'opacity':0}).slideUp();
		
		$('#langs').on('click',function(){
			$('#langs ol').css({'opacity':1}).slideToggle();
		});

		$('#langs ol>li').on('click',function(){
			$('#langs label').empty();
			$(this).find('a').clone().appendTo($('#header_buttons>li:nth-child(2)>label'));
		});

});