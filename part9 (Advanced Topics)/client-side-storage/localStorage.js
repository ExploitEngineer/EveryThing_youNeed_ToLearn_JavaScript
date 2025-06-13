/*
INFO: localStorage
localstorage allows you to store key-value pairs in the browser, with no expiration. The data stays even after the browser/tab is closed.

INFO: Key Features:
1. Presistent unit manually cleared
2. Stores strings only
3. Max size 5-10 MB
4. Synchronous API (blocks main thread)
*/

localStorage.setItem("username", "rafay");
localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear(); // clear all keys
localStorage.key(0);
localStorage.length;
