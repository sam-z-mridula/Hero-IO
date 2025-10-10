const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("installedApps");

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (!storedAppData.includes(id)) {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installedApps", data);
    }
}

const removeFromDB = (id) => {
    const storedAppData = getStoredApp();

    const updated = storedAppData.filter(appId => appId.toString() !== id.toString());
    const data = JSON.stringify(updated);
    localStorage.setItem("installedApps", data);
}

export { addToStoredDB, getStoredApp, removeFromDB };