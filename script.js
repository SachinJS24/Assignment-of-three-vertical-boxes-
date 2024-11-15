document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box, .box-second, .box-third");

  boxes.forEach((box) => {
    // Set initial height and overflow
    box.style.height = "80px";
    box.style.overflow = "hidden";
    box.style.transition = "height 0.3s ease, background-color 0.3s ease";

    // Hover effect: increase height and change background color
    box.addEventListener("mouseenter", () => {
      box.style.height = "200px"; // Expand height on hover
    });

    // Mouse leave: shrink height back and revert background color
    box.addEventListener("mouseleave", () => {
      box.style.height = "80px"; // Shrink height
    });

    // Click event: check the checkbox inside the box
    box.addEventListener("click", () => {
      const checkbox = box.querySelector(".checkbox-round");
      if (checkbox) {
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
      }
    });
  });
});

