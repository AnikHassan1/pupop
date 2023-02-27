// const number=[12,34,53,21,2];
// sum=0;
// for(const num of number){
//     sum=sum+num;
//     console.log(sum);
// }
const bottle={
    color: 'yellow',
    price: 50,
    Capacity : 1
};
// // console.log(Object.keys(bottle));
// const keys=(Object.keys(bottle));
// for(const key of keys){
//     console.log(key,bottle[key]);
// }
// 2nd option
// for( const key in bottle){
//     console.log(key);
// }
const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);
const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);
const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());