setTimeout(() => {
    document.body = document.body.cloneNode(true);

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
            page.classList.remove('page-content');
            page.style.filter = 'none';
        });
    }
}, 200);