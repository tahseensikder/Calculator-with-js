let output = document.calculator.output;
function getValue(val) {
    output.value += val;
}

function calculate() {
    outputValue = output.value;
    output.value = eval(outputValue);
}
function getPerchant() {
    outputValue = output.value;
    if (outputValue != ''){
        output.value = eval(outputValue) / 100;
    }
}
function clearEntry() {
    outputValue = output.value;
    slicedValue = outputValue.slice(0,outputValue.length - 1);
    output.value = slicedValue;
}

