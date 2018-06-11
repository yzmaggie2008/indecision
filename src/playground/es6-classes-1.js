class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
    getGretting() {
        //return 'Hi! I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGretting() {
        let homeLocation = super.getGretting();
        
        if(this.hasLocation()) {
            homeLocation += ` I'm visiting from ${this.location}.`;
        }
        return homeLocation;
    }
}
const me = new Traveler('Maggie', 26, 'San Jose');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());

// const me = new Person('Maggie', 26);
// console.log(me.getGretting());
// console.log(me.getDescription());
// const other = new Person();
// console.log(other.getGretting());
// console.log(other.getDescription());