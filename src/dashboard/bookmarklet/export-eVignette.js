function exportEVignetteDashboardData() {
    let eVignetteLocalStorage = {};
    for (var localStorageItem = 0; localStorageItem < localStorage.length; localStorageItem++){
        const key = localStorage.key(localStorageItem);
        eVignetteLocalStorage[key] = localStorage.getItem(key);
        //console.log(`${key}: ${localStorage.getItem(key)}`);
    }
    return JSON.stringify(eVignetteLocalStorage, undefined, 2);
}

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

download(exportEVignetteDashboardData(), "eVignetteDashboard.json", "application/json");