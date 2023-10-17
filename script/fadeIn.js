document.addEventListener("DOMContentLoaded", function () {
  const fadeIn = document.querySelectorAll(".fadeIn");
  function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fadeInOnScroll() {
    if (isVisible(fadeIn)) {
      fadeIn.style.opacity = 1;
      window.removeEventListener("scroll", fadeInOnScroll);
    }
  }
});
