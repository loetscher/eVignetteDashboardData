function exportEVignetteDashboardData() {
    let eVignetteLocalStorage = {};
    for (var localStorageItem = 0; localStorageItem < localStorage.length; localStorageItem++) {
        const key = localStorage.key(localStorageItem);
        eVignetteLocalStorage[key] = localStorage.getItem(key);
        //console.log(`${key}: ${localStorage.getItem(key)}`)
    }
    return JSON.stringify(eVignetteLocalStorage);
}

console.log(exportEVignetteDashboardData());