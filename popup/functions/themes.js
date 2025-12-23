
themer.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("Themer", true);
        document.body.classList.remove("light");
    } else {
        localStorage.setItem("Themer", false);
        document.body.classList.add("light");
    }
});