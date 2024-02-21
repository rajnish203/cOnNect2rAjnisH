const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme-color", themeBtn.innerText);
    themeBtn.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
})