"use strict";

const isMobile = document.documentElement.clientWidth < 768;
const anchors = document.querySelectorAll(".nav-bar__nav-link--anchor");
const acc = document.querySelector(".accordion");
const categotiesBtns = document.querySelectorAll(".categories__link");
const servicesLists = document.querySelectorAll(".services__category-item");
const panel = document.querySelector(".panel");

(function () {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const foterLinks = document.querySelector(".footer__links-list");
  const senseComand = document.querySelector(".sense-comand");

  senseComand.style.width = foterLinks.offsetWidth + "px";
  if (isMobile) {
    acc.querySelector("span").textContent = "Перелік послуг";
  }
  hero.style.height = `${
    document.documentElement.clientHeight - header.offsetHeight
  }px`;
  window.addEventListener("resize", () => {
    hero.style.height = `${
      document.documentElement.clientHeight - header.offsetHeight
    }px`;
  });
})();

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

acc.addEventListener("click", accordionHandler);

function accordionHandler(handler) {
  /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

  acc.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  if (panel.style.maxHeight) {
    if (handler === "open") return;
    panel.style.maxHeight = null;
    acc.querySelector("span").textContent = isMobile
      ? "Перелік послуг"
      : "Тицяй, щоб побачити перелік послуг";
    acc.querySelector("svg").style.transform = "rotate(0deg)";
  } else {
    if (handler === "close") return;
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    acc.querySelector("span").textContent = isMobile
      ? "Перелік послуг"
      : "Тицяй, щоб сховати перелік послуг";
    acc.querySelector("svg").style.transform = "rotate(180deg)";
  }
}

categotiesBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const isThisActive = this.classList.contains("active");

    categotiesBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    let currentCategory = "";

    if (isThisActive) {
      this.classList.remove("active");
      //remove focus
      this.blur();
      //remove touch focus

      currentCategory = "";
    } else {
      this.classList.add("active");
      currentCategory = this.dataset.category;
      accordionHandler("open");
      panel.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    const listsParent = document.querySelector(".services__wrap");
    servicesLists.forEach((list) => {
      if (currentCategory === "") {
        listsParent.style.removeProperty("justify-content");
        list.removeAttribute("style");
        list.classList.remove("visually-hidden");
        return;
      } else {
        listsParent.style.justifyContent = "center";
        list.style.alignItems = "center";
      }
      if (list.dataset.services === currentCategory) {
        list.classList.remove("visually-hidden");
      } else {
        list.classList.add("visually-hidden");
      }
    });
  });
});
