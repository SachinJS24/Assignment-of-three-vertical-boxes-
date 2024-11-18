document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {

    // Click event: check the checkbox inside the box
    box.addEventListener("click", () => {
      const checkbox = box.querySelector(".checkbox-round");
      if (checkbox) {
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
      }
    });
  });
});

