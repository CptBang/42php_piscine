$(document).ready(function(){
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
	list.append($("<div>" + todo[0] + "</div>").click(remove));
}

function add() {
	var todo = prompt("TODO");
	var list = $('#ft_list');
	if (todo != "") {
		list.prepend($("<div>" + todo + "</div>").click(remove));
		document.cookie = todo;
	}
}

function remove() {
	if (confirm("Are you sure you want to remove this?")) {
		var cook = $(this).html();
		document.cookie = cook + "= ; expires= Thu, 21 Aug 2014 20:00:00 UTC"
		$(this).remove();
	}
}
