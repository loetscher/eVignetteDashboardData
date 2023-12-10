import { importLocalStorage } from '../util/import';

const eVignetteDashboardData: string|null = prompt("Paste the content from the eVignetteDashboard.json file in the textfield.\n\nNote: already existing data will be overwritten by pressing ok.", "");
if (eVignetteDashboardData === null || eVignetteDashboardData === "") {
    alert("No data to import");
} else {
    importLocalStorage(eVignetteDashboardData);
	document?.location?.reload();
}
