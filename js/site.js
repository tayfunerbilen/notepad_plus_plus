$(function(){

	/**
		Tayfun Erbilen
		http://erbilen.net
		erbilen@outlook.com
	**/

	/** İçerik Css Height **/
	$.getHeight = function(){
		var height = ($(window).height()) - 200;
		if (height > 99){
			$("#icerik").css("height", height + "px");
		}
	}
	
	$(window).resize(function(){
		$.getHeight();
	});
	
	$.getHeight();
	
	/** Artir - Azalt **/
	$(".konu h4 span").click(function(){
		$(this).toggleClass("artir");
		$(this).parent().next(".konu_ic").toggle();
	});
	
	/** Box **/
	$("#box").draggable();
	$(".box_title span").click(function(){
		$("#box").hide();
	});
	
	/** Yorumlar **/
	$(".yorumIkon a").click(function(){
		$("#box").fadeIn(250);
		return false;
	});

});