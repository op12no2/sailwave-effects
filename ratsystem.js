const RAT = 'YTC';

function fixRating() {
  const el = document.querySelector('.summarycaption');
  if (el) {
    el.textContent = el.textContent.replace('Rating system: PY', 'Rating system: ' + RAT);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixRating);
}
else {
  fixRating();
}
