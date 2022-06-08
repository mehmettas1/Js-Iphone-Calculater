let container = document.querySelector(".container");

let result = document.querySelector(".result");

let operation = document.getElementById("operation");

let equal = document.querySelector(".equal");
equal.addEventListener("click",() => {
    myFunction();
});

container.addEventListener("click",(e) => {
    if(e.target.classList.contains("AC")) {
        result.innerHTML = "";
        operation.innerHTML = "";
    }



// if(!(e.target.innerText == "=" || e.target.innerText == "AC")) {
//     operation.textContent += e.target.textContent;
// }
if(e.target.className === "btn"){
    operation.textContent += e.target.textContent;
}

if(
    e.target.innerHTML == "+" ||
    e.target.innerHTML == "-" ||
    e.target.innerHTML == "*" ||
    e.target.innerHTML == "/" 
) {
    result.textContent += operation.textContent;
    operation.textContent ="";
}
});

function myFunction() {
    result.textContent += operation.textContent;
    operation.innerText = eval(result.innerText);
}