//myHeading.textContent = 'theAddotey!';
/*
let iceCream = 'chocolate';
if (iceCream == 'chocolate'){
    alert('yay, I love Chocolate ice cream!');
}
    else {
        alert('Awww, but chocolate is my favorite...');
    }
*/

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

document.querySelector('html').onclick = function() {};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = `theAddotey is cool,  ${myName}`;
    }
    
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'theAddotey is cool, ' + storedName
}

myButton.onclick = function() {
    setUserName();
}