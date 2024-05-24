
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const arrowIcon = menuBtn.querySelector(".bxs-down-arrow");

  menuBtn.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");

    if (menuOverlay.classList.contains("active")) {
      // Slide down the overlay
      menuOverlay.style.display = "block";
      menuOverlay.style.transition = "transform 0.5s ease";
      menuOverlay.style.transform = "translateY(0)";

      // Change menu icon to upward arrow
      arrowIcon.classList.add("bxs-up-arrow");
      arrowIcon.classList.remove("bxs-down-arrow");

      // Change text color to white
    //   menuBtn.style.color = "white";
    } else {
      // Slide up the overlay
      menuOverlay.style.transition = "transform 0.5s ease";
      menuOverlay.style.transform = "translateY(-100%)";

      // Change menu icon to downward arrow
      arrowIcon.classList.add("bxs-down-arrow");
      arrowIcon.classList.remove("bxs-up-arrow");

      // Change text color to black
      menuBtn.style.color = "black";

      // Hide overlay after transition
      //   setTimeout(() => {
      //     menuOverlay.style.display = "none";
      //   }, 500);
    }
  });
});
