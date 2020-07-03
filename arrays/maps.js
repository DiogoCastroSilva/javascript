const diogo = { name: 'Diogo' };
const katie = { name: 'Katie' };
// Maps
// Store key-value pairs, order guaranteed, duplicates  keys are not allowed just values
const personMapData = new Map([[diogo, { birthday: new Date(1992, 4, 17)}]]);

// Set
personMapData.set(katie, { birthday: new Date(1993)});

// Get
personMapData.get(katie); // { birthday: new Date(1993) }

// loop
for (const entry of personMapData.entries()) {
    console.log(entry); // [ { key }, { value } ]
}

for (const [key, value] of personMapData.entries()) {
    console.log(key); // { key }
    console.log(value); // { value }
}

for (const key of personMapData.keys()) {
    console.log(personMapData.get(key));
}

const personWeak = new WeakMap();
personWeak.set(diogo);
