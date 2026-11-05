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

// Click a paper figure to see it full size.
(function () {
  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  document.body.appendChild(dlg);
  dlg.addEventListener('click', function () { dlg.close(); });
  document.querySelectorAll('.thumb.fig').forEach(function (fig) {
    fig.tabIndex = 0;
    fig.setAttribute('aria-label', 'Enlarge figure');
    function open() {
      dlg.innerHTML = '';
      var wrap = document.createElement('div');
      wrap.className = fig.classList.contains('wide') ? 'fig wide' : 'fig';
      wrap.appendChild(fig.querySelector('svg').cloneNode(true));
      dlg.appendChild(wrap);
      if (dlg.showModal) dlg.showModal();
    }
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
})();
