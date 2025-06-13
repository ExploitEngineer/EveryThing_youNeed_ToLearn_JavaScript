/*
INFO: IndexedDB
IndexedDB is a client-side NoSQL database that allows you to store structured data in the browser (objects, blobs, etc).


INFO: Key features:
1. Asynchronous API
2. Stores large amounts of data (100s of MBs)
3. Ideal for offline apps
4. Uses transctions and object stores
*/

const request = indexedDB.open("myDatabase", 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(["users"], "readwrite");
  const store = transaction.objectStore("users");

  store.add({ id: 1, name: "rafay", age: 21 });
}
