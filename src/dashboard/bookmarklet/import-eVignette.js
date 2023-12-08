function importLocalStorage(content) {
    const eVignette = JSON.parse(content);
    for(var key in eVignette) {
        localStorage.setItem(key, eVignette[key]);
    }
}

const eVignetteDashboardData = prompt("Paste the content from the eVignetteDashboard.json file in the textfield.\n\nNote: alredy existing data will be overwritten by pressing ok.", "");
if (eVignetteDashboardData === null || eVignetteDashboardData === "") {
    alert("No data to import");
} else {
    importLocalStorage(eVignetteDashboardData);
	document.location.reload();
}