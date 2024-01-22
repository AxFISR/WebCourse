//default
let isSecondMode = false;


// Function to handle button clicks
const handleButtonClick = (button) => {
    const displayArea = document.querySelector('.display-area');
    let currentValue = displayArea.value;
    const buttonText = button.textContent;

    // Toggle background color for the "2nd" button
    if (buttonText === '2nd') {
        button.classList.toggle('active');
    }


    // Function to toggle the "2nd" mode
    const toggleSecondMode = () => {
        isSecondMode = !isSecondMode;

        // Update button labels based on the "2nd" mode state
        const buttonsToToggle = document.querySelectorAll('.button-row:not(.button-group) .button:first-child');
        buttonsToToggle.forEach((button) => {
            if (isSecondMode) {
                switch (button.textContent) {
                    case 'x²':
                        button.textContent = 'x³';
                        break;
                    case '√':
                        button.textContent = '∛';
                        break;
                    case 'x^y':
                        button.textContent = 'y√x';
                        break;
                    case '10^x':
                        button.textContent = '2^x';
                        break;
                    case 'log':
                        button.textContent = 'logx(y)';
                        break;
                    case 'ln':
                        button.textContent = 'e^x';
                        break;
                    // Add more cases for other buttons if needed
                }
            } else {
                // Reset to default labels
                switch (button.textContent) {
                    case 'x³':
                        button.textContent = 'x²';
                        break;
                    case '∛':
                        button.textContent = '√';
                        break;
                    case 'y√x':
                        button.textContent = 'x^y';
                        break;
                    case '2^x':
                        button.textContent = '10^x';
                        break;
                    case 'logx(y)':
                        button.textContent = 'log';
                        break;
                    case 'e^x':
                        button.textContent = 'ln';
                        break;
                    // Add more cases for other buttons if needed
                }
            }
        });
    };

    switch (buttonText) {
        case '2nd':
            toggleSecondMode();
            break;
        case 'C':
            displayArea.value = '';
            break;
        case '⌫':
            displayArea.value = currentValue.slice(0, -1);
            break;
        case '=':
            try {
                displayArea.value = eval(currentValue);
            } catch (error) {
                displayArea.value = 'Error';
            }
            break;
        case 'x²':
            displayArea.value += '**2';
            break;
        case '1/x':
            displayArea.value = 1 / eval(currentValue);
            break;
        case '|x|':
            displayArea.value = Math.abs(eval(currentValue));
            break;
        case 'exp':
            displayArea.value = Math.exp(eval(currentValue));
            break;
        case 'mod':
            displayArea.value += '%';
            break;
        case '√':
            displayArea.value = Math.sqrt(eval(currentValue));
            break;
        case 'x^y':
            displayArea.value += '**';
            break;
        case '(':
            displayArea.value += '(';
            break;
        case ')':
            displayArea.value += ')';
            break;
        case 'n!':
            displayArea.value = factorial(eval(currentValue));
            break;
        case '/':
            displayArea.value += '/';
            break;
        case '10^x':
            displayArea.value = Math.pow(10, eval(currentValue));
            break;
        case 'log':
            displayArea.value = Math.log10(eval(currentValue));
            break;
        case 'ln':
            displayArea.value = Math.log(eval(currentValue));
            break;
        case '+/-':
            displayArea.value = eval(currentValue) * -1;
            break;
        
        case 'π':
            displayArea.value += Math.PI;
            break;
        case 'e':
            displayArea.value += Math.E;
            break;
        case 'X':
            displayArea.value += '*';
            break;

        case 'x³':
            displayArea.value += '**3';
            break;         
        case '∛':
            displayArea.value += '**(1/3)';
            break;
        case 'y√x':
            displayArea.value += '**(1/';
            break;
        case '2^x':
            displayArea.value += '2**';
            break;
        case 'logx(y)':
            displayArea.value += 'Math.log(';
            break;
        case 'e^x':
            displayArea.value += 'Math.exp(';
            break;



        default:
            displayArea.value += buttonText;
    }
}

// Function to calculate factorial
const factorial = (num) => {
    if (num < 0) {
        return 'Error';
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Your custom code here, if any
document.addEventListener('DOMContentLoaded', () => {
    // custom config for the MTW app
    const mtwAppConfig = {
        border: true // app border in the MTW page
    }

    // implement these functions to use private API
    const sendPrivateApiRequest = async () => {
        // your code here
        // sendRequestToParent({ cat: 'getAssets' })
    }

    const acceptPrivateApiResponse = async (data) => {
        // process received data here
        // console.log(data)
    }

    // Your code here to send requests on document load
    // sendRequestToParent({ method: 'getAssets' })
});
