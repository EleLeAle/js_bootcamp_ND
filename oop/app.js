class Animals{
    constructor(name, sound,height, weight) {
        this.name = name;
        this.sound = sound;
        this.height=height;
        this.weight=weight;
    }
    log(){
        console.log(this.name, this.height)
        return 'fine';

    }
}
//new keyword instanciates the animal class and create obj
const steven = new Animals("Steven","Rawr", "6", "180");
const nikki = new Animals("Nikki", "Bing","5'2","104")

console.log(steven.log(), nikki);

class Bird extends Animals{

    constructor(name, sound, height,weight,feathers,beak) {
        super(name,sound,height,weight);
        this.feathers = feathers;
        this.beak = beak;
    }
}

const nuraly = new Bird("Nuraly","kwaar","6.2","180", "soft","crook");

console.log(nuraly);



class Bank{
    checking;
    #savings;

    constructor(initialBalance) {
        this.checking=initialBalance;
        this.#savings = 2000;
    }

    deposit(amount){
        this.checking += amount;
    }
    getSaving(){
        return this.#savings
    }
}

const myAccaunt = new Bank(0);
console.log(myAccaunt,myAccaunt.getSaving());

/* Problem 1: Person Class
Create a Person class with the following:

A constructor that takes a name and age.
A method called introduce() that logs a string like:
 console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
Instantiate at least two instances of the Person class and call their introduce() methods.*/

console.log(`\n111111111111111111111111111111111111111111111111\n`);

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
    }
}

const pete = new Person('Pete', 22);
const andrew = new Person('Andrew', 29);
const olivia = new Person('Olivia', 29);
const liam = new Person('Liam', 29);

let person =[pete, andrew, olivia, liam];
person.forEach(function (person){
    person.introduce();
})

/*Problem 2: Inheritance with Teacher
Create a Teacher class that extends Person.
Add a new property subject to the Teacher class that is set through the constructor.
Create a method teach() that logs a sentence about the teacher teaching their subject.*/

console.log(`\n222222222222222222222222222222222222222222222222222222222222\n`)

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach(){
        console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old. I'm a ${this.subject}  teacher`)
    }
}
const lila = new Teacher('Lila',22,'math');
const david = new Teacher('David',56,'Arts');
const john = new Teacher('John',34,'Technology');
const michael = new Teacher('Michael',24,'Vocational');

let teachers =[lila, david,john, michael];
teachers.forEach(function (person){
    person.teach();
})

/*Problem 3: Overriding Methods
Extend the Teacher class further to create a SubstituteTeacher class.
Override the teach() method so that it logs a different message, for example:
console.log(`${this.name} (a substitute) is temporarily teaching ${this.subject}.`);
Create an instance of SubstituteTeacher and call its methods.*/

console.log(`\n3333333333333333333333333333333333333333333333333333333\n`)

class SubstituteTeacher extends Teacher{
    constructor(name,age, subject) {
        super(name,age, subject);
    }

    teach(){
        console.log(`${this.name} (a substitute) is temporarily teaching ${this.subject}.`);
    }
}

const lula = new SubstituteTeacher('Lula',26,'English')
const den = new SubstituteTeacher('Den',42,'Science')
const william = new SubstituteTeacher('William',35,'History')
const james = new SubstituteTeacher('James',86,'Health')
let substituteTeacher = [lula, den, william, james];
substituteTeacher.forEach(function (person){
    person.teach()
})

/*Problem 4: Manage a Collection of Objects
Create an empty array called people.
Add several Person and Teacher objects to this array.
Loop through the array and:
For any Person, call introduce().
For any Teacher, call teach().
(Optional) Use instanceof to check if an element is a Teacher or not.
 */

console.log(`\n444444444444444444444444444444444444444444444444444444444444444\n`)

let people =[];

people.push(lula, lila, pete, william, james, den, david, john, michael, andrew, olivia, liam);

function shuffleArray(people){
    for (let i = people.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [people[i], people[j]] = [people[j], people[i]];
    }
    return people
}
people = shuffleArray(people);


people.forEach(function (person){
    // console.log('forEach',person);
    // console.log('is person teacher?', person instanceof Teacher );
    let bool = person instanceof Teacher;
    switch (bool){
        case true:
            // console.log('teacher');
            person.teach();
            break;
        case false:
            // console.log('person');
            person.introduce();
            break
    }
})




