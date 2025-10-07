// Store and retrieve files locally (optional)
export const saveToLocal = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const loadFromLocal = (key) => JSON.parse(localStorage.getItem(key)) || [];
