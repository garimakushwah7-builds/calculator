const display = document.getElementById("display");

// Add value to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value.trim() === "") return;

        // Replace calculator symbols with JavaScript operators
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1500);
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    }

    if (key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

    if (key === ".") {
        append(".");
    }
});