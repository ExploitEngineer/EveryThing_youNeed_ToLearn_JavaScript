/*
INFO: sessionStorage
Similar to localStorage, but data is only saved for the current tab/session. It's wiped when the tab is closed.

INFO: Key features:
1. lives only during the page session(tab)
2. Same methods & structure as localStorage
3. ALso stores strings only
*/

sessionStorage.setItem("authToken", "12345");
sessionStorage.getItem("authToken");
seesionStorage.removeItem("authToken");
