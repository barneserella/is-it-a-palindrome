// declare variables for elements 
const input = document.getElementById('input');
const button = document.getElementById('button');
const response = document.getElementById('response');
// get the input value
// Smurf
button.addEventListener('click', checkIfPalindrome);
// function to check if Palindrome
function checkIfPalindrome(){
    const inputValue = input.value.split(' ').join('').toLowerCase();
    const reverseInput = input.value.split(' ').join('').split('').reverse().join('').toLowerCase();
    let y = inputValue; 
    let x = reverseInput;
    if(y === x){
        response.innerText = `Your word, ${input.value}, is a palindrome!`
    }else{
        response.innerText = `Sorry, ${input.value} is not a palindrome.`
    }
    console.log(y);
    console.log(x);
}
// input response into DOM



