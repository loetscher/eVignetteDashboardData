import { exportEVignetteDashboardData } from '../util/export';
function download(content: string, fileName: string, contentType="application/json"): void {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

download(exportEVignetteDashboardData(true), "eVignetteDashboard.json");
