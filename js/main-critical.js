// Injection header/footer + gestion icons Lucide
document.addEventListener("DOMContentLoaded", function () {
  // HEADER
  fetch("/parts/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      if (window.lucide && window.lucide.createIcons) lucide.createIcons();
    });
  // FOOTER
  fetch("/parts/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      if (window.lucide && window.lucide.createIcons) lucide.createIcons();
    });
});
