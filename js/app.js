$(document).ready(function(){

	$('#add').click(function(){

		var tache = $("#todoList").val()
		console.log(tache);
		$("#todoList2").append($("<li>"+tache+"</li>"));

	});

	$('#remove').click(function(){
		$("#todoList2").parent().remove();  
	});
});