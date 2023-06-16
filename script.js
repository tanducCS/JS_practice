output = document.getElementById('calculator--output');



function display(param){
    output.value += param;
}

buttons = document.querySelectorAll('.calculator__input--btn');
console.log(buttons);

let result = "";

buttons.forEach(button => {
    
    
    button.addEventListener('click', () => {
        if(button.value === "="){
            console.log(result);
            output.value = eval(result);
            result = output.value;
        }
        else if(button.value === "x"){
                result += "*";
                output.value = result;
        }
        else{
            result += button.value;    
            output.value = result;
        }
        
    })
    

    
});




