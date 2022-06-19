"use strict";

const selectElement = function (nameElement) {
  return document.querySelector(nameElement);
};

//
const items = {
  section1: selectElement(".section-1"),
  section2: selectElement(".section-2"),
  link1: selectElement(".link-1"),
  link2: selectElement(".link-2"),
};

//

const addClass = function (nameElement, nameClass) {
  nameElement.classList.add(nameClass);
};
const removeClass = function (nameElement, nameClass) {
  nameElement.classList.remove(nameClass);
};

// setup
addClass(items.section2, "hide");
addClass(items.link1, "active-selector");

//

items.link1.addEventListener("click", function () {
  addClass(items.link1, "active-selector");
  removeClass(items.link2, "active-selector");

  addClass(items.section2, "hide");
  removeClass(items.section1, "hide");
});
items.link2.addEventListener("click", function () {
  addClass(items.link2, "active-selector");
  removeClass(items.link1, "active-selector");

  addClass(items.section1, "hide");
  removeClass(items.section2, "hide");
});
