export function importLocalStorage(content) {
    const eVignette = JSON.parse(content);
    for (const key in eVignette) {
        localStorage.setItem(key, eVignette[key]);
    }
}
