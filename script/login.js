document.getElementById("btn_login")
    .addEventListener("click", function () {
        const mobileNumber = document.getElementById("mobileNumber");
        const contactNumber = mobileNumber.value;
        const pinNumber = document.getElementById("pinNumber");
        const passNumber = pinNumber.value;

        if(contactNumber === "01302497001" && passNumber === "1234"){
            alert("logIn successfully");
            window.location.assign("./home.html")
            mobileNumber.value = ""
        }
        else{
            alert("login failed")
            return;
        }
        

    })