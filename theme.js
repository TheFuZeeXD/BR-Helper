browser.storage.local.get(["BackgroundURLbutton"], (getBackgroundURLtoggle) => {
browser.storage.local.get(["backgroundURL"], (getBackgroundURL) => {
const backgroundURLbutton = getBackgroundURLtoggle.BackgroundURLbutton;
let backgroundURL = getBackgroundURL.backgroundURL;
               // Custom Background for forum.blackrussia.online
                if (backgroundURLbutton != true) {
                  const elements = document.querySelectorAll('.p-nav, .p-header, .block-container, .p-footer, .button.button--cta, .buttonGroup, .button--scroll, .p-nav-inner, .p-sectionLinks, .pageNav-main, .pageNav-jump, .tabPanes, .menu-content, .overlay, .p-body-header, .p-title-value, .block-minorHeader');
                  elements.forEach(el => {
                    el.style.opacity = '1';
                  });
                  backgroundURL = null;
                } 
                const style = document.createElement("style");
                style.textContent = ` :root {
                    --BageURL: url(${backgroundURL});
                  }`;
                  document.documentElement.appendChild(style);

});
})