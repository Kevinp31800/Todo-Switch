function todoList(){

	var item = document.getElementById("todoInput").value;

	var newItem = document.createElement("li");

	newItem.innerHTML = "<input type='checkbox' id='cbox2' value='checkbox1' name='test'><span>" + item.toString() + "</span><label for='cbox2'>"

	document