// ---1. Sort a list of items by a value
console.log("1. Sort a list of items by a value")
let items = [
    { name: "Item A", value: 50 },
    { name: "Item B", value: 20 },
    { name: "Item C", value: 80 },
    { name: "Item D", value: 75 },
];

for (i = 0; i < items.length; i++) {
    for (j = i; j < items.length - 1 - i; j++) {
        if (items[j].value > items[j + 1].value) {
            let min = items[j]
            items[j] = items[j + 1];
            items[j + 1] = min
        }
    }
} console.log(items);


// 3. Flatten grouped data into one list
console.log("3. Flatten grouped data into one list")
let cart = [{ category: "Fruits", items: ["Apple", "Mango", "Banana"] }];
let cart1 = [];

for (i = 0; i < cart.length; i++) {
    for (j = 0; j < cart[i].items.length; j++) {
        cart1.push({
            category: cart[i].category,
            items: cart[i].items[j]
        })
    }
} console.log(cart1);

// 5. Combine two related lists
console.log("5. Combine two related lists")
let users = [{ id: 1, name: "Ali" }, { id: 2, name: "Zain" }];
let orders = [{ id: 1, total: 200 }, { id: 2, total: 500 }];
let result = [];

for (i = 0; i < users.length; i++) {
    for (j = 0; j < orders.length; j++) {
        if (users[i].id === orders[j].id) {
            result.push({
                id: users[i].id,
                name: users[i].name,
                total: orders[j].total,
            })
        }
    }
} console.log(result);

// 2. Build a "wait before you act" function (debounce)

let searchBox = document.getElementById("searchBox");
let timer;
searchBox.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        let list = document.querySelectorAll("#itemsList li");
        let value = searchBox.value.toLowerCase();

        list.forEach(li => {
            const text = li.textContent.toLowerCase();
            if (text.includes(value)) {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        });
    }, 300);
});


// 4. Split a list into pages

let list = ["item 1", "item 2", "item 3", "item 4", "item 5",
    "item 6", "item 7", "item 8", "item 9", "item 10",
    "item 11", "item 12", "item 13", "item 14", "item 15",
    "item 16", "item 17", "item 18", "item 19", "item 20",
    "item 21", "item 22", "item 23"];

let page1 = list.slice(0, 5);
let page2 = list.slice(5, 10);
let page3 = list.slice(10, 15);
let page4 = list.slice(15, 20);
let page5 = list.slice(20, 25);

let pg1 = document.getElementById("pg1")
let pg2 = document.getElementById("pg2")
let pg3 = document.getElementById("pg3")
let pg4 = document.getElementById("pg4")
let pg5 = document.getElementById("pg5")

let ol = document.querySelector(".pageItems");

function pageDisplay(pg){
        ol.innerHTML = ""
    pg.forEach(listItems => {
        let li = document.createElement("li");
        li.innerText = listItems;
        ol.appendChild(li);
    })
}

pg1.addEventListener("click", () => {
    pageDisplay(page1);
})
pg2.addEventListener("click", () => {
    pageDisplay(page2);
})
pg3.addEventListener("click", () => {
    pageDisplay(page3);
})
pg4.addEventListener("click", () => {
    pageDisplay(page4);
})
pg5.addEventListener("click", () => {
    pageDisplay(page5);
})


// 6. Remember an answer so you don't ask twice

let localName = document.getElementById("name");
const setname = document.querySelector(".setname");

setname.addEventListener("click", () => {
    localStorage.setItem("name", localName.value );
    localName.value = ""
});

const getname = document.querySelector(".getname");

getname.addEventListener("click", () => {
    localName.value = localStorage.getItem("name");
});


