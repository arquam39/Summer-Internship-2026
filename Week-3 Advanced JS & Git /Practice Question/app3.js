// 1. Find Duplicate Numbers
let list = [1, 2, 3, 4, 2, 5, 6, 3, 1]

function findDub(arr) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                result.push(arr[i])
            }
        }
    } return result
}
console.log(findDub(list))

// 2. First Non-Repeating Character
let str = "aabbcdde";

function noRepeat(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1] && str[i] != str[i - 1]) {
            return str[i]
        }
    }
}
console.log(noRepeat(str))


// 3. Frequency Counter
let list2 = ["apple", "banana", "apple", "orange", "banana", "apple"]

function freq(arr) {
    result = {}
    for (items of arr) {
        if (!result[items]) {
            result[items] = 1
        } else {
            result[items]++
        }
    } return result
}
console.log(freq(list2))

// 4. Group Objects
const users = [
    { name: "Ali", city: "Lahore" },
    { name: "Sara", city: "Karachi" },
    { name: "Ahmed", city: "Lahore" },
    { name: "Zain", city: "Karachi" },
];
function group(arr) {
    result = arr.reduce((acc, items) => {
        if (!acc[items.city]) {
            acc[items.city] = []
        }
        acc[items.city].push(items)
        return acc
    }, {})
    return result
}
console.log(group(users))

// 5. Flatten an Array
let list3 = [1, [2, [3, 4], 5], 6]

function flatten(arr) {
    let result = [];
    for (items of arr) {
        if (Array.isArray(items)) {
            result = [...result, ...flatten(items)]
        } else {
            result.push(items)
        }

    } return result
}
console.log(flatten(list3))

// 6. Deep Clone
let obj2 = { name: "arquam", age: 21, address: { city: "okara" } };
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }
    if (Array.isArray(obj)) {
        let copy = []
        for (items of obj) {
            copy.push(deepClone(items))
            return copy
        }
    }
    let copy = {};
    for (items in obj) {
        copy[items] = deepClone(obj[items])
    } return copy
}
console.log(deepClone(obj2))

// myMap
let list4 = [2, 3, 4, 5, 5, 6];
function myMap(arr, callback) {
    result = [];
    for (items of arr) {
        result.push(callback(items))
    } return result;
}
console.log(myMap(list4, x => x * 2))

// myfilter
function myfilter(arr, callback) {
    result = [];
    for (items of arr) {
        if (callback(items)) {
            result.push(items)
        }
    } return result;
}
console.log(myfilter(list4, x => x % 2 == 0))

// myRedudce
function myReduce(arr, callback, initial) {
    let acc = initial;
    for (items of arr) {
        acc = callback(acc, items);
    } return acc;
}
console.log(myReduce(list4, (acc, x) => acc + x, 0))

// 10. Debounce
let input = document.getElementById("input");
let timer;
function debounce(fn, delay) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}
input.addEventListener("input", debounce(() => {
    console.log("printing by debounce with 300ms delay")
}, 300)
);

// 11. Throttle
function throttle(fn, delay) {
    let wait = false;
    return function () {
        if (wait) {
            return
        }
        fn()
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay)
    }
}

window.addEventListener("scroll", throttle(() => {
    console.log("printing by throttle with 500ms delay")
}, 500)
)

// 12. Memoization
let cache = {};
function momorize(fn) {
    return function (num) {
        if (!cache[num]) {
            console.log("calculating from square")
            cache[num] = fn(num)
            return console.log(cache[num])
        } else {
            console.log("fetching from cache")
            return console.log(cache[num])
        }
    }
}

const square = momorize(x => x * x);
square(6);
square(6);

// 13. Retry API
// let url = "https://catfact.ninja/fact";
// async function retry(url, tries) {
//     for (att = 1; att <= tries; att++) {
//         try {
//             let response = await fetch(url);
//             if (!response.ok) {
//                 throw Error("Failed to fetch")
//             }
//             let data = await response.json()

//             if (data.length <100) {
//                 throw Error("Failed to fetch")
//             }
//             console.log(`${att} fetching successfull`);
//             return data
//         }
//         catch (err) {
//             console.log(`${att} request failed`)
//             if (att == tries) {
//                 throw Error("All attempts failed")
//             }
//         }
//     }
// }
// retry(url, 3)
//     .then((data) =>
//         console.log(data))
//     .catch((err) => {
//         console.log(err)
//     })


// 19. Move Zeroes
let list5 = [0, 1, 0, 3, 12]
function zeroOrder(arr) {
    let zero = []
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            zero.push(...arr.splice(i, 1))
            arr.push(...zero)
        }
    }
    return arr
}
console.log(zeroOrder(list5))

// 21. Longest Word
let str3 = "I love learning JavaScript"
function longestWord(str){
    let temp = str.split(" ")
    let max = temp[0]
    for(i=0; i<temp.length; i++){
        if(temp[i].length > max.length){
            max = temp[i]
        }
    }
    return max
}
console.log(longestWord(str3))

// 22. Reverse Words
function reverseWord (str){
    let temp = str.split(" ").reverse().join(" ")
    return temp
}
console.log(reverseWord(str3))


