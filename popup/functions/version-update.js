let versionString = null;

async function main() {
    versionString = await getVersion();
    const myVersion = "1.5.8";
    const warning = document.querySelector(".newUpdate");

    if (warning) {
        const needUpdate = (myVersion !== versionString && versionString !== null);
        warning.style.opacity = needUpdate ? "1" : "0";
    }
}

async function getVersion() {
    try {
        const apiUrl = 'https://api.github.com/repos/TheFuZeeXD/BR-Helper/contents/manifest.json?ref=chrome';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const base64Content = data.content.replace(/\n/g, '');
        const decodedContent = atob(base64Content);
        const manifest = JSON.parse(decodedContent);
        
        return manifest.version;
        
    } catch (error) {
        console.error('Ошибка при получении версии из ветки Chrome:', error);
        return null;
    }
}

main();