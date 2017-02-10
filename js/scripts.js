// plik scripts.js

var list = document.getElementById('list'),
	buttonElem = document.getElementById('addElem');

	
buttonElem.addEventListener('click', function() {
	var li = document.createElement("li");
	var children = list.children.length + 1;
	li.appendChild(document.createTextNode("item " + children));
  	list.appendChild(li);
});

