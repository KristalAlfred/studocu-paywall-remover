// Quickfix to let docuemnts small enough have time to load before removing the paywall.
// To make this a bit more robust, we should detect when a page is loaded and only then
// remove the blur from it.


const paywall = document.querySelector('._60e676a00207');
if (paywall != null) {
    paywall.style.display = 'none';
}

const overlayItems = document.querySelectorAll('._869f7c361ca9');
if (overlayItems != null) {
    overlayItems.forEach(item => item.style.display = 'none');
}


const config = { childList: true };
const callback = (mutationList, _) => {
    for (const mutation of mutationList) {
        if (mutation.addedNodes.length > 0) {
            const element = mutation.target;

            // Wait a bit for the content to load.
            setTimeout(() => {
                const contentLoaded = element.children.length > 0;
                if (contentLoaded) {
                    const copy = element.cloneNode(true);
                    copy.style.filter = 'none';
                    copy.style.removeProperty('filter');
                    element.parentNode.replaceChild(copy, element);
                }
            }, 200);
        }
    }
};

const observer = new MutationObserver(callback);

const pages = document.querySelectorAll('.page-content');
if (pages != null) {
    pages.forEach(page => {
        observer.observe(page, config);
    });
}