# studocu-premium

A small chrome extension that removes the paywall on Studocu.com!

Created out of curiosity, don't use it :)

Unsolved issue:
StuDocu has some js that watches the blur effect and reapplies it if the user tries to remove it.
I don't know how the attribute is being watched, but I suspect it's a MutationObserver. At least 
it isn't an event listener (I tried deleting them all). The easiest solution to stop this was to
replace the element with a copy of itself. However, StuDocu lazyloads all page content if the page
is to large. Since we copy and replace all the pages, even the ones that aren't loaded yet, this 
means that the extensions will detach the lazyloading js on the page and prevent large documents
from loading properly.

