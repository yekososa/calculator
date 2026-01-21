console.log("test");

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }

    return num1 + num2;
}

function subtract(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }

    return num1 - num2;
}

function divide(num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num2 == 0) {
        return NaN;
    }

    return num1 / num2;
}

function multiply(num1, num2) {
if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }

    return num1 * num2;
}

const solarPanel = document.querySelector(".solar");
for(let i = 0; i < 4; i++) {
    let panel = document.createElement("div");
    panel.classList.add("solar-panel");
    solarPanel.appendChild(panel);
}