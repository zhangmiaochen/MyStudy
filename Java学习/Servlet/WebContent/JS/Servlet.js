$(function(){
	$(".post").click(function(){
		location.href="HelloWorld";
		$.ajax({
			url:"HelloWorld",
			type:"post",
			data:{
				"name":"zmc",
				"sex":"男"
			},
			success:function(res){
				
			},
			error:function(msg){
				
			}
		});
	});
});