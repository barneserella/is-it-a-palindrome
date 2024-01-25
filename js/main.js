// declare variables for elements 
const input = document.getElementById('input');
const button = document.getElementById('button');
const response = document.getElementById('response');
// get the input value
// Smurf
button.addEventListener('click', checkIfPalindrome);
// function to check if Palindrome
function checkIfPalindrome(){
    const inputValue = input.value.toLowerCase();
    const reverseInput = input.value.split('').reverse().join('').toLowerCase();
    let y = inputValue; 
    let x = reverseInput;
    if(y === x){
        response.innerText = `Your word, ${inputValue}, is a palindrome!`
    }else{
        response.innerText = `Sorry, ${inputValue} is not a palindrome.`
    }
}
// input response into DOM

