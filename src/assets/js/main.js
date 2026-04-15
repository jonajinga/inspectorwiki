// Back-to-top button
(function () {
  var btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "&uarr;";
  document.body.appendChild(btn);

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 600);
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// Reading progress bar
(function () {
  var bar = document.querySelector(".reading-progress");
  if (!bar) return;

  var prose = document.querySelector(".prose");
  if (!prose) return;

  function update() {
    var rect = prose.getBoundingClientRect();
    var total = prose.offsetHeight - window.innerHeight;
    var scrolled = -rect.top;
    var pct = Math.min(Math.max(scrolled / total, 0), 1) * 100;
    bar.style.width = pct + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// Table of contents (auto-generated from h2/h3 headings)
(function () {
  var tocNav = document.getElementById("toc-nav");
  if (!tocNav) return;

  var prose = document.querySelector(".prose");
  if (!prose) return;

  var headings = prose.querySelectorAll("h2[id], h3[id]");
  if (headings.length < 2) {
    tocNav.style.display = "none";
    return;
  }

  var ul = document.createElement("ul");
  ul.className = "toc-list";

  headings.forEach(function (h) {
    var li = document.createElement("li");
    li.className = "toc-list__item" + (h.tagName === "H3" ? " toc-list__item--nested" : "");
    var a = document.createElement("a");
    a.className = "toc-list__link";
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });

  tocNav.appendChild(ul);

  // Scroll-spy via IntersectionObserver
  var links = tocNav.querySelectorAll(".toc-list__link");
  var headingMap = {};
  links.forEach(function (link) {
    headingMap[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          var active = headingMap[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
  );

  headings.forEach(function (h) { observer.observe(h); });
})();

// Copy link button
(function () {
  var btn = document.getElementById("share-copy");
  if (!btn) return;

  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
      var orig = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = orig; }, 1500);
    });
  });
})();
