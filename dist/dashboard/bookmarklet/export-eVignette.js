import { exportEVignetteDashboardData } from '../util/export';
function download(content, fileName, contentType = "application/json") {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(exportEVignetteDashboardData(true), "eVignetteDashboard.json");
