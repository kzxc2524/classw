$(document).ready(function(){
	$(".newscard img").each(function(i,item){
		var imgheight = $(item).height();
		$(item).parent().parent().parent().height(imgheight);
		$(item).parent().next().height(imgheight);
	});

	$("#main_forth_section img").each(function(i,item){
		var imgHeight = $(item).height();
		$(item).parent().parent().parent().parent().parent().height(imgHeight);
	});

	$("#select_character img").each(function(i,item){
		var ImgHeight = $(item).height();
		$(item).parent().parent().height(ImgHeight);
	});

	$(window).resize(function(){
	
		$(".newscard img").each(function(i,item){
		var imgheight = $(item).height();
		$(item).parent().parent().parent().height(imgheight);
		$(item).parent().next().height(imgheight);
		});

		$("#main_forth_section img").each(function(i,item){
		var imgHeight = $(item).height();
		$(item).parent().parent().parent().parent().parent().height(imgHeight);
		});

		$("#select_character img").each(function(i,item){
		var ImgHeight = $(item).height();
		$(item).parent().parent().height(ImgHeight);
		});
	});	
	
	$("#main_second_section ul>li>a").mouseout(function(){
		$("#main_second_section>hr").css(
		{
			'width':'1%',
			'background':'rgba(255,255,255,0)'
		}	
		);
	});
	$("#main_second_section ul>li>a").each(function(i,item){
		$(item).bind('click mouseover hover',function(){
			var aLeft = $(item).offset().left;
			var aMid = $(item).width()/2;

			$("#main_second_section>hr:nth-of-type(1)").css(
			{
				'width':aLeft+aMid,
				'background':'rgba(255,255,255,0.5)'
			}	
			);
			$("#main_second_section>hr:nth-of-type(2)").css(
			{
				'width':'100%',
				'background':'rgba(255,255,255,0.3)'
			}
			);
		});
	});
});
//var imgheight = this.naturalheight; 이미지 크키가 정해져 있지 않을때
//$(this).load(function(){ 이미지를 다 불러온후 확인하기 위해});