
document.getElementById("popup-header-button_managment").addEventListener('click', () => {
    managment.classList.add("activePage");
    settings.classList.remove("activePage");
    customization.classList.remove("activePage");
    setup.classList.remove("activePage");
    credits.classList.remove("activePage");
    MainBody.classList.add("activetitle");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_setup").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById("popup-header-button_setup").addEventListener('click', () => {
    managment.classList.remove("activePage");
    settings.classList.remove("activePage");
    customization.classList.remove("activePage");
    setup.classList.add("activePage");
    credits.classList.remove("activePage");
    MainBody.classList.remove("activetitle");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_setup").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById("popup-header-button_settings").addEventListener('click', () => {
    settings.classList.add("activePage");
    managment.classList.remove("activePage");
    customization.classList.remove("activePage");
    setup.classList.remove("activePage");
    credits.classList.remove("activePage");
    MainBody.classList.remove("activetitle");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_setup").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('popup-header-button_customization').addEventListener('click', () => {
    settings.classList.remove("activePage");
    managment.classList.remove("activePage");
    customization.classList.add("activePage");
    setup.classList.remove("activePage");
    credits.classList.remove("activePage");
    MainBody.classList.remove("activetitle");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_setup").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('popup-header-button_credits').addEventListener('click', () => {
    settings.classList.remove("activePage");
    managment.classList.remove("activePage");
    customization.classList.remove("activePage");
    setup.classList.remove("activePage");
    credits.classList.add("activePage");
    MainBody.classList.remove("activetitle");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_setup").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "block";
});

function titleANIMATION() {
    MainBody.classList.add("activetitle");
}
titleANIMATION();