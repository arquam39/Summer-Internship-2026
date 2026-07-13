// 1. Find the Second Highest Score
let obj = [
    { name: "Ali", score: 110 },
    { name: "Sara", score: 100 },
    { name: "Ahmed", score: 105 },
    { name: "Zain", score: 88 }
];

function secondHighest(obj) {
    let high = obj[1];
    let second = obj[0];
    for (items of obj) {
        if (items.score >= high.score) {
            second = high;
            high = items;
        } else if (high.score > items.score && items.score > second.score) {
            second = items
        }
    } return second;
}
console.log(secondHighest(obj));

// 4. Capitalize Every Word
let str = "hello world from javascript";
let str1 = str.toUpperCase()
console.log(str1)

// 5. Count Vowels
let str2 = "Science";
function findVowals(str) {
    let vowals = "aeiouAEIOU"
    let count = 0;
    for (items of str) {
        if (vowals.includes(items)) {
            count++
        }
    } return count
}
console.log(findVowals(str2))

// 7. Rotate Array
let list = [1, 2, 3, 4, 5];
function rotate(list) {
    let temp = list.shift();
    list.push(temp);
    return list
}
console.log(rotate(list))

// 8. Find Frequency
let list2 = ["apple", "banana", "apple", "orange", "banana"];
function frequency(list) {
    let frequency = {};
    for (items of list) {
        if (!frequency[items]) {
            frequency[items] = 1;
        } else {
            frequency[items] += 1;
        }
    } return frequency
}
console.log(frequency(list2))

// 10. Count Character Frequency
let str3 = "mississippi";
function freq(str) {
    let freq = {};
    for (items of str) {
        if (!freq[items]) {
            freq[items] = 1
        } else {
            freq[items]++
        }
    } return freq
}
console.log(freq(str3))

// 12. Merge Student Lists
let list3 = ["ali", "zain",];
let list4 = [" HAssan", "hera"];

let list5 = [...list3, ...list4];
console.log(list5)

// 13. Remove Inactive Users
let obj2 = [{ name: "Arquam", active: true }, { name: "Zia", active: false }, { name: "Nasir", active: true }];
function removeInactive(list) {
    let active = [];
    for (items of list) {
        if (items.active == true) {
            active.push(items)
        }
    } return active;
}
console.log(removeInactive(obj2))

// 16. Count Orders Per Customer
let list6 = [
    { id: 1 },
    { id: 2 },
    { id: 1 },
    { id: 3 },
    { id: 2 },
    { id: 1 }
];
function count(list) {
    let result = {};
    for (items of list) {
        if (!result[items.id]) {
            result[items.id] = 1;
        } else {
            result[items.id]++
        }
    } return result;
}
console.log(count(list6))

// 18. Find Difference Between Arrays
let A = [1, 2, 3, 4]
let B = [3, 4]
function diff(a, b) {
    let diff = [];
    for (items of a) {
        if (!b.includes(items)) {
            diff.push(items)
        }
    } return diff
}
console.log(diff(A, B))

// 20. Flatten Nested Arrays
let list7 = [[1, 2], [3], [4, 5]]
let result = [];
for (let item of list7) {
    result = [...result, ...item];
}
console.log(result);

// 21. Implement myFilter()
let list8 = [2, 6, 8, 9, 4, 1, 7];
function myFind(list, callback) {
    let result = [];
    for (items of list) {
        if (callback(items) == true) {
            result.push(items)
        }
    } return result;
}
console.log(myFind(list8, x => x % 2 == 0))

// 22. Implement myReduce()
let list9 = [2, 6, 8, 9, 4, 1, 7];
function myReduce(arr, callback, initial) {
    acc = initial;
    for (item of arr) {
        acc = callback(acc, item);
    } return acc;
}
console.log(myReduce(list9, (acc, x) => acc + x, 0));


// 35. Dark Mode Toggle
let button = document.getElementById("mode");
button.onclick = function () {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.className
    );
}
if (localStorage.getItem("theme")) {
    document.body.className =
        localStorage.getItem("theme");
}

// 36. Image Slider
let images = [
    "img/img1.jfif",
    "img/img2.jfif",
    "img/img3.jfif",
];
let index = 0;
let img = document.getElementById("image");
img.src = images[index];

document.getElementById("next")
    .onclick = function () {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        img.src = images[index];
    }
document.getElementById("previous").addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    img.src = images[index];
})

// 38. Drag and Drop List
let itemss = document.querySelectorAll("li");
itemss.forEach(item => {
    item.addEventListener(
        "dragstart",
        () => {
            item.style.opacity = "0.5";
        })
    item.addEventListener(
        "dragend",
        () => {
            item.style.opacity = "1";
        })
})

// 41. Promise Timeout
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Data");
//         }, 3000)
//     })
// }
// function timeoutPromise(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Timeout");
//         }, time)
//     })
// }
// Promise.race([
//     fetchData(),
//     timeoutPromise(5000)
// ])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });


let url = "https://catfact.ninja/fact";
fetch(url).then((res) => {
    // console.log(res)
    return res.json()
})
    .then(data => {
        console.log(data)
        return data;
    })
    .then(data => {
        console.log(data.fact);
        return data
    })
    .then(data => {
        console.log(data.length);
    })
    .catch(err => {
        console.log(err)
    })

async function getFact() {
    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log(data);
        console.log(data.fact)
    }
    catch(err){
        console.log("error")
    }
}getFact()
