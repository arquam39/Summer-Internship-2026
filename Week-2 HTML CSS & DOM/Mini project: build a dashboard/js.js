var navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.right = "0";
}
function hideMenu() {
    navlinks.style.right = "-200px";
}

// --- blog posts
let url = "https://jsonplaceholder.typicode.com/posts";
let pg1 = document.querySelector(".pg1")
let pg2 = document.querySelector(".pg2")
let pg3 = document.querySelector(".pg3")
let pg4 = document.querySelector(".pg4")
let pg5 = document.querySelector(".pg5")

fetch(url)
    .then(res => res.json())
    .then(posts => {

        displayPosts(posts.slice(0, 5));

        pg1.onclick = () => displayPosts(posts.slice(0, 5));
        pg2.onclick = () => displayPosts(posts.slice(5, 10));
        pg3.onclick = () => displayPosts(posts.slice(10, 15));
        pg4.onclick = () => displayPosts(posts.slice(15, 20));
        pg5.onclick = () => displayPosts(posts.slice(20, 25));
    });

function displayPosts(posts) {
    let blogs = document.querySelectorAll(".blog-data");

    posts.forEach((post, index) => {
        blogs[index].querySelector("h4").textContent = post.title;
        blogs[index].querySelector("p").textContent = post.body;
    });

}

// --users table
let url2 = "https://jsonplaceholder.typicode.com/users";
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");
let user3 = document.querySelector(".user3");
let user4 = document.querySelector(".user4");

fetch(url2).then(res => res.json())
    .then(users => {
        displayUsers(users.slice(0, 3));
        user1.addEventListener("click", () => {
            displayUsers(users.slice(0, 3));
        }); user2.addEventListener("click", () => {
            displayUsers(users.slice(3, 6));
        }); user3.addEventListener("click", () => {
            displayUsers(users.slice(6, 9));
        });
    });

function displayUsers(users) {
    let usertbs = document.querySelectorAll(".user-tb");

    users.forEach((user, index) => {
        usertbs[index].querySelector(".tbname").textContent = users[index].name
        usertbs[index].querySelector(".tbusername").textContent = users[index].username
        usertbs[index].querySelector(".tbemail").textContent = users[index].email
        usertbs[index].querySelector(".tbweb").textContent = users[index].website
    })
}