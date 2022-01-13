const found_images = chrome.i18n.getMessage("found_images");

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    switch (message) {
        case "all_images":
            let imgs = document.querySelectorAll("img");
            let addresses = []
            for (let index = 0; index < imgs.length; index++) {
                addresses[index] = imgs[index].src;
            }
            await navigator.clipboard.writeText(addresses.join("\n"));
            alert(found_images + " " + addresses.length);
            break;
        default:
            break;
    }
});