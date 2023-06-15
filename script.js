output = document.getElementById('calculator--output');

function display(param){
    output.value = "";
    output.value += param;
}

button1 = document.getElementById("one");
button1.onclick = function() {
    display(button1.value);
}

