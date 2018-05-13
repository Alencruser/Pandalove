$(':button').click(function (){
	var x = $(this).attr('data-type');
	var y = $(this).attr('data-tendance');
	if ($(this).attr('data-type')!=null){
	console.log(x +' '+ y);
	alert(x+' '+y);
}
	if($(this).attr('data-type')==null){
		console.log('WHAT DA FOK');
	$('body').css('background-image','url(https://i.ytimg.com/vi/8kBurd4ce0A/maxresdefault.jpg)');
	alert('You just get trolled :D');
	}
})