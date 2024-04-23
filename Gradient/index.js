let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDireciton = 'to bottom';
let outputCode = document.getElementById("code");

function setDirections(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (const i of directions) {
        i.classList.remove("active");
    }
    _this.classList.add("active")
    currentDireciton = value;
}

function generateCode() {
    outputCode.value = `background-image : linear-gradient(${currentDireciton}, ${colorOne.value}, ${colorTwo.value})`;
    
}
