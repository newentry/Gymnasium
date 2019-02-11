var $html = document.getElementsByTagName('html');

function myFunction() {

	var buttonToggle = document.getElementById('button');

	buttonToggle.classList.toggle('menu-btn--left');

	var list = document.getElementById('list');

	list.classList.toggle('hidden');

	var menu_close = document.getElementById('menu-close');

	menu_close.classList.toggle('menu-close');

}









