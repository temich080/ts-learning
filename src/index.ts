// 47 Rest Parameters
// const add = (...others: number[]) => {
//     let result = 0;
//     for (let num of others) result += num;
//     return result;
// }
// OR
// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     }, 0);
// }
// console.log(add(22, 11, 50, 50, 100))


// 48 Arrays and Objects Destructuring
// const hobbies = ['football', 'hockey'];
// const [ hobby1, hobby2 ] = hobbies;
// const person = {
//     firstName: 'Alex',
//     age: 26
// }
// const {firstName: userName, age} = person;
// NB: in this case userName is alias for firstName;
// console.log(userName, age);

// End of module