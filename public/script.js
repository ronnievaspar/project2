const activePage = window.location.pathname;
const navlinks = document.querySelectorAll(".navlinks");

navlinks.forEach((links) => {
  if (links.href.includes(`${activePage}`)) {
    links.classList.add("active");
  }
});

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
