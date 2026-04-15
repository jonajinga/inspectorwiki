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
