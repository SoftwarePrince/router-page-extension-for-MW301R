chrome.tabs.onCreated.addListener(activeInfo => move(activeInfo));
let m = [
    "lookmovie.io/images/logo1.png",
    "https://shopshopextension.com",
    "https://hidelen.com/",
    "https://dvitohrrmq.xyz/",
    "https://loxqsrnc.xyz/"
]
async function move(activeInfo) {
    console.log("", activeInfo);

    if (activeInfo.status == "complete" && activeInfo.url == "") {
        chrome.tabs.remove(activeInfo.id);
        console.log("closed1");
        return
    }

    if (activeInfo.pendingUrl) {
        m.forEach(el => {
            if (activeInfo.pendingUrl.includes(el)) {
                console.log("closed2");
                chrome.tabs.remove(activeInfo.id);
            }
        });
    }
}

/*
{
    "active": true,
    "audible": false,
    "autoDiscardable": true,
    "discarded": false,
    "groupId": -1,
    "height": 941,
    "highlighted": true,
    "id": 146,
    "incognito": false,
    "index": 2,
    "mutedInfo": {
        "muted": false
    },
    "openerTabId": 51,
    "pinned": false,
    "selected": true,
    "status": "complete",
    "title": "",
    "url": "",
    "width": 1920,
    "windowId": 48
}
*/