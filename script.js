// Select the display
let display = document.querySelector(".display");

// Select all buttons
let buttons = document.querySelectorAll(".buttons button");

// Check every button
buttons.forEach(function(button) {

    // When a button is clicked
    button.addEventListener("click", function() {

        // Get button text
        let value = button.textContent.trim();

        // Clear display
        if (button.classList.contains("clear")) {
            display.value = "";
        }

        // Delete last character
        else if (button.classList.contains("delete")) {
            display.value = display.value.slice(0, -1);
        }

        // Calculate answer
        else if (button.classList.contains("equalto")) {
            let expression=display.value;
            try {
                display.value = eval(expression);
            } catch (error) {
                display.value = "Error";
            }
        }

        // Add numbers and operators
        else {
            if (button.classList.contains("multiply")) {
                display.value += "*";
            } else if (button.classList.contains("percentage")) {
                display.value += "%";
            } else {
                display.value += value;
            }
        }

    });

});
