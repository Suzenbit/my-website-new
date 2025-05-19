/* ---- Mobile menu toggle ---- */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

/* ---- Auto‑fill current year in footer ---- */
document.getElementById("year").textContent = new Date().getFullYear();
