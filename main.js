document.addEventListener('mousemove', function (event) {
    const leftX = 0;
    const cursorX = event.clientX;
    const translateX = (cursorX - leftX) / 15;

    document.documentElement.style.setProperty('--translateX', -translateX + 100 + 'px');
});