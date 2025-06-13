/*
INFO: Cookies
Small pieces of data stored in the browser and sent with every HTTP request to the same origin

INFO: Key features:
1. Small (max-4KB)
2. Used for authentication, tracking, etc.
3. Can have expiration, domain, path, and secure flags
4. Accessible via document.cookie.
*/

document.cookie = "username=rafay; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

console.log(document.cookie); // "username=rafay"

document.cookie = "username=admin";

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
