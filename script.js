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

const buttons = [
    {val: '+/-', type: 'operator' , color: 'red-btn' },
    {val: '√', type: 'operator' , color: 'red-btn' },
    {val: '%', type: 'operator' , color: 'red-btn' },
    {val: 'MRC', type: 'operator' , color: 'red-btn' },
    {val: 'M-', type: 'operator' , color: 'red-btn' },
    {val: 'M+', type: 'operator' , color: 'red-btn' },
    {val: '7', type: 'operator' , color: 'white-btn' },
    {val: '8', type: 'operator' , color: 'white-btn' },
    {val: '9', type: 'operator' , color: 'white-btn' },
    {val: '4', type: 'operator' , color: 'white-btn' },
    {val: '5', type: 'operator' , color: 'white-btn' },
    {val: '6', type: 'operator' , color: 'white-btn' },
    {val: '1', type: 'operator' , color: 'white-btn' },
    {val: '2', type: 'operator' , color: 'white-btn' },
    {val: '3', type: 'operator' , color: 'white-btn' },
    {val: 'ON', type: 'operator' , color: 'red-btn' },
    {val: '0', type: 'operator' , color: 'white-btn' },
    {val: '.', type: 'operator' , color: 'white-btn' },
];

const percentage = 100/3+ '%';
const buttonContainer = document.querySelector(".btnContainer");
buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.val;
    btn.classList.add(button.color);
    btn.style.flex = `0 0 ${percentage}`
    buttonContainer.appendChild(btn);
    
    
    // set type behavior
});