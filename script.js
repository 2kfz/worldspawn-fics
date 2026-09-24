const button = document.getElementById("nextButton");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");

button.addEventListener("click", () => {
    pic1.classList.add("leave");
    pic2.classList.add("enter");
});
