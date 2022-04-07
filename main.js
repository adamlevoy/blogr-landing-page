const menu = document.getElementById('mobile-menu');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menuItemsMobile = document.querySelectorAll('.mobile-menu-item');
const arrowIconMobile = document.querySelectorAll('#arrow-icon-mobile');

const handleClickMenuOpen = () => {
	menu.removeAttribute('hidden');
	open.setAttribute('hidden', true);
	close.removeAttribute('hidden');
};

const handleClickMenuClose = () => {
	menu.setAttribute('hidden', true);
	close.setAttribute('hidden', true);
	open.removeAttribute('hidden');

	menuItemsMobile.forEach((item) => {
		item.nextElementSibling.setAttribute('hidden', true);
		item.children[1].classList.remove('rotated');
	});
};

const handleClickSubMenu = (e) => {
	console.log(e.currentTarget.children[1]);
	let hidden = e.currentTarget.nextElementSibling.hasAttribute('hidden');
	if (hidden) {
		e.currentTarget.nextElementSibling.removeAttribute('hidden');
		e.currentTarget.children[1].classList.add('rotated');
	} else {
		e.currentTarget.nextElementSibling.setAttribute('hidden', true);
		e.currentTarget.children[1].classList.remove('rotated');
	}
};

open.addEventListener('click', handleClickMenuOpen);
close.addEventListener('click', handleClickMenuClose);
menuItemsMobile.forEach((item) =>
	item.addEventListener('click', handleClickSubMenu)
);
