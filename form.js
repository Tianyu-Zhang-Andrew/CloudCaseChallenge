function handelTaxClick() {
    let salaryInput=  document.getElementById("salaryInput");
    let div=document.getElementById("calculationDiv");
    div.removeChild(div.childNodes[0]);
    let span = document.createElement('span');
    span.id = "calculationResult";

    let txt;
    if(salaryInput.value == ""){
        txt = document.createTextNode("Please input your annual salary first");
        span.style.color = 'red';
    }else{
        tax = calculateTax(salaryInput.value);
        txt = document.createTextNode("Your annual tax will be $" + tax);
        
    }

    span.appendChild(txt)
    div.appendChild(span);
}

function handelSuperContribClick() {
    let salaryInput=  document.getElementById("salaryInput");
    let div=document.getElementById("calculationDiv");
    div.removeChild(div.childNodes[0]);
    let span = document.createElement('span');
    span.id = "calculationResult";

    let txt;
    if(salaryInput.value == ""){
        txt = document.createTextNode("Please input your annual salary first");
        span.style.color = 'red';
    }else{
        tax = calculateSuperAnnuation(salaryInput.value);
        txt = document.createTextNode("Your annual superannuation will be $" + tax);
        
    }

    span.appendChild(txt)
    div.appendChild(span);
}

function calculateTax(income){
    income = parseFloat(income);
    tax = 0;

    if(income <= 18200) {
        return tax;
    }else if (income <= 37000){
        tax += 0.19 * (income - 18200);
    }else if (income <= 90000){
        tax += 3572 + 0.325 * (income - 37000);
    }else if (income <= 180000){
        tax += 20797 + 0.37 * (income - 90000);
    }else{
        tax += 54097 + 0.45 * (income - 180000);
    }

    return tax;
}

function calculateSuperAnnuation(income){
    return income * 0.105;
}

module.exports = { calculateTax, calculateSuperAnnuation };
