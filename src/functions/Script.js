
export function SaveData(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function GetData(key){
    const SavedData = localStorage.getItem(key);
    if (SavedData){
        return JSON.parse(SavedData);
    } else {
        return [];
    }
}

export function SetTitle(title){
    document.title = `Products & Upgrades | ${title}`;
}