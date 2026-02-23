function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = ""
    return value;
}

// machine to balance
function getBalance() {
    const balanceElement = document.getElementById("currentBalance");
    const balance = balanceElement.innerText;
    return Number(balance)
}

// machine -> set balance 

function setBalance(value) {
    const balanceElement = document.getElementById("currentBalance");
    balanceElement.innerText = value;
}

// machine id > hide all > show id

function showOnly(id) {
    const addMoney = document.getElementById("add_money");
    const cashOut = document.getElementById("cashOut");
    const sendMoney = document.getElementById("send_money")
    const payBill = document.getElementById("paybill")
    const getBonus = document.getElementById("getBonus")
    const transaction = document.getElementById("history")


    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden")
    sendMoney.classList.add("hidden")
    payBill.classList.add("hidden")
    getBonus.classList.add("hidden")
    transaction.classList.add("hidden")

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}