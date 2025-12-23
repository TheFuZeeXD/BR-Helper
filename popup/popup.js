const username = document.querySelector('#NickName');
const rank = document.querySelector("#Rank");
const myrules = document.querySelector("#rules");
const check = document.querySelector("#extensionToggle");
const backgroundURL = document.querySelector("#backgroundURL-Toggle");
const MainBody = document.querySelector("#TitleText");
const backgroundURLtext = document.querySelector("#backgroundURL");
const managment = document.getElementById("popup-header-button_managment");
const settings = document.getElementById("popup-header-button_settings");
const customization = document.getElementById("popup-header-button_customization");
const credits = document.getElementById("popup-header-button_credits");
const textElement = document.querySelector('#w-animation-typing-title');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        const words = ["Tomioka Capone", "Artyom Capone"];
        const currentWord = words[wordIndex];
const themer = document.querySelector("#Theme-color");
const toggleAllBtn = document.getElementById('toggleAllBtn');
const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
const statusElement = document.getElementById('status');
const enableRank = document.getElementById('enableRank');
const enableNickName = document.getElementById('enableNickName');
let allSelected = false;        



class BRhelper {
     loadModule() {
        try {
            const elements = ['./functions/version-update.js', './functions/credits-text.js',  './functions/input.js',  './functions/themes.js', './functions/header.js'];
            for (const element of elements)  {
                import(element);
            } 
        } catch (error) {
            console.error('Ошибка загрузки модуля --CheckVersion:', error);
        }
    }
}

const brh = new BRhelper();
brh.loadModule();

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('extensionToggle');
    const backgroundURL = document.querySelector("#backgroundURL-Toggle");
    const backgroundURLtext = document.querySelector("#backgroundURL");
    const themer = document.querySelector("#Theme-color");


    // toggle BG URL backgroundURL
    if (localStorage.getItem("BackgroundURLbutton") == "true") {
        backgroundURLtext.classList.add("backgroundURL-Checked");
    }

    chrome.storage.sync.get(['enabled'], function (result) {
        toggle.checked = result.enabled !== false;
    });


    toggle.addEventListener('change', function () {
        chrome.storage.sync.set({ enabled: this.checked });
    });

    // backgroundURL backgroundURLtext
    chrome.storage.sync.get(['disabled'], function (result) {
        backgroundURL.checked = result.disabled !== false;
    });


    backgroundURL.addEventListener('change', function () {
        chrome.storage.sync.set({ disabled: this.checked });
    });

    // themer
    chrome.storage.sync.get(['themer'], function (result) {
        themer.checked = result.themer !== false;
    });


    themer.addEventListener('change', function () {
        chrome.storage.sync.set({ themer: this.checked });
    });

    if (localStorage.getItem("Themer") == "true") {
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
    }

});

function  saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        localStorage.setItem(`checkbox_${checkbox.value}`, checkbox.checked);
    });
}


function     restoreCheckboxStates() {
    const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(`checkbox_${checkbox.value}`);
        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
        }
    });
}

function     updateServersList() {
    const serverValues = Array.from(
        document.querySelectorAll('.multi-select input[type="checkbox"]:not(:checked)')
    ).map(checkbox => checkbox.value);

    chrome.storage.local.set({ ServersList: serverValues });
}

document.addEventListener('DOMContentLoaded', () => {
    restoreCheckboxStates();
    updateServersList();
});



checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        localStorage.setItem(`checkbox_${this.value}`, this.checked);

       updateServersList();

       saveCheckboxStates();
    });
});

window.addEventListener("load", function () {
    const getNickName = localStorage.getItem("NickName");
    const getRank = localStorage.getItem("Rank");
    const getBackgrountext = localStorage.getItem("backgroundURL");
    const getEnableNickName = localStorage.getItem("enableNickName");
    const getEnableRank = localStorage.getItem("enableRank");
    if (getEnableNickName === "true") {enableNickName.checked = true; username.disabled = false;} else {username.disabled = true;}
    if (getEnableRank === "true") {enableRank.checked = true; rank.disabled = false;} else {rank.disabled = true;}
    if (getBackgrountext) backgroundURLtext.value = getBackgrountext;
    if (getNickName) username.value = getNickName;
    if (getRank) rank.value = getRank;
});

window.addEventListener("load", function () {
    const getRules = localStorage.getItem("Rules");
    if (getRules) myrules.value = getRules;
});
