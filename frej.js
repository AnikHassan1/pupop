const bottle={
    color: 'yellow',
    price: 50,
    Capacity : 1
};
//  Object All keys outPut jnnu (object.keys)
//  Object All keys outPut jnnu (object.values)
// console.log(Object.values(bottle));
// console.log(Object.entries(bottle));
// Object.seal(bottle)
// Object.seal(bottle)
Object.freeze(bottle);
console.log(bottle);
delete bottle.Capacity;
// console.log(bottle);