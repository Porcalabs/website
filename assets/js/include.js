document.addEventListener("DOMContentLoaded", async () => {
  const loadPartial = async (selector, url) => {
    const el = document.querySelector(selector);
    if (!el) return;

    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`${url} -> ${res.status}`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error("Include error:", err);
    }
  };

  // WAJIB absolute supaya tidak nyasar ke /pages/ atau kena base
  await loadPartial("#site-header", "/porcalabswebsite/partials/header.html");
  await loadPartial("#site-footer", "/porcalabswebsite/partials/footer.html");
});
