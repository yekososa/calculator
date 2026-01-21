function add(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  return parseInt(num1) - parseInt(num2);
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
for (let i = 0; i < 4; i++) {
  let panel = document.createElement("div");
  panel.classList.add("solar-panel");
  solarPanel.appendChild(panel);
}

const buttons = [
  [
    //todo next round
    { val: "+/-", type: "unary", color: "red-btn" },
    { val: "√", type: "unary", color: "red-btn" },
    { val: "%", type: "unary", color: "red-btn" },
    //these three are not needed nor within the scope of this project.
    { val: "MRC", type: "null", color: "red-btn" },
    { val: "M-", type: "null", color: "red-btn" },
    { val: "M+", type: "null", color: "red-btn" },

    { val: "7", type: "number", color: "white-btn" },
    { val: "8", type: "number", color: "white-btn" },
    { val: "9", type: "number", color: "white-btn" },
    { val: "4", type: "number", color: "white-btn" },
    { val: "5", type: "number", color: "white-btn" },
    { val: "6", type: "number", color: "white-btn" },
    { val: "1", type: "number", color: "white-btn" },
    { val: "2", type: "number", color: "white-btn" },
    { val: "3", type: "number", color: "white-btn" },
    { val: "ON/C", type: "operator", color: "red-btn" },
    { val: "0", type: "number", color: "white-btn" },
    { val: ".", type: "unary", color: "white-btn" },
  ],

  [
    { val: "÷", type: "operator", color: "red-btn", basis: 1 },
    { val: "X", type: "operator", color: "red-btn", basis: 1 },
    { val: "-", type: "operator", color: "red-btn", basis: 1 },
    { val: "+", type: "operator", color: "red-btn", basis: 1 },
    { val: "=", type: "operator", color: "red-btn", basis: 2 },
  ],
];

const percentage = 100 / 3 + "%";
const buttonContainer = document.querySelector(".btnContainer");
buttons.forEach((buttonColum) => {
  const col = document.createElement("div");
  col.classList.add("btnColumn");

  buttonColum.forEach((button) => {
    const btn = document.createElement("button");
    btn.textContent = button.val;
    btn.classList.add(button.color);

    if ("basis" in button) {
        col.style.flexDirection = "column";
        console.log("found!");
        btn.style.flex =`${button.basis} 0 0%`;
    } else {
      btn.style.flex = `0 1 ${percentage}`;
    }

    col.appendChild(btn);

    btn.addEventListener('click', () => buttonPressed(button))
    // set type behavior
  });

  buttonContainer.appendChild(col);
});

let activeValue = 8008135;
setValueOnScreen(activeValue);

let firstNum;
let secondNum;
let operator;
let updateSecondNum = false;

function buttonPressed(obj) {
    const type = obj.type;
    if (type === "number") {
        changeNumericInput(obj.val);
    } else if (type === "operator") {
        operatorSelected(obj.val);
    } else if (type === "unary") {
        //todo!!!
    }
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'X':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }

    return NaN;

}

function changeNumericInput(num) {
    if (updateSecondNum) {
        secondNum = (secondNum ?? '') + `${num}`;
        console.log("second: " + secondNum);
        setValueOnScreen(secondNum);
    } else {
        firstNum = (firstNum ?? '') + `${num}`;
        console.log("first: " + firstNum);
        setValueOnScreen(firstNum);
    }
}

function operatorSelected(type) {
    if (type === "ON/C") {
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
        //todo do we need this
        updateSecondNum = false;
        setValueOnScreen(0);
        return;
    }

    if (firstNum != undefined && secondNum != undefined && operator != undefined) {
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = undefined;
        operator = type;
        updateSecondNum = true;
        setValueOnScreen(firstNum);
    } 

    operator = type;
    updateSecondNum = true;
}

function setValueOnScreen(val) {
    const screen = document.querySelector(".screen");
    screen.textContent = val;
}
