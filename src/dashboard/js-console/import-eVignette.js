function importLocalStorage(content) {
    const eVignette = JSON.parse(content)

    for(var key in eVignette) {
        localStorage.setItem(key, eVignette[key]);
    }
}

importLocalStorage(JSON.parse('<<exported-eVignetteLocalStorage-JSON>>'));