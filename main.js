// Abstract toggles: each "Abstract" button expands the paper row below it.
document.querySelectorAll('.paper').forEach(function (paper) {
  var btn = paper.querySelector('.abs-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = paper.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
