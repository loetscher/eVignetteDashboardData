var _a;
import { importLocalStorage } from '../util/import';
const eVignetteDashboardData = prompt("Paste the content from the eVignetteDashboard.json file in the textfield.\n\nNote: already existing data will be overwritten by pressing ok.", "");
if (eVignetteDashboardData === null || eVignetteDashboardData === "") {
    alert("No data to import");
}
else {
    importLocalStorage(eVignetteDashboardData);
    (_a = document === null || document === void 0 ? void 0 : document.location) === null || _a === void 0 ? void 0 : _a.reload();
}
