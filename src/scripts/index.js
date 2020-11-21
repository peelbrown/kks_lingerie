// ОТКЛЮЧИТЬ SCALE НА IOS. РАБОТАЕТ ЕСЛИ ТОЛЬКО НАЧАТЬ СКРОЛИТЬ.
document.addEventListener('touchmove', function (event) {
	if (event.scale !== 1) { event.preventDefault(); }
  }, { passive: false });