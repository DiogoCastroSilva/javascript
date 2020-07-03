// Sets
// Order not guaranteed and duplicates are not allowed, no index access
const ids = new Set([1, 2, 3]);

// Validate if set has value
ids.has(1);

// Adding values
ids.add(1); // [1, 2, 3]
ids.add(4); // [1, 2, 3, 4]

// Removing
ids.delete(1); // [2, 3]
ids.delete(5); // [2, 3] -> No error

// loop
for(const entry of ids.entries()) {
    console.log(entry);
}


// WeakSets -> has less methods
const cow = { name: 'cow' };
const animals = new WeakSet();
animals.add(cow);

