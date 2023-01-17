setTimeout(() => {

    // Studocu lazy loads the content, so this approach doesn't work
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
            page.style.filter = 'none';
            page.style.removeProperty('filter');
        });
    }
}, 200);