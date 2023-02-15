function updatePhoneNumber(isIncrease){
    const phoneField = document.getElementById('phone-field');
    const phoneFieldValueString = phoneField.value;
    const previousPhoneFieldNumber = parseInt(phoneFieldValueString);

    let newPhoneFieldValue;
    if(isIncrease === true){
        newPhoneFieldValue = previousPhoneFieldNumber + 1;
    }
    else{
        newPhoneFieldValue = previousPhoneFieldNumber - 1;
    }
    phoneField.value = newPhoneFieldValue;
    return newPhoneFieldValue;
}

function updatePhoneTotalPrice(phoneQuantity){
    const phonePriceTotal = phoneQuantity * 1210;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phonePriceTotal;
}

document.getElementById('phone-plus-btn').addEventListener('click', function(){
    // const phoneField = document.getElementById('phone-field');
    // const phoneFieldValueString = phoneField.value;
    // const previousPhoneFieldNumber = parseInt(phoneFieldValueString);
    // const newPhoneFieldValue = previousPhoneFieldNumber + 1;
    // phoneField.value = newPhoneFieldValue;
    const phoneQuantity = updatePhoneNumber(true);
    
    // const phonePriceTotal = phoneQuantity * 1210;
    // const phoneTotalElement = document.getElementById('phone-price');
    // phoneTotalElement.innerText = phonePriceTotal;
    updatePhoneTotalPrice(phoneQuantity);

    //calculate sub total
    // const currentPhoneTotal = getTextElemetValueById('phone-price');
    // const currentCaseTotal = getTextElemetValueById('case-price');
    // const currentSubTotal = currentCaseTotal + currentPhoneTotal;

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    calculateSubTotal();
})

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    // const phoneField = document.getElementById('phone-field');
    // const phoneFieldValueString = phoneField.value;
    // const previousPhoneFieldNumber =parseInt(phoneFieldValueString);
    // const newPhoneFieldValue = previousPhoneFieldNumber - 1;
    // phoneField.value = newPhoneFieldValue;
    const phoneQuantity = updatePhoneNumber(false);

    // const phonePriceTotal = phoneQuantity * 1210;
    // const phoneTotalElement = document.getElementById('phone-price');
    // phoneTotalElement.innerText = phonePriceTotal;
    updatePhoneTotalPrice(phoneQuantity);
    calculateSubTotal();
})