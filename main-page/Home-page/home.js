function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

// Function to open the sidebar
function openSidebar() {
  document.getElementById("sidebar").style.left = "unset"; // Remove left positioning
  document.getElementById("sidebar").style.right = "0"; // Move sidebar to the right
}

function closeSidebar() {
  document.getElementById("sidebar").style.right = "-250px"; // Hide sidebar to the right
  document.querySelector(".content").style.marginRight = "0"; // Restore main content position
}
const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
