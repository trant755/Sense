"use strict";
(function () {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const foterLinks = document.querySelector(".footer__links-list");
  const senseComand = document.querySelector(".sense-comand");
  console.log(foterLinks);
  senseComand.style.width = foterLinks.offsetWidth + "px";

  hero.style.height = `${window.innerHeight - header.offsetHeight}px`;
  window.addEventListener("resize", () => {
    hero.style.height = `${window.innerHeight - header.offsetHeight}px`;
  });
})();

const acc = document.querySelector(".accordion");

acc.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
  this.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  const panel = document.querySelector(".panel");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    acc.querySelector("span").textContent =
      "Тицяй, щоб побачити перелік послуг";
    acc.querySelector("svg").style.transform = "rotate(0deg)";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    window.scrollTo(0, panel.offsetTop);
    acc.querySelector("span").textContent = "Тицяй, щоб сховати перелік послуг";
    acc.querySelector("svg").style.transform = "rotate(180deg)";
  }
});
