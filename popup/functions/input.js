if (localStorage.getItem("Rules") == undefined) {
    localStorage.setItem("Rules", "admin");
    browser.storage.local.set({ Rules: "admin" });
};

if (localStorage.getItem("Active") == undefined) {
    localStorage.setItem("Active", true);
    browser.storage.local.set({ Active: true });
};

username.addEventListener("input", function () {
    localStorage.setItem("NickName", this.value);
    browser.storage.local.set({ NickName: this.value });
});

rank.addEventListener("input", function () {
    localStorage.setItem("Rank", this.value);
    browser.storage.local.set({ Rank: this.value });
});

backgroundURLtext.addEventListener("input", function () {
    const ImagePath = this.value;
    localStorage.setItem("backgroundURL", ImagePath);
    browser.storage.local.set({ backgroundURL: ImagePath });
});

paitingText.addEventListener("input", function () {
    const ImagePath = this.value;
    localStorage.setItem("paitingText", ImagePath);
    browser.storage.local.set({ paitingText: ImagePath });
});

check.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("Active", true);
        browser.storage.local.set({ Active: true });
    } else {
        localStorage.setItem("Active", false);
        browser.storage.local.set({ Active: false });
    }
});


myrules.addEventListener("change", function () {
    browser.storage.local.set({ Rules: this.value });
    localStorage.setItem("Rules", this.value);
})


backgroundURL.addEventListener("change", function () {
    const inputURL = document.querySelector("#backgroundURL");
    if (this.checked) {
        inputURL.classList.add("backgroundURL-Checked");
        localStorage.setItem("BackgroundURLbutton", true);
        browser.storage.local.set({ BackgroundURLbutton: true });
    } else {
        inputURL.classList.remove("backgroundURL-Checked");
        localStorage.setItem("BackgroundURLbutton", false);
        browser.storage.local.set({ BackgroundURLbutton: false });
    }
});

paitingTextToggle.addEventListener("change", function () {
    const inputURL = document.querySelector("#paitingText");
    if (this.checked) {
        inputURL.classList.add("backgroundURL-Checked");
        localStorage.setItem("paitingTextToggle", true);
        browser.storage.local.set({ paitingTextToggle: true });
    } else {
        inputURL.classList.remove("backgroundURL-Checked");
        localStorage.setItem("paitingTextToggle", false);
        browser.storage.local.set({ paitingTextToggle: false });
    }
});


likeEnableButton.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("LikeEnableButton", true);
        username.disabled = false;
        browser.storage.local.set({ LikeEnableButton: true });
    } else {
        localStorage.setItem("LikeEnableButton", false);
        username.disabled = true;
        browser.storage.local.set({ LikeEnableButton: false });
    }
});

enableNickName.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("enableNickName", true);
        username.disabled = false;
        browser.storage.local.set({ enableNickName: true });
    } else {
        localStorage.setItem("enableNickName", false);
        username.disabled = true;
        browser.storage.local.set({ enableNickName: false });
    }
});

enableRank.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("enableRank", true);
        rank.disabled = false;
        browser.storage.local.set({ enableRank: true });
    } else {
        localStorage.setItem("enableRank", false);
         rank.disabled = true;
        browser.storage.local.set({ enableRank: false });
    }
});




        // Функция обновления статуса
        function updateStatus() {
            const checkedCount = document.querySelectorAll('.multi-select input[type="checkbox"]:checked').length;
            statusElement.textContent = `Выбрано: ${checkedCount} из ${checkboxes.length}`;
            
            // Обновляем текст кнопки
            if (checkedCount === checkboxes.length) {
                allSelected = true;
                saveCheckboxStates();
                updateServersList();
                toggleAllBtn.textContent = 'Снять все';
            } else if (checkedCount === 0) {
                allSelected = false;
                saveCheckboxStates();
                updateServersList();
                toggleAllBtn.textContent = 'Выбрать все';
            } else {
                toggleAllBtn.textContent = 'Выбрать все';
            }
        }
        
        // Функция переключения всех чекбоксов
        function toggleAllCheckboxes() {
            const anyUnchecked = Array.from(checkboxes).some(cb => !cb.checked);
            
            // Если есть невыбранные - выбираем все, иначе снимаем все
            const newState = anyUnchecked;
            
            checkboxes.forEach(checkbox => {
                checkbox.checked = newState;
            });
            
           updateStatus();
        }
        
        // Обработчик клика по кнопке
        toggleAllBtn.addEventListener('click', toggleAllCheckboxes);
        
        // Обработчики для отдельных чекбоксов
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateStatus);
        });
        
        // Инициализация статуса
        updateStatus();
