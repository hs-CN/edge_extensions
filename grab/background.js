const copy_all_images_url = chrome.i18n.getMessage("copy_all_images_url");

chrome.contextMenus.create({
    id: "all_images",
    title: copy_all_images_url
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