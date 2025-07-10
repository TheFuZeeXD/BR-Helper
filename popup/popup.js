document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('extensionToggle');
    const backgroundURL = document.querySelector("#backgroundURL-Toggle");
    const backgroundURLtext = document.querySelector("#backgroundURL");

    if (localStorage.getItem("BackgroundURLbutton") == "true") {
        backgroundURLtext.classList.add("backgroundURL-Checked");
    }
    // Загружаем сохраненное состояние
    chrome.storage.sync.get(['enabled'], function (result) {
        toggle.checked = result.enabled !== false;
    });

    // Сохраняем состояние при изменении
    toggle.addEventListener('change', function () {
        chrome.storage.sync.set({ enabled: this.checked });
    });

    chrome.storage.sync.get(['disabled'], function (result) {
        backgroundURL.checked = result.disabled !== false;
    });

    // Сохраняем состояние при изменении
    backgroundURL.addEventListener('change', function () {
        chrome.storage.sync.set({ disabled: this.checked });
    });
});

const username = document.querySelector('#NickName');
const rank = document.querySelector("#Rank");
const myrules = document.querySelector("#rules");
const check = document.querySelector("#extensionToggle");
const backgroundURL = document.querySelector("#backgroundURL-Toggle");
const MainBody = document.querySelector("#TitleText");
const backgroundURLtext = document.querySelector("#backgroundURL");
const HouseMember = document.querySelector("#Screen-Chrome-Exst_house");
const SettingMember = document.querySelector("#Screen-Chrome-Exst_settings");
const CreditMember = document.querySelector("#Screen-Chrome-Exst_credits");

document.getElementById('Button1House').addEventListener('click', () => {

    document.querySelector("#Screen-Chrome-Exst_house").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('Button2Settings').addEventListener('click', () => {

    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('Button3Credits').addEventListener('click', () => {

    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "block";
});

if (localStorage.getItem("Rules") == undefined) {
    localStorage.setItem("Rules", "admin");
    chrome.storage.local.set({ Rules: "admin" });
};

if (localStorage.getItem("Active") == undefined) {
    localStorage.setItem("active", true);
    chrome.storage.local.set({ Active: true });
};

username.addEventListener("input", function () {
    localStorage.setItem("NickName", this.value);
    chrome.storage.local.set({ NickName: this.value });
});

rank.addEventListener("input", function () {
    localStorage.setItem("Rank", this.value);
    chrome.storage.local.set({ Rank: this.value });
});

backgroundURLtext.addEventListener("input", function () {
    const ImagePath = this.value;
    localStorage.setItem("backgroundURL", ImagePath);
    chrome.storage.local.set({ backgroundURL: ImagePath });
});

window.addEventListener("load", function () {
    const getNickName = localStorage.getItem("NickName");
    const getRank = localStorage.getItem("Rank");//localStorage.getItem("Rank");
    const getBackgrountext = localStorage.getItem("backgroundURL");

    if (getBackgrountext) backgroundURLtext.value = getBackgrountext;
    if (getNickName) username.value = getNickName;
    if (getRank) rank.value = getRank;
});


check.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("Active", true);
        chrome.storage.local.set({ Active: true });
    } else {
        localStorage.setItem("Active", false);
        chrome.storage.local.set({ Active: false });
    }
});


backgroundURL.addEventListener("change", function () {
    const inputURL = document.querySelector("#backgroundURL");
    if (this.checked) {
        inputURL.classList.add("backgroundURL-Checked");
        localStorage.setItem("BackgroundURLbutton", true);
        chrome.storage.local.set({ BackgroundURLbutton: true });
    } else {
        inputURL.classList.remove("backgroundURL-Checked");
        localStorage.setItem("BackgroundURLbutton", false);
        chrome.storage.local.set({ BackgroundURLbutton: false });
    }
});



myrules.addEventListener("change", function () {
    chrome.storage.local.set({ Rules: this.value });
    localStorage.setItem("Rules", this.value);
})

window.addEventListener("load", function () {
    const getRules = localStorage.getItem("Rules");
    if (getRules) myrules.value = getRules;
});


