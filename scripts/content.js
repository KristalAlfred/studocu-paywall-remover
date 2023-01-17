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