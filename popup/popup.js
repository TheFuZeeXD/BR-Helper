document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('extensionToggle');
    const backgroundURL = document.querySelector("#backgroundURL-Toggle");
    const backgroundURLtext = document.querySelector("#backgroundURL");
    const themer = document.querySelector("#Theme-color");



    // toggle
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

function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        localStorage.setItem(`checkbox_${checkbox.value}`, checkbox.checked);
    });
}


function restoreCheckboxStates() {
    const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(`checkbox_${checkbox.value}`);
        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
        }
    });
}

function updateServersList() {
    const serverValues = Array.from(
        document.querySelectorAll('.multi-select input[type="checkbox"]:not(:checked)')
    ).map(checkbox => checkbox.value);

    chrome.storage.local.set({ ServersList: serverValues });
}


document.addEventListener('DOMContentLoaded', () => {
    restoreCheckboxStates();
    updateServersList();
});


const checkboxes = document.querySelectorAll('.multi-select input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        localStorage.setItem(`checkbox_${this.value}`, this.checked);

        updateServersList();

        saveCheckboxStates();
    });
});


const username = document.querySelector('#NickName');
const rank = document.querySelector("#Rank");
const myrules = document.querySelector("#rules");
const check = document.querySelector("#extensionToggle");
const backgroundURL = document.querySelector("#backgroundURL-Toggle");
const MainBody = document.querySelector("#TitleText");
const backgroundURLtext = document.querySelector("#backgroundURL");
const themer = document.querySelector("#Theme-color");

const managment = document.getElementById("popup-header-button_managment");
const settings = document.getElementById("popup-header-button_settings");
const customization = document.getElementById("popup-header-button_customization");
const credits = document.getElementById("popup-header-button_credits");

document.getElementById("popup-header-button_managment").addEventListener('click', () => {
    managment.classList.add("activePage");
    settings.classList.remove("activePage");
    customization.classList.remove("activePage");
    credits.classList.remove("activePage");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById("popup-header-button_settings").addEventListener('click', () => {
    settings.classList.add("activePage");
    managment.classList.remove("activePage");
    customization.classList.remove("activePage");
    credits.classList.remove("activePage");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('popup-header-button_customization').addEventListener('click', () => {
    settings.classList.remove("activePage");
    managment.classList.remove("activePage");
    customization.classList.add("activePage");
    credits.classList.remove("activePage");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "block";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "none";
});

document.getElementById('popup-header-button_credits').addEventListener('click', () => {
    settings.classList.remove("activePage");
    managment.classList.remove("activePage");
    customization.classList.remove("activePage");
    credits.classList.add("activePage");
    document.querySelector("#Screen-Chrome-Exst_house").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_settings").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_customization").style.display = "none";
    document.querySelector("#Screen-Chrome-Exst_credits").style.display = "block";
});


if (localStorage.getItem("Rules") == undefined) {
    localStorage.setItem("Rules", "admin");
    chrome.storage.local.set({ Rules: "admin" });
};

if (localStorage.getItem("Active") == undefined) {
    localStorage.setItem("Active", true);
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
    const getRank = localStorage.getItem("Rank");
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



themer.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("Themer", true);
        document.body.classList.remove("light");
    } else {
        localStorage.setItem("Themer", false);
        document.body.classList.add("light");
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
