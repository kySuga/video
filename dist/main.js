"use strict";
const btn = document.querySelector(".switch-btn");
const vidContainer = document.querySelector(".video__container");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        vidContainer === null || vidContainer === void 0 ? void 0 : vidContainer.pause();
    }
    else {
        btn.classList.remove("slide");
        vidContainer === null || vidContainer === void 0 ? void 0 : vidContainer.play();
    }
});
// preloader
// const preloader = document.querySelector(".preloader");
// window.addEventListener("load", () => {
//   preloader?.classList.add("preloader__hide");
// });
//# sourceMappingURL=main.js.map