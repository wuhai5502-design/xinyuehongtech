(function () {
  var c = document.getElementById("bannerCarousel");
  if (c) {
    var s = c.querySelectorAll(".banner-slide");
    var d = c.querySelectorAll(".banner-dot");
    var i = 0;
    var t = null;
    var n = parseInt(c.getAttribute("data-interval"), 10) || 6000;
    function go(k) {
      if (!s.length) return;
      s[i].classList.remove("is-active");
      if (d[i]) d[i].classList.remove("is-active");
      i = (k + s.length) % s.length;
      s[i].classList.add("is-active");
      if (d[i]) d[i].classList.add("is-active");
    }
    function stop() { if (t) { clearInterval(t); t = null; } }
    function play() { stop(); t = setInterval(function () { go(i + 1); }, n); }
    [].forEach.call(d, function (el, k) {
      el.addEventListener("click", function () { go(k); play(); });
    });
    c.addEventListener("mouseenter", stop);
    c.addEventListener("mouseleave", play);
    if (s.length > 1) play();
  }
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
