const paywall = document.querySelector('#document-wrapper').firstChild;
if (paywall != null) {
    paywall.style.display = 'none';
}

// Hacky but works for now!
const overlayItems = document.querySelectorAll('._869f7c361ca9');
if (overlayItems != null) {
    overlayItems.forEach(item => item.style.display = 'none');
}

const pages = document.querySelectorAll(".page-content");
if (pages != null) {
    pages.forEach(page => {
        page.classList.add("no-blur");
    });
}