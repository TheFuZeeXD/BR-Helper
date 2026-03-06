    let versionString = null;
    async function main() {
        versionString = await getVersion();
        const myVersion = "1.4.4";
        const warning = document.querySelector(".newUpdate");

        if (warning) {
            warning.style.opacity = (myVersion != versionString) ? "1" : "0";
        }
    }
    async function getVersion() {
        try {
            const apiUrl = 'https://api.github.com/repos/TheFuZeeXD/BR-Helper/contents/manifest.json?ref=chrome';
            const response = await fetch(apiUrl);
            const data = await response.json();


            const decodedContent = atob(data.content.replace(/\s/g, ''));
            const manifest = JSON.parse(decodedContent);

            return manifest.version;

        } catch (error) {
            console.error('Error fetching version:', error);
            return null;
        }
    }


    main();