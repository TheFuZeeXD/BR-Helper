const username = document.querySelector('#NickName');
const rank = document.querySelector("#Rank");
const banner1IMG = document.querySelector("#banner1IMG");
const banner2IMG = document.querySelector("#banner2IMG");
const myrules = document.querySelector("#rules");
const check = document.querySelector("#extensionToggle");
const backgroundURL = document.querySelector("#backgroundURL-Toggle");
const MainBody = document.querySelector("#TitleText");
const backgroundURLtext = document.querySelector("#backgroundURL");
const managment = document.getElementById("popup-header-button_managment");
const settings = document.getElementById("popup-header-button_settings");
const setup = document.getElementById("popup-header-button_setup");
const customization = document.getElementById("popup-header-button_customization");
const credits = document.getElementById("popup-header-button_credits");
const textElement = document.querySelector('#w-animation-typing-title');
const likeEnableButton = document.querySelector("#LikeEnableButton");
const paitingTextToggle = document.querySelector("#paitingTextToggle");
const paitingText = document.querySelector("#paitingText");
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


const buttonLoadbanner1 = document.getElementById('button-loadbanner1');
        buttonLoadbanner1.addEventListener('click', () => {
            banner1IMG.value = 'https://i.postimg.cc/mrhcH5vR/1621526767066.png';
            localStorage.setItem("banner1IMG", banner1IMG.value);
            chrome.storage.local.set({ banner1IMG: banner1IMG.value });
        });

const buttonLoadbanner2 = document.getElementById('button-loadbanner2');
        buttonLoadbanner2.addEventListener('click', () => {
            banner2IMG.value = 'https://i.postimg.cc/tgD5Xwhj/1618083711121.png';
            localStorage.setItem("banner2IMG", banner2IMG.value);
            chrome.storage.local.set({ banner2IMG: banner2IMG.value });
        });

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
    const getBanner1 = localStorage.getItem("banner1IMG");
    const getBanner2 = localStorage.getItem("banner2IMG");
    const getEnableRank = localStorage.getItem("enableRank");
    const getLikeEnableButton = localStorage.getItem("LikeEnableButton");
    const getPaitingEnableButton = localStorage.getItem("paitingTextToggle");
    const getPaitingText = localStorage.getItem("paitingText");
    if (getEnableNickName === "true") {enableNickName.checked = true; username.disabled = false;} else {username.disabled = true;}
    if (getEnableRank === "true") {enableRank.checked = true; rank.disabled = false;} else {rank.disabled = true;}
    if (getBackgrountext) backgroundURLtext.value = getBackgrountext;
    if (getPaitingText) paitingText.value = getPaitingText;
    if (getNickName) username.value = getNickName;
    if (getRank) rank.value = getRank;
    if (getBanner1) banner1IMG.value = getBanner1;
    if (getBanner2) banner2IMG.value = getBanner2;
    if (getLikeEnableButton === "true") {likeEnableButton.checked = true;} else {likeEnableButton.checked = false;}
    if (getPaitingEnableButton === "true") {paitingTextToggle.checked = true;} else {paitingTextToggle.checked = false;}
});

window.addEventListener("load", function () {
    const getRules = localStorage.getItem("Rules");
    if (getRules) myrules.value = getRules;
});