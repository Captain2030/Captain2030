// Function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}

// Function to get input from the user and display the result
function checkEven() {
    const num = document.getElementById('numberInput').value; // Get the value from the input
    if (num === "") {
        document.getElementById('result').innerText = "Please enter a number"; // Handle empty input
        return;
    }
    
    const resultText = isEven(parseInt(num)) ? `${num} is even` : `${num} is odd`; // Determine even or odd
    document.getElementById('result').innerText = resultText; // Display result in the <p> tag
}
