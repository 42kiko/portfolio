export const store = {
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (_) { return fallback; }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
