// Three students scored [80, 92, 75], given as [{name, score}]. Write a function that returns the name of the highest scorer.

let students = [{name:"Ali",score:80},{name:"Arquam",score:92},{name:"Zain",score:75}]
function highestScore (str){
    highest = str[0];
    for (let i = 0 ; i < str.length; i++){
        if ( str[i].score > highest.score){
            highest = str[i]
        }
    }return console.log(highest.name);
}
highestScore(students);



// A teacher has 23 candies to split evenly among 5 students. Write a function that returns how many candies each student gets, and how many are left over.

let total = 23;
let students = 5;
function divider (num, stu){
    count = 0;
    remaining = num;
    while(remaining >= stu){
        count ++;
        remaining -= stu;
    }return console.log(`Each student gets ${count} candies and ${remaining} are left over`);
}
divider(total,students);


// A CRM holds 10 contacts, and 4 of them are marked as duplicates. Write a function that returns the percentage that's clean.

total = 10;
dublicate = 4;

function cleanpercenntage (num,same){
    let remaining = num - same;
    clean = (remaining/num)*100
    return console.log(`Clean percentage is: ${clean}%`)
}
cleanpercenntage(total,dublicate);