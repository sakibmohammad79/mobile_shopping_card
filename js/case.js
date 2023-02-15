function updateCaseNumber(isIncrease){
    const caseField = document.getElementById('case-field');
    const caseFieldValue = caseField.value;
    const previousCaseFieldValueSting = parseInt(caseFieldValue);

    let newCaseFieldValue;

    if(isIncrease === true){
        newCaseFieldValue = previousCaseFieldValueSting + 1;
    }
    else{
        newCaseFieldValue = previousCaseFieldValueSting - 1;
    }
    caseField.value = newCaseFieldValue; 

    return newCaseFieldValue;
}

function updateCasePrice(newCaseFieldValue){
    const casePriceTotal = newCaseFieldValue * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = casePriceTotal;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseFieldValue = updateCaseNumber(true);
    updateCasePrice(newCaseFieldValue);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseFieldValue = updateCaseNumber(false);
    updateCasePrice(newCaseFieldValue);
    calculateSubTotal();
})