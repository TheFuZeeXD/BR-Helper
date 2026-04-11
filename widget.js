(function() {
    'use strict';

    class LinksWidget {
        constructor() {
            this.links = [];
            this.isPanelOpen = false;
            this.storageKey = 'br_helper_widget_links';
            this.isInitialized = false;
        }

        async init() {
            if (this.isInitialized) return;
            
            await this.loadLinks();
            this.createWidget();
            this.bindEvents();
            this.showWidget();
            this.updateQuickLinks();
            
            this.isInitialized = true;
            console.log('Виджет загружен, ссылок:', this.links.length);
        }

        createWidget() {
            const widgetHTML = `
                <div id="brHelperWidget" class="widget-container" style="display: none;">
                    <div class="widget-main-row">
                        <div id="quickLinksContainer" class="quick-links"></div>
                        <button id="fabButton" class="widget-fab">
                            <span class="plus-icon">+</span>
                        </button>
                    </div>
                    <div id="widgetPanel" class="widget-panel hidden">
                        <div class="widget-panel-header">
                            <h4>📎 Все сохранённые ссылки</h4>
                            <div class="panel-buttons">
                                <button id="addLinkHeaderBtn" class="widget-add-header" title="Добавить ссылку">+</button>
                                <button id="closePanelBtn" class="widget-close" title="Закрыть">✕</button>
                            </div>
                        </div>
                        <div id="linksList" class="widget-links-list">
                            ${this.renderLinks()}
                        </div>
                        <div id="addLinkForm" class="add-link-form" style="display: none;">
                            <input type="text" id="linkNameInput" placeholder="Название ссылки" class="link-input">
                            <input type="url" id="linkUrlInput" placeholder="https://..." class="link-input">
                            <div class="form-buttons">
                                <button id="saveLinkBtn" class="save-link-btn">✅ Добавить</button>
                                <button id="cancelAddBtn" class="cancel-link-btn">❌ Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('afterend', widgetHTML);

            this.widget = document.getElementById('brHelperWidget');
            this.panel = document.getElementById('widgetPanel');
            this.fabButton = document.getElementById('fabButton');
            this.linksList = document.getElementById('linksList');
            this.addLinkForm = document.getElementById('addLinkForm');
            this.quickLinksContainer = document.getElementById('quickLinksContainer');
        }

        showWidget() {
            if (this.widget) {
                this.widget.style.display = 'flex';
                setTimeout(() => {
                    this.widget.classList.add('show');
                }, 10);
            }
        }

        updateQuickLinks() {
            if (!this.quickLinksContainer) return;
            
            const quickLinks = this.links.slice(0, 3);
            
            if (quickLinks.length === 0) {
                this.quickLinksContainer.innerHTML = '';
                return;
            }
            
            let html = '';
            quickLinks.forEach((link, index) => {
                let name = link.name.length > 15 ? link.name.substring(0, 12) + '...' : link.name;
                html += `
                    <button class="quick-link-btn" data-url="${this.escapeHtml(link.url)}" title="${this.escapeHtml(link.name)}">
                        ${this.escapeHtml(name)}
                    </button>
                `;
            });

            if (this.links.length > 3) {
                html += `
                    <button id="showMoreBtn" class="more-links-btn" title="Показать все ссылки">
                        +${this.links.length - 3}
                    </button>
                `;
            }
            
            this.quickLinksContainer.innerHTML = html;

            document.querySelectorAll('.quick-link-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const url = btn.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_blank');
                    }
                });
            });

            const moreBtn = document.getElementById('showMoreBtn');
            if (moreBtn) {
                moreBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openPanel();
                });
            }
        }

        renderLinks() {
            if (this.links.length === 0) {
                return '<div class="empty-message">✨ Нет сохранённых ссылок<br>Нажмите + чтобы добавить</div>';
            }
            
            return this.links.map((link, index) => `
                <div class="link-item" data-index="${index}">
                    <button class="link-button" data-url="${this.escapeHtml(link.url)}">
                        ${this.escapeHtml(link.name)}
                    </button>
                    <button class="delete-link" data-index="${index}" title="Удалить">🗑️</button>
                </div>
            `).join('');
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        async loadLinks() {
            try {
                if (typeof browser !== 'undefined' && browser.storage && browser.storage.local) {
                    const result = await browser.storage.local.get(this.storageKey);
                    this.links = result[this.storageKey] || [];
                } else if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                    const result = await new Promise((resolve) => {
                        chrome.storage.local.get(this.storageKey, resolve);
                    });
                    this.links = result[this.storageKey] || [];
                } else {
                    const saved = localStorage.getItem(this.storageKey);
                    this.links = saved ? JSON.parse(saved) : [];
                }
            } catch (error) {
                console.error('Ошибка загрузки ссылок:', error);
                this.links = [];
            }
        }

        async saveLinks() {
            try {
                if (typeof browser !== 'undefined' && browser.storage && browser.storage.local) {
                    await browser.storage.local.set({ [this.storageKey]: this.links });
                } else if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                    await new Promise((resolve) => {
                        chrome.storage.local.set({ [this.storageKey]: this.links }, resolve);
                    });
                } else {
                    localStorage.setItem(this.storageKey, JSON.stringify(this.links));
                }
                this.updateLinksList();
                this.updateQuickLinks();
                console.log('Ссылки сохранены:', this.links.length);
            } catch (error) {
                console.error('Ошибка сохранения ссылок:', error);
            }
        }

        updateLinksList() {
            if (this.linksList) {
                this.linksList.innerHTML = this.renderLinks();
                this.bindLinkEvents();
            }
        }

        bindLinkEvents() {
            document.querySelectorAll('.link-button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = btn.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_self ');
                    }
                });
            });

            document.querySelectorAll('.delete-link').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const index = parseInt(btn.getAttribute('data-index'));
                    this.links.splice(index, 1);
                    this.saveLinks();
                });
            });
        }

        openPanel() {
            if (this.panel) {
                this.panel.classList.remove('hidden');
                this.isPanelOpen = true;
                if (this.fabButton) {
                    this.fabButton.style.transform = 'rotate(45deg)';
                }
            }
        }

        closePanel() {
            if (this.panel) {
                this.panel.classList.add('hidden');
                if (this.addLinkForm) {
                    this.addLinkForm.style.display = 'none';
                    this.addLinkForm.classList.remove('show');
                }
                this.isPanelOpen = false;
                if (this.fabButton) {
                    this.fabButton.style.transform = 'rotate(0deg)';
                }
            }
        }

        showAddForm() {
            if (this.addLinkForm) {
                this.addLinkForm.style.display = 'block';
                setTimeout(() => {
                    this.addLinkForm.classList.add('show');
                }, 10);
                const nameInput = document.getElementById('linkNameInput');
                if (nameInput) nameInput.focus();
            }
        }

        hideAddForm() {
            if (this.addLinkForm) {
                this.addLinkForm.classList.remove('show');
                this.addLinkForm.style.display = 'none';
                const nameInput = document.getElementById('linkNameInput');
                const urlInput = document.getElementById('linkUrlInput');
                if (nameInput) nameInput.value = '';
                if (urlInput) urlInput.value = '';
            }
        }

        addNewLink() {
            const nameInput = document.getElementById('linkNameInput');
            const urlInput = document.getElementById('linkUrlInput');
            
            const name = nameInput ? nameInput.value.trim() : '';
            let url = urlInput ? urlInput.value.trim() : '';
            
            if (!name) {
                alert('Введите название ссылки');
                return;
            }
            
            if (!url) {
                alert('Введите URL ссылки');
                return;
            }

            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            this.links.unshift({ name, url }); 
            this.saveLinks();
            this.hideAddForm();
        }

        bindEvents() {
            if (!this.fabButton) return;

            this.fabButton.addEventListener('click', () => {
                if (this.isPanelOpen) {
                    this.closePanel();
                } else {
                    this.openPanel();
                }
            });

            const closeBtn = document.getElementById('closePanelBtn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closePanel());
            }

            const addHeaderBtn = document.getElementById('addLinkHeaderBtn');
            if (addHeaderBtn) {
                addHeaderBtn.addEventListener('click', () => this.showAddForm());
            }
            
            const saveBtn = document.getElementById('saveLinkBtn');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => this.addNewLink());
            }

            const cancelBtn = document.getElementById('cancelAddBtn');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => this.hideAddForm());
            }

            const nameInput = document.getElementById('linkNameInput');
            const urlInput = document.getElementById('linkUrlInput');
            
            if (nameInput) {
                nameInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addNewLink();
                });
            }
            
            if (urlInput) {
                urlInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addNewLink();
                });
            }
            
            document.addEventListener('click', (e) => {
                if (this.isPanelOpen && this.widget && !this.widget.contains(e.target)) {
                    this.closePanel();
                }
            });
        }

        addLink(name, url) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            this.links.unshift({ name, url });
            this.saveLinks();
        }
    }

    function initWidget() {
        if (document.body) {
            window.brHelperWidget = new LinksWidget();
            window.brHelperWidget.init();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                window.brHelperWidget = new LinksWidget();
                window.brHelperWidget.init();
            });
        }
    }

    initWidget();
})();