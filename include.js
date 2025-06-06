// include.js
function includeHTML(selector, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const element = document.querySelector(selector);
      if (element) element.innerHTML = data;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header", "parts/header.html");
  includeHTML("#sidebar", "parts/sidebar.html");
  includeHTML("#footer", "parts/footer.html");
});
