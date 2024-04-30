const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

//empty string sends an alert
function checkEmpty(){
    if (textInput.value === '') {
        alert('Please input a value');
        return;
    }
};

//You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//all single letters is a palindrome, should check first
function singleDrome(){
    if (textInput.value.length === 1) {
        //alert(`${textInput.value} is a palindrome.`);
        result.textContent = textInput.value + " is a palindrome.";
    } else {
        checkPalindrome(textInput.value);
    }
};

function checkPalindrome(inputValue){
    //store input to display initial value
    //const initialValue = inputValue;

    //reverses input as is.
    const reversedValue = inputValue.split("").reverse().join("");

    //modify string to remove all non-alphanumeric characters and turn into same case.
    const modifiedValue = inputValue.match(/[a-zA-Z0-9]/g).join("").toLowerCase();

    //reverse modified value
    const reversedModifiedValue = modifiedValue.split("").reverse().join("");

    //check to see if the input value is a palindrome as is.
    if (inputValue === reversedValue || modifiedValue === reversedModifiedValue){
        //alert(`${inputValue} is a palindrome`)
        result.textContent = inputValue + " is a palindrome.";
    } else {
        //alert(`${inputValue} is not a palindrome`)
        result.textContent = inputValue + " is not a palindrome.";
    }
    textInput.value = '';
}

checkButton.addEventListener("click", checkEmpty);
checkButton.addEventListener("click", singleDrome);