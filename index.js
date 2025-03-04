const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9" || "+-*/.".includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        event.preventDefault(); 
        calculate();
    } else if (event.key === "Backspace") {
        event.preventDefault(); 
        display.value = display.value.slice(0, -1);
    }
});
document.getElementById("toggleIcon").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("off");
    this.classList.toggle("fa-toggle-on");
    this.classList.toggle("fa-toggle-off");
});
