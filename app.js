/* Scroll-Arrow*/
/*Used this article for inspiration and guidance: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver */
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".scroll-arrow");
  if (!arrow) return;

  const updateArrow = () => {
    const atBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 100;

    arrow.classList.toggle("up", atBottom);
  };

  window.addEventListener("scroll", updateArrow, { passive: true });
  updateArrow();
});
