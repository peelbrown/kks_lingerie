// ОТКЛЮЧИТЬ SCALE НА IOS. РАБОТАЕТ ЕСЛИ ТОЛЬКО НАЧАТЬ СКРОЛИТЬ.
document.addEventListener('touchmove', function (event) {
	if (event.scale !== 1) {
		event.preventDefault();
	}
}, {
	passive: false
});

document.querySelector(".burger").addEventListener("click", function () {
	let active = this.classList.toggle("burger--active");
	if(active) {
		document.querySelector(".nav__items").style.display = "block"
	} else {
		document.querySelector(".nav__items").style.display = "none"
	}
});