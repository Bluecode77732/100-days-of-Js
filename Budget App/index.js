// Amount
let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");

// Button
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");

// Product
const productTitle = document.getElementById("product-title");

// Error
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");

// Value
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");

// List
const list = document.getElementById("list");

// Temporal amount
let tempAmount = 0;


//Set Budget function

totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    //Bad input
    if (tempAmount === "" || tempAmount < 0) {
        (document.getElementById("budget-error")).classList.remove("hide");
    } else {
        (document.getElementById("budget-error")).classList.add("hide");
        //Set budget
        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        // Clear input
        totalAmount.value = "";
    }
});

//Disable edit and delete button function

const disableButtons = (bool) => { 
    let editButtons = document.getElementById("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;    //disabled??
    });
}

// Modify list elements function

const modifyElement = (elem, edit = false) => {
    let parentDiv = elem.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButtons(true);
    }

    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
}

// Create list function

const listCreator = (expenseName, expenseValue) => {
    let subListContent = document.createElement("div"); // I am Finally using createDiv which wanted to know.
    subListContent.classList.add("sublist-content", "flex-space");
    list.appendChild(subListContent);
    subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`
    
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit")  //what is this for?
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });
    
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });
    subListContent.appendChild(editButton);
    subListContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(subListContent);
}

// Add expenses function 

checkAmountButton.addEventListener("click", () => {
    // Check empty
    if(!userAmount.value || !productTitle.value) {
        productTitleError.classList.remove("hide");
        return false;
    }
    
    // Enable buttons
    disableButtons(false);
    
    // Expense
    let expenditure = parseInt(userAmount.value);

    // Total expense (existing + new)
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;

    // Total balance = budget - total expense
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;

    // Creare list
    listCreator(productTitle.value, userAmount.value);

    // Clear inputs
    productTitle.value = "";
    userAmount.value = "";
});
