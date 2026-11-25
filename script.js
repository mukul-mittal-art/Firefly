const body = document.body;


window.addEventListener('mousemove', (e) => {
  body.style.setProperty('--x', `${e.clientX}px`);
  body.style.setProperty('--y', `${e.clientY}px`);
});

window.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  body.style.setProperty('--x', `${touch.clientX}px`);
  body.style.setProperty('--y', `${touch.clientY}px`);
});