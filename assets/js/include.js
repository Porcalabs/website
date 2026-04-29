(function () {
  "use strict";

  function getRootPath() {
    var baseEl = document.querySelector("base");
    if (baseEl && baseEl.getAttribute("href")) {
      return baseEl.getAttribute("href").replace(/\/$/, "");
    }
    return "";
  }

  function loadPartialSync(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status >= 200 && xhr.status < 300) {
      return xhr.responseText;
    }
    return "";
  }

  function replaceElementHtml(selector, html) {
    if (!html) return;
    var el = document.querySelector(selector);
    if (!el) return;
    el.outerHTML = html;
  }

  var rootPath = getRootPath();

  var headerEl = document.querySelector("header");
  var headerType = headerEl && headerEl.getAttribute("data-header") === "inner" ? "header-inner.html" : "header-home.html";

  var headerHtml = loadPartialSync(rootPath + "/partials/" + headerType);
  var footerHtml = loadPartialSync(rootPath + "/partials/footer.html");

  replaceElementHtml("header", headerHtml);
  replaceElementHtml("footer", footerHtml);
})();
