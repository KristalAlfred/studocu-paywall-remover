// Quickfix to let docuemnts small enough have time to load before removing the paywall.
// To make this a bit more robust, we should detect when a page is loaded and only then
// remove the blur from it.
setTimeout(() => {
    const documentWrapper = document.getElementById('document-wrapper');
    if (documentWrapper != null) {
        documentWrapper.parentNode.replaceChild(documentWrapper.cloneNode(true), documentWrapper);
    }

    const paywall = document.querySelector('._60e676a00207');
    if (paywall != null) {
        paywall.style.display = 'none';
    }

    const overlayItems = document.querySelectorAll('._869f7c361ca9');
    if (overlayItems != null) {
        overlayItems.forEach(item => item.style.display = 'none');
    }

    const pages = document.querySelectorAll('.page-content');
    if (pages != null) {
        pages.forEach(page => {
            page.style.filter = 'none';
            page.style.removeProperty('filter');
        });
    }
}, 200);