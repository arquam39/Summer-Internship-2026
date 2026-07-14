// let products = [
//     { category: "Electronics", product: "Laptop", price: 1000 },
//     { category: "Clothing", product: "Shirt", price: 50 },
//     { category: "Electronics", product: "Phone", price: 700 },
//     { category: "Clothing", product: "Jeans", price: 80 },
//     { category: "Groceries", product: "Milk", price: 20 }
// ];

// function group(arr) {
//     let result = arr.reduce((acc, items) => {
//         if (!acc[items.category]) {
//             acc[items.category] = items.price

//         } else {
//             acc[items.category] += items.price
//         } return acc
//     }, []); return result.sort();

// }
// console.log(group(products))

// // 
// let list = [1, 2, 3, 5, 6, 7, 9, 10, 12]
// function pair(list) {
//     let result = [];
//     let left = 0;
//     let right = 0;
//     for (i = 0; i < list.length; i++) {
//         left = list[i]
//         right = list[i]
//         while (i + 1 < list.length && list[i + 1] === right + 1) {
//             i++;
//             right = list[i];
//         }
//         if (left == right) {
//             result.push(`"${left}"`)
//         } else {
//             result.push(`"${left}-${right}"`)
//         }
//     } return result
// }
// console.log(pair(list))

// let list1 = [1, 3, [3, 4, [3], 34,], [6]]
// function flat(list) {
//     result = [];
//     for (items of list) {
//         if (Array.isArray(items)) {
//             result = [...result, ...flat(items)]
//         }else{
//             result.push(items)
//         }
//     } return result
// }
// console.log(flat(list1))

// let stu = [
//     {name:"Ali", age:20},
//     {name:"Ahmed", age:25},
//     {name:"Sara", age:20},
//     {name:"John", age:25}
// ];
// function red (obj){
//     let result = obj.reduce((acc,items)=>{
//         if(!acc[items.age]){
//             acc[items.age] = [];
//         }
//         acc[items.age].push(items.name)
//         return acc;
//     },{})
//     return result
// }
// console.log(red(stu))

// function createCounter() {
//     let i = 0
//     return function () {
//         i++;
//         console.log(i)
//     }
// }


// const counter = createCounter();

// counter();
// counter();
// counter();


// function createAccount(initial) {
//     amount = initial
//     return {
//         deposit(value) {
//             amount += value;
//             console.log(` ${value} Deposited`)
//         },
//         withdraw(value) {
//             if (value <= amount) {
//                 amount -= value
//             console.log(` ${value} Withdeaw`)
//             }
//         },
//         balance(){
//             console.log(`Balance is ${amount}`)
//         }

//     }
// }
// const account = createAccount(1000);
// account.deposit(500);
// account.withdraw(300);
// account.balance();


// const users = [
//     { name: "Ali", age: 20 },
//     { name: "Ahmed", age: 25 },
//     { name: "Sara", age: 22 }
// ];

// function getNames(users) {
//     return users.map(user => {
//         return user.name;
//     });
// }

// console.log(getNames(users));

// function counter() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
// }

// counter();

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");



const cache = {};

function memorize(fn) {
    return function (id) {
        if (!cache[id]) {
            let result = fn(id)
            cache[id] = result
            console.log(`fetching user ${id}`)
            return cache[id]
        } else {
            console.log(`fetching user from cache ${id}`);
            return cache[id]
        }
    }
}
function addUser(id) {
    return {
        id: id,
        name: "user " + id
    }
}
const getUsers = memorize(addUser)
console.log(getUsers(5))
console.log(getUsers(5))
console.log(getUsers(7))
console.log(getUsers(5))

// 
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        count = 0;
        result = [];
        promises.forEach((element, index) => {
            element
                .then(data => {
                    result[index] = data;
                    count++;
                    if (count == promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject("Error")
                })
        });
    })
}
p1 = Promise.resolve("hi")
p2 = Promise.reject("hi")
p3 = Promise.resolve("hi")
promiseAll([p1, p2, p3])
    .then((data) => {
        console.log(data)
    })
    .catch((err) =>
        console.log(err))

// 
let url = "https://catfact.ninja/fact";
async function retry(url, tries) {
    for (att = 1; att <= tries; att++) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw Error("Failed to fetch")
            }
            let data = await response.json()
            
            if (data.length <100) {
                throw Error("Failed to fetch")
            }
            console.log(`${att} fetching successfull`);
            return data
        }
        catch (err) {
            console.log(`${att} request failed`)
            if (att == tries) {
                throw Error("All attempts failed")
            }
        }
    }
}
retry(url, 3)
    .then((data) =>
        console.log(data))
    .catch((err) => {
        console.log(err)
    })