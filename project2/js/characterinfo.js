$(document).ready(function(){
	$('.connect').hide();
	

	if($('input#companion:checked')){
		$('input#enemy').prop("checked",false);
		$('input#team').prop("checked",false);
		$('.connect').hide();
		$('.companion').show();
	}
	
	$('label[for="companion"]').on("click",function(){
		$('.connect').hide();
		$('.companion').show();
	});
	
	$('label[for="enemy"]').on("click",function(){
		$('.connect').hide();
		$('.enemy').show();
	});
	
	$('label[for="team"]').on("click",function(){
		$('.connect').hide();
		$('.team').show();
	});
	$('#focusing_banner').css({
		'overflow':'hidden'
	});

			 





});