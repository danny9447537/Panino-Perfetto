"use strict";

/* Preload */
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});

/* Adding an event listener on multiple elements */

const addEventOnAllElements = function (elements, eventType, callback) {
  len = elements.length;
  let i;
  for (i = 0; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/* Navbar */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
