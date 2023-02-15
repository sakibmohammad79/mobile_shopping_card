function getTextElemetValueById(elementId){
    const phoneTotalElementValue = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElementValue.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElemetValueById('phone-price');
    const currentCaseTotal = getTextElemetValueById('case-price');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;

    setElementValueById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById('tax-amount', taxAmount);
    

    const finalTotal = currentSubTotal + taxAmount;
    setElementValueById('final-total', finalTotal);
}