let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");

const totalAmountButton = document.getElementById("total-amount-button");

const errorMessage = document.getElementById("budget-error");






let tempAmount = 0;

//Set Budget function

totalAmount.addEventListener("click", () => {
    tempAmount = totalAmount.value();
    //Bad input
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        //Set budget
        
    }
})