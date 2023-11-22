const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObjet={...obj1, ...obj2};
console.log(mergedObjet);