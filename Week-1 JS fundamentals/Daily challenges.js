// Reverse a string without using reverse()

function reverseString(str) {
    let reversed = "";
    str = str.split("")
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }return console.log(reversed)
}
reverseString("hello world")

// Check if a string is a palindrome, without reverse()


function isPalindrome(str) {
    let reversed = "";
    str = str.split("")
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }return console.log(reversed === str.join(""));
}
isPalindrome("hello world");

// Find the largest and smallest number without Math.max/Math.min

function findmaxmin(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        } else if (arr[i] < min){
            min = arr[i]
        }
    }return console.log(`largest number: ${max} ,smallest number:${min}`);
}
findmaxmin([22, 32, 14, 45, 69, 7, 8, 9, 10])

// Find duplicates in an array

nums = [2,5,6,3,2,6,6,4,8,0,1];
dublicate = []
for (let i = 0; i< nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
        if (nums[i] === nums[j] && !dublicate.includes(nums[i])){
            dublicate.push(nums[i])
        }
    }
}
console.log(dublicate);

// Find what two arrays have in common, without using filter() and includes() together

arr1 = [1,3,5,6,7];
arr2 = [2,3,7,8,9];
common = [];
for (i = 0; i < arr1.length;i++){
    for ( j = 0; j< arr2.length; j++){
        if ( arr1[i] == arr2[j]){
            common.push(arr1[i])
        }
    }
}
console.log(arr1)
console.log(arr2)
console.log(`common elements are ${common}`);

// Find the missing number in [1,2,4,5]

function Missing(arr) {
    let missing = [];
    for (let i = 1; i <= 5; i++){
        if (!arr.includes(i)){
            missing.push(i)
        }
    }
    return console.log(`Missing number: ${missing}`);
}
Missing([1, 2, 4, 5]);
