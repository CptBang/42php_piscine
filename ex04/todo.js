$(document).ready(function(){
	var xhttp = new XMLHttpRequest();
	var cookies = document.cookie;
	console.log(cookies);
	if (cookies) {
		var crumbs = cookies.split(';');
		crumbs.forEach(addCookie);
	}
	$('#add').click(function(){
		add();
	});
});

function addCookie(crumb) {
	var todo = crumb.split('=');
	var list = $('#ft_list');
	list.prepend($("<div>" + todo[0] + "</div>").click(remove));
	document.cookie = todo[0];
}

function add() {
	var todo = prompt("TODO");
	var list = $('#ft_list');
	if (todo != "") {
		list.prepend($("<div>" + todo + "</div>").click(remove));
	}
	//php function

}

function remove() {
	if (confirm("Are you sure you want to remove this?")) {
		var cook = $(this).html();
		$(this).remove();
	}
}
