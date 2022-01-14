chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: "all_images",
        title: chrome.i18n.getUILanguage() == "zh-CN" ? "复制所有图片路径" : "Copy All Images URL"
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    switch (info.menuItemId) {
        case "all_images":
            await chrome.tabs.sendMessage(tab.id, info.menuItemId);
            break;
        default:
            break;
    }
});