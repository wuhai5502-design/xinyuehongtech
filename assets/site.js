(function () {
  var c = document.getElementById("bannerCarousel");
  if (c) {
    var s = c.querySelectorAll(".banner-slide");
    var d = c.querySelectorAll(".banner-dot");
    var i = 0;
    var timer = null;
    var delay = parseInt(c.getAttribute("data-interval"), 10);
    if (!delay || delay < 1000) delay = 3000;

    function show(k) {
      if (!s.length) return;
      var next = ((k % s.length) + s.length) % s.length;
      for (var x = 0; x < s.length; x++) {
        if (x === next) s[x].classList.add("is-active");
        else s[x].classList.remove("is-active");
      }
      for (var y = 0; y < d.length; y++) {
        if (y === next) d[y].classList.add("is-active");
        else d[y].classList.remove("is-active");
      }
      i = next;
    }

    function stop() {
      if (timer) { clearTimeout(timer); timer = null; }
    }

    function schedule() {
      stop();
      timer = setTimeout(function () {
        show(i + 1);
        schedule();
      }, delay);
    }

    for (var k = 0; k < d.length; k++) {
      (function (idx) {
        d[idx].addEventListener("click", function () { show(idx); schedule(); });
      })(k);
    }

    c.addEventListener("mouseenter", stop);
    c.addEventListener("mouseleave", schedule);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else schedule();
    });

    show(0);
    if (s.length > 1) schedule();
  }
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
