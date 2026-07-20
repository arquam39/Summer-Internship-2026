// 1. Build your own version of map
console.log("1. Build your own version of map");
let list1 = [1, 2, 3, 4, 5];

function myMap(list, operation) {
    let mapped = [];
    for (item of list) {
        mapped.push(operation(item)) 

    } return console.log(mapped);
} 

myMap(list1, x => x * 2);

// Build your own version of filter

let list2 = [1, 2, 3, 4, 5];
console.log("1. Build your own version of filter");
function myfilter(list, callback) {
    let mapped = [];
    for (items of list) {
        if (callback(items) == true) {
            mapped.push(items);
        }
    } console.log(mapped);
};
myfilter(list2, x => x % 2 == 0);


// 4. Group items by a shared value
console.log("4. Group items by a shared value");

let list4 = [{ name: "Ali", dept: "Sales" }, { name: "Sara", dept: "Tech" }, { name: "Zia", dept: "Math" }];

let grouped = list4.reduce((gro, item) => {
    if (!gro[item.dept]) {
        gro[item.dept] = [];
    }
    gro[item.dept].push(item.name)
    return gro;
}, {})
console.log(grouped);


// 2. Debounce vs throttle, what's the difference?
console.log("2. Debounce vs throttle, what's the difference?")

function throttle(a, delay) {
    let waiting = false;
    return function (b) {
        if (waiting) {
            return
        }
        a(b);
        waiting = true;
        setTimeout(() => {
            waiting = false;
        }, delay)
    }
}
const scrolling = throttle(() => {
    console.log("throttle scrolling...........");
}, 300);

window.addEventListener("scroll", scrolling)

let timer;
let input = document.querySelector("#name");
input.addEventListener("input", () => {
    clearInterval(timer);
    timer = setTimeout(() => {
        console.log("debounce typing.........")
    }, 300)
});


// 5. Make a true copy of an object
console.log("Shallow Copy")
console.log("5. Make a true copy of an object")
let obj = { name: "arquam", age: 21, address: { city: "okara" } };
let copy = {};

for (item in obj) {
    copy[item] = obj[item];
}

copy.name = "Ayesha";
copy.address.city = "lahore";
console.log(obj);
console.log(copy);

// --Deep copy---
console.log("Deep Copy")
let obj1 = { name: "arquam", age: 21, address: { city: "okara" } };
let copy1 = deepClone(obj1);


function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        const copy = [];

        for (let item of obj) {
            copy.push(deepClone(item));
        }
        return copy;
    }
    const copy = {};
    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}

copy1.name = "Ayesha";
copy1.address.city = "lahore";
console.log(obj1);
console.log(copy1);



// // 3. Retry something that failed
console.log("3. Retry something that failed")
async function fetchWithRetry(url, retries) {
    for (attempt = 1; attempt <= retries; attempt++) {
        try {
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error("cannot fetch");
            }
            let data = await response.json()
            if (data.length < 100) {
                throw new Error("length was less than 100")
            }
            return data;
        } catch (err) {
            console.log(`attempt ${attempt} failed, ${err}`)
            if (attempt == retries) {
                throw new Error("attempts limit reached")
            }
        }
    }
}

fetchWithRetry("https://catfact.ninja/fact", 3)
    .then((data) => {
        console.log(data);
    })
    .catch((Error) => {
        console.log("attempts limit reached")
    })


// 6. Build your own version of Promise.all()
console.log("6. Build your own version of Promise.all()")
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        promises.forEach((element, index) => {
            element
                .then((value) => {
                    result[index] = value;
                    count++
                    if (count == promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err)

                })
        });
    });
}

let p1 = Promise.resolve("apple");
let p2 = Promise.reject("faild to fetch");
let p3 = Promise.resolve("coin");

myPromiseAll([p1, p2, p3])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    })












// function saveData(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if (speed > 4) {
//             resolve("saved");
//         } else {
//             reject("cannot save");
//         }
//     })
// }
// saveData("hello")
// .then((result)=>{
//     console.log(`data1 saved`);
//     console.log(result);
//     saveData("world..!");
// })
// .then((result)=>{
//     console.log(`data2 saved`);
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("not saved")
//     console.log(error);
// })
// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("sussess")
//             reject("some error")
//         }, delay);
//     })
// }
// changeColor("red", 1000)
//     .then(() => {
//         console.log(`color changed to red`);
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log(`color changed to orange`);
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log(`color changed to green`);
//         return changeColor("pink", 1000);
//     })
//     .then(()=>{
//         console.log(`color changed to pink`);
//     })
//     .catch(() => {
//         console.log("error")
//     })
// let url="https://catfact.ninja/fact";
// fetch(url)
//  .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log(data1.fact)
// })
// .catch((err)=>{
//     console.log("err")
// })
