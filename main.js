const menu = document.getElementById('mobile-menu');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menuItemsMobile = document.querySelectorAll('.mobile-menu-item');
const arrowIconMobile = document.querySelectorAll('#arrow-icon-mobile');
const navItemsDesktop = document.querySelectorAll('#desktop-nav-item');
const subMenuDesktop = document.querySelectorAll('#desktop-sub-menu');

// console.log(subMenuDesktop);

const handleClickMenuOpen = () => {
	menu.removeAttribute('hidden');
	open.setAttribute('hidden', true);
	close.removeAttribute('hidden');
};

// mobile event handlers
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
	let hidden = e.currentTarget.nextElementSibling.hasAttribute('hidden');
	if (hidden) {
		e.currentTarget.nextElementSibling.removeAttribute('hidden');
		e.currentTarget.children[1].classList.add('rotated');
	} else {
		e.currentTarget.nextElementSibling.setAttribute('hidden', true);
		e.currentTarget.children[1].classList.remove('rotated');
	}
};

// desktop event handlers
const handleNavItemMouseover = (e) => {
	e.currentTarget.children[2].removeAttribute('hidden');
};

const handleSubMenuMouseout = (e) => {
	e.currentTarget.setAttribute('hidden', true);
};

// mobile event listeners
open.addEventListener('click', handleClickMenuOpen);
close.addEventListener('click', handleClickMenuClose);
menuItemsMobile.forEach((item) =>
	item.addEventListener('click', handleClickSubMenu)
);

// desktop event listeners
navItemsDesktop.forEach((item) => {
	item.addEventListener('mouseover', handleNavItemMouseover);
});
subMenuDesktop.forEach((menu) => {
	menu.addEventListener('mouseout', handleSubMenuMouseout);
});
