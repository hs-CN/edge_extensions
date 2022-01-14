chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    switch (message) {
        case "all_images":
            let imgs = document.querySelectorAll("img");
            let addresses = []
            for (let index = 0; index < imgs.length; index++) {
                addresses[index] = imgs[index].src;
            }
            await navigator.clipboard.writeText(addresses.join("\n"));

            let info = chrome.i18n.getUILanguage() == "zh-CN" ? `发现 ${addresses.length} 张图片` : `Found ${addresses.length} images`
            let div_container = document.createElement("div");
            div_container.style.position = "fixed";
            div_container.style.bottom = "10px";
            div_container.style.width = "100%";
            div_container.style.textAlign = "center";

            let div = document.createElement("div");
            div.style.display = "inline-block";
            div.style.background = "red"
            div.style.color = "white";
            div.style.padding = "3px";
            div.style.borderRadius = "5px";
            div.innerHTML = info;

            document.body.style.position = "relative";
            div_container.appendChild(div);
            document.body.appendChild(div_container);

            setTimeout(() => {
                document.body.removeChild(div_container);
            }, 1000);
            break;
        default:
            break;
    }
});