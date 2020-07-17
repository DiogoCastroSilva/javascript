const storeBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');

// Index DB
const dbRequest = indexedDB.open('StorageDummy', 1);
let db;

dbRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    const objStore = db.createObjectStore('products', { keyPath: 'id' });

    objStore.transaction.oncomplete = function (e) {
        const productStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');

        productStore.add({
            id: 'p1',
            title: 'Firts Product',
            price: 12.99,
            tags: ['Expensive', 'Luxury'],
        });
    };
};

dbRequest.onsuccess = function (e) {
    db = e.target.result;
};

dbRequest.onerror = function (e) {
    console.log('ERROR INDEX DB', e);
};

const getProductStore = () => {
    let productStore;
    if (db) {
        return productStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');
    }
    return productStore;
}

storeBtn.addEventListener('click', () => {
    const productStore = getProductStore();
    if (productStore) {
        productStore.add({
            id: 'p2',
            title: 'Second Product',
            price: 11.89,
            tags: ['Expensive', 'Luxury'],
        });
    }
});

retriveBtn.addEventListener('click', () => {
    const productStore = getProductStore();
    if (productStore) {
        const request = productStore.get('p2');
        request.onsuccess = function() {
            console.log(request.result);
        }
    }
});
