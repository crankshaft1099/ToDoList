//strikethrough
$("ul").on("click", function(){
	$(this).toggleClass("completed");
})
//delete ToDo 
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//new ToDo
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var string = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ string+ "</li>");
		$(this).val("");
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})