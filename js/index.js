alert('Hello!');

let surName;

let userName = 'John';

alert(userName);

let userAge = parseFloat(prompt('Enter your age'));

const message = 'Yours age is ' + userAge;

alert(message);

const newAge = userAge + 1;

alert(newAge);

// Number - NaN, Infinity
// String
// Boolean: true, false
// undefined
// null
// Object
// From 2015:
// Symbol

if (userAge < 18) { // <= > == === != !== || &&
    alert('You are not adult');
} else if (userAge > 80 && userAge < 100) {
    alert('You are between 80 and 100');
} else if (userAge > 100) {
    alert('You have seen a lot in your life');
} else {
    alert('You are adult');
}
