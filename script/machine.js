function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    input.value = ""
    return value;  
}

// machine to balance
function getBalance(){
    const balanceElement = document.getElementById("currentBalance");
    const balance = balanceElement.innerText;
    return Number(balance)
}

// machine -> set balance 

function setBalance(value){
    const balanceElement = document.getElementById("currentBalance");
    balanceElement.innerText = value;
}