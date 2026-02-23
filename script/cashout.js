document.getElementById("cashout_btn")
    .addEventListener("click", function () {
        const cashoutNumber = getValueFromInput("agentNumber");
        if (cashoutNumber.length !== 11) {
            alert("Invalid agent number");
            return;
        }
        const cashoutAmount = getValueFromInput("cashoutAmount");

        const currentBalance = getBalance()

        const newBalance = currentBalance - Number(cashoutAmount);

        if (newBalance < 0) {
            alert("Invalid Amount")
            return;
        }

        const cashoutPin = getValueFromInput("cashoutPin");
        if (cashoutPin === "1234") {
            alert("cashout successfull");
            setBalance(newBalance)

            const history = document.getElementById("history_container");

            const newHistory = document.createElement("div");

            newHistory.innerHTML = `
              <div class="transaction_card p-5 bg-base-100">
                cashout ${cashoutAmount} successfully to ${cashoutNumber} at ${new Date()}
              </div>
            `

            history.appendChild(newHistory)

        }
        else {
            alert("Invalid Pin");
            return;
        }


    })


/* document.getElementById("cashout_btn")
    .addEventListener("click", function () {
        const agentNumber = document.getElementById("agentNumber");
        const agentContact = agentNumber.value;
        
        if (agentContact.length !== 11) {
            alert("Invalid agent number");
            return;
        }

        const cashoutAmount = document.getElementById("cashoutAmount");
        const cashoutValue = cashoutAmount.value;
        const balanceElement = document.getElementById("currentBalance");
        const balance = balanceElement.innerText;
        const newBalance = Number(balance) - Number(cashoutValue);


        if (newBalance < 0) {
            alert("Invalid Amount")
            return;
        }

        const cashoutPin = document.getElementById("cashoutPin");
        const pin = cashoutPin.value;

        if (pin === "1234") {
            alert("cashout successfull");
            balanceElement.innerText = newBalance;
        }
        else {
            alert("Invalid Pin");
            return;
        }
        agentNumber.value = "";
        cashoutAmount.value = "";
        cashoutPin.value = "";
    }) */