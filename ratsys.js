const YTC = 'YTC';

const el = document.querySelector('.summarycaption');
if (el) {
  el.textContent = el.textContent.replace('Rating system: PY', `Rating system: ${YTC}`);
}
