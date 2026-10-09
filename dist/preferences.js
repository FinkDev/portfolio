// Apply the saved palette before styles paint. Storage may be unavailable in private contexts.
(() => {
  const root = document.documentElement;
  const read = (key, allowed, fallback) => {
    try { const value = localStorage.getItem(key); return allowed.includes(value) ? value : fallback; }
    catch { return fallback; }
  };
  root.dataset.theme = read('pfs-theme', ['dark', 'light'], 'dark');
  root.dataset.accent = read('pfs-accent', ['purple', 'wine'], 'purple');
  root.lang = read('pfs-language', ['pt-BR', 'en'], 'pt-BR');
})();
