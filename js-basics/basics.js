console.log('Hello World');
var firstName = 'Caleb'
let lastName = 'Kwakye'

const fullname = firstName + ' ' + lastName
console.log(firstName)
console.log(lastName)
console.log(fullname)

//Strings

let greeting = 'Hello! My name is ' + fullname
console.log(greeting)
let greeting2 = `Hello My name is ${fullname}`
console.log(greeting2)
console.log(greeting[5])
console.log(greeting.includes("this"))
console.log(greeting.split(" "))


//Objects literals
let person = {
    firstName: "Caleb",
    lastName : "Kwakye",
    age: 23,
    address: {
        number : 5,
        street: "410 Westhampton Way",
        city : "Richmond",
        state: "Virginia"
    },

    getFormmattedAddress: function() {
        return (this.address.number + " " + this.address.street + " " + this.address.city + " " + this.address.state);
    }

}

console.group(person)
console.log(person.address)


//Arrays

let fruits = ["orange", "pear", "apple"]
fruits.push("strawberry");

console.log(fruits);

//Higher order array functions
const filteredFruits = fruits.filter(
    (fruit) => { return fruit

    }
);


//Ternary operator
let nums = 10
const numGreaterThanTen = nums > 10 ? true : false
console.log(numGreaterThanTen)

//For loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])

}

for(const fruit of fruits){
    console.log(fruit)
}

fruits.forEach((fruit) => {
    console.log(fruit)
})


//While loop
let index = 0

while (index < fruits.length){
    console.log(fruits[index]);
    index++;
}


// Functions

let todos = [
    {
        id: 1,
        title: "Learn HTML, CSS and JS",
        completed: false
    },{
        id: 2,
        title: "Write code",
        completed: false
    },{
        id: 3,
        title: "Get a SWE job",
        completed: false
    }]



function getAllUncompletedTasks(todos){
    return todos.filter((todo) => !todo.completed)
}

function isTaskDone(todo){
    return todo.completed
}

alert("This is a test alert");

// const getCompletedTasks

function fib(){
    let first = 0
    let second = 1
    let res;

    for(let i = 0; i<=10; i++){
        // console.log(i)
        if (i < 2){
            console.log(i)
        }else{
            res = first + second
            first  = second
            second = res
            console.log(res)
        }
    }

}

fib()


