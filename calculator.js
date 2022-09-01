function add(a,b){
    return a + b;
}

let nums = []

let numCount = 0

const buttonNums = document.querySelectorAll('.number');
const buttonOps = document.querySelectorAll('.operands');
const calcField = document.querySelector('#input-line');
const resultsField = document.querySelector('#results');
const buttonCalc = document.querySelector('#calculate');


/// Number Buttons
buttonNums.forEach(item => {
    item.addEventListener('click', storeNum);
});
function storeNum(event){
    resultsField.textContent += event.target.getAttribute('value')
};

let currentOps = ''


/// Operand Buttons
buttonOps.forEach(item => {
    item.addEventListener('click', addOps);
});

function addOps(event){
    calcField.textContent = resultsField.textContent
    resultsField.textContent = ''
    currentOps = ' + '
    ///+' '+event.target.getAttribute('value') 
    /// 
};

/// Calculate Button
buttonCalc.addEventListener('click', calculate);

function calculate(event){
    let results = +Number(calcField.textContent) + Number(resultsField.textContent);
    console.log(results)
    calcField.textContent = calcField.textContent + currentOps + resultsField.textContent
    resultsField.textContent = results;
    
    ///+' '+event.target.getAttribute('value') 
    /// 
};




