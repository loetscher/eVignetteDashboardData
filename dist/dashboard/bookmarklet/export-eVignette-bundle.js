(function () {
    'use strict';

    function exportEVignetteDashboardData(formatted = false) {
        let eVignetteLocalStorage = {};
        for (let localStorageItem = 0; localStorageItem < localStorage.length; localStorageItem++) {
            const key = localStorage.key(localStorageItem);
            // @ts-ignore
            eVignetteLocalStorage[key] = localStorage.getItem(key);
            //console.log(`${key}: ${localStorage.getItem(key)}`)
        }
        return JSON.stringify(eVignetteLocalStorage, undefined, formatted ? 2 : 0);
    }

    function download(content, fileName, contentType = "application/json") {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(exportEVignetteDashboardData(true), "eVignetteDashboard.json");

})();
