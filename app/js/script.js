const hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", function () {
  console.log("open hamburger");

  if (hamburgerBtn.classList.contains("open")) {
    hamburgerBtn.classList.remove("open");
  } else {
    hamburgerBtn.classList.add('open');
  }
});