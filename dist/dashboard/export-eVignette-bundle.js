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

    console.log(exportEVignetteDashboardData());

})();
