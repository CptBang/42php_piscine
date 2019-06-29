window.onload = function() {
	var cookies = document.cookie;
	console.log(document.cookie);
	if (cookies) {
		var crumbs = cookies.split(';');
		console.log(crumbs);
		crumbs.forEach(addCookie);
	}
}

function addCookie(crumb) {
	var div = document.createElement("div");
	var list = document.getElementById("ft_list");
	var todo = crumb.split('=');
	div.innerHTML = todo[0];
	div.onclick = remove;
	if (list.childElementCount != 1) {
		list.appendChild(div);
	}
	else {
		list.insertBefore(div, list.children[1]);
	}
}

function add() {
	var todo = prompt("TODO");
	var div = document.createElement("div");
	var list = document.getElementById("ft_list");
	//if (todo != "")
	if (todo != "") {
		div.innerHTML = todo;
		div.onclick = remove;
		if (list.childElementCount != 1) {
			list.insertBefore(div, list.children[1]);
		}
		else {
			list.appendChild(div);
		}
		document.cookie = todo;
	}
}

function remove() {
	if (confirm("Are you sure you want to remove this?")) {
		document.cookie = this.innerHTML + "= ; expires= Thu, 21 Aug 2014 20:00:00 UTC"
		this.parentElement.removeChild(this);
	}
}
