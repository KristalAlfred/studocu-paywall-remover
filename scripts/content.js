// TODO: Find a more robust way to deal with these.
const paywall = document.querySelector('._60e676a00207');
if (paywall != null) {
    paywall.style.display = 'none';
}

// TODO: Find a more robust way to deal with these.
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