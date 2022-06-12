let container = document.querySelector(".container");

let result = document.querySelector(".result"); //previous-display

let meta = document.getElementById("operation"); //current-display

let tslr= document.querySelector(".tuslar");  //btnContainer

let currOperand = "";
let previousOperand = "";

let operation = "";

tslr.addEventListener("click",(e) =>{
  

    if(e.target.classList.contains("num")){
       appendNumber(e.target.textContent);
       updateDisplay();
    }
    
    if(e.target.classList.contains("op")){
        chooseOperator(e.target.textContent);
        updateDisplay();
     }
     if(e.target.classList.contains("equal")){
       calculate();
        updateDisplay();
     }
});

const appendNumber = (num) => {
    if (currOperand === '0' && num === '0') return;
    if (currOperand === '0' && num !== '.') {
        currOperand = num;
        return;
      }
    if(num ==='.'&&currOperand.includes('.'))return;
   
    if(currOperand.length > 0)return;
    currOperand += num;
};

const updateDisplay = ()=> {
   meta.textContent = currOperand;
   result.textContent =  `${previousOperand} ${operation}`;
};

const chooseOperator = (opr) => {
    if(previousOperand){ 
        calculate();
    }
   
    operation= opr;
    previousOperand = currOperand;
    currOperand ="";
    
};

const calculate = () => {
    let calculation = 0;
    const prev = Number(previousOperand);
    const current = Number(currOperand);

    switch (operation) {
        case "+":
            calculation = prev+current;
            
            break;
        case  "-":
           calculation = prev-current;

        break;
        case  "x":
            calculation = prev*current;
 
         break;
         case  "/":
            calculation = prev/current;
 
         break;
         default:
         break;
    }
    currOperand = calculation;
};