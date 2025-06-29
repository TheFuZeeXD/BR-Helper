document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('extensionToggle');
    
    // Загружаем сохраненное состояние
    chrome.storage.sync.get(['enabled'], function(result) {
        toggle.checked = result.enabled !== false;
    });
    
    // Сохраняем состояние при изменении
    toggle.addEventListener('change', function() {
        chrome.storage.sync.set({enabled: this.checked});
    });
});

const username = document.querySelector('#NickName');
const rank = document.querySelector("#Rank");
const myrules = document.querySelector("#rules");
const check = document.querySelector("#extensionToggle");
const MainBody = document.querySelector("#TitleText");

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

username.addEventListener("input", function() {
   localStorage.setItem("NickName", this.value);
   chrome.storage.local.set({ NickName: this.value });
});

rank.addEventListener("input", function() {
   localStorage.setItem("Rank", this.value);
   chrome.storage.local.set({ Rank: this.value });
});

window.addEventListener("load", function() {
    const getNickName =     localStorage.getItem("NickName");
    const getRank =  localStorage.getItem("Rank");//localStorage.getItem("Rank");

    if (getNickName) username.value = getNickName;
    if (getRank) rank.value = getRank;
});



check.addEventListener("change", function() {
    if (this.checked) {
        localStorage.setItem("Active", true);
           chrome.storage.local.set({ Active: true });
    } else {
      localStorage.setItem("Active", false);
           chrome.storage.local.set({ Active: false });
    }
});


myrules.addEventListener("change", function() {
                   chrome.storage.local.set({ Rules: this.value });
               localStorage.setItem("Rules", this.value);
})

window.addEventListener("load", function() {
   const getRules = localStorage.getItem("Rules");
    if (getRules) myrules.value = getRules;
});


