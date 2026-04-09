// popup.js - Редактор CSS (без сохранения файлов)

// Загрузка текущего CSS при открытии попапа
async function loadCurrentCSS() {
    try {
        const result = await browser.storage.local.get(['forumCSS']);
        if (result.forumCSS) {
            document.getElementById('cssEditor').value = result.forumCSS;
        } else {
            // Дефолтный CSS (можно оставить пустым или добавить базовые стили)
            const defaultCSS = `/* Ваш CSS для форума */
body {
    background-color: #1a1a2e !important;
    color: #eee !important;
}

a {
    color: #4d9eff !important;
}

a:hover {
    color: #ffaa00 !important;
}`;
            document.getElementById('cssEditor').value = defaultCSS;
        }
    } catch (error) {
        showStatus('Ошибка загрузки: ' + error.message, 'error');
    }
}

// Сохранение CSS
async function saveCSS() {
    const cssContent = document.getElementById('cssEditor').value;
    
    try {
        // 1. Сохраняем в storage
        await browser.storage.local.set({ 'forumCSS': cssContent });
        
        // 2. Отправляем на текущую вкладку для применения
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];
        
        if (tab && tab.url && tab.url.includes('forum.blackrussia.online')) {
            await browser.tabs.sendMessage(tab.id, {
                action: 'updateCSS',
                css: cssContent
            });
            showStatus('✅ CSS сохранён и применён!', 'success');
        } else {
            showStatus('✅ CSS сохранён (откройте форум для применения)', 'success');
        }
        
    } catch (error) {
        showStatus('❌ Ошибка сохранения: ' + error.message, 'error');
    }
}

// Сброс CSS
async function resetCSS() {
    try {
        const defaultCSS = `/* Ваш CSS для форума */
body {
    background-color: #1a1a2e !important;
    color: #eee !important;
}

a {
    color: #4d9eff !important;
}

a:hover {
    color: #ffaa00 !important;
}`;
        
        document.getElementById('cssEditor').value = defaultCSS;
        await browser.storage.local.set({ 'forumCSS': defaultCSS });
        
        // Применяем на текущей вкладке
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        if (tabs[0] && tabs[0].url && tabs[0].url.includes('forum.blackrussia.online')) {
            await browser.tabs.sendMessage(tabs[0].id, {
                action: 'updateCSS',
                css: defaultCSS
            });
        }
        
        showStatus('🔄 Сброшено к CSS по умолчанию', 'success');
    } catch (error) {
        showStatus('Ошибка сброса: ' + error.message, 'error');
    }
}

// Показать статус
function showStatus(message, type) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
        statusDiv.className = 'status';
    }, 2000);
}

// Обработчики событий
document.getElementById('saveBtn').addEventListener('click', saveCSS);
document.getElementById('resetBtn').addEventListener('click', resetCSS);

// Загружаем текущий CSS при открытии
loadCurrentCSS();