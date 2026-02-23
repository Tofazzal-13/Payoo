document.getElementById("addMoney_btn")
    .addEventListener("click", function () {
        // select add money bank
        const bankAccount = getValueFromInput("add_money_bank");
        if (bankAccount === "Select a Bank") {
            alert("Please Select a Bank");
            return;
        }

        // get bank account number 
        const bankAccountNumber = getValueFromInput("bank_account_number")
        if (bankAccountNumber.length !== 11) {
            alert("Invalid bank number");
            return;
        }

        // get add money 
        const addMoney = getValueFromInput("amount_add");
        const currentBalance = getBalance();

        const newBalance = currentBalance + Number(addMoney);

        // pin validated
        const pin = getValueFromInput("bankPin_number");

        if (pin === "1234") {
            alert(`Add money successfully from ${bankAccount} at ${new Date()}`)
            setBalance(newBalance);

            const history = document.getElementById("history_container");

            const newHistory = document.createElement("div");

            newHistory.innerHTML = `
              <div class="transaction_card p-5 bg-base-100">
                Add money successfully from ${bankAccount},acc-no ${bankAccountNumber} at ${new Date()}
              </div>
            `

            history.appendChild(newHistory)


        }
        else {
            alert("Invalid Pin");
            return;
        }

    })