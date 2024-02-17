const btn: Element | null = document.querySelector(".switch-btn");
const vidContainer = document.querySelector(".video__container") as HTMLVideoElement | null;

btn?.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vidContainer?.pause();
  } else {
    btn.classList.remove("slide");
    vidContainer?.play();
  }
});

// preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", () => {
//   preloader?.classList.add("preloader__hide");
// });
