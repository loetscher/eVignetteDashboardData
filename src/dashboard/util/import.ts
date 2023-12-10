export function importLocalStorage(content: string): void {
    const eVignette = JSON.parse(content)

    for(const key in eVignette) {
        localStorage.setItem(key, eVignette[key]);
    }
}
