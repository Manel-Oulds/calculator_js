
let scr = document.querySelector(".screen");
let buttons = document.querySelectorAll(".buttons");
let clear = document.querySelector(".clear");
let result = document.querySelector(".result");

//Listeners

buttons.forEach(function(button){
    button.addEventListener('click', displaybutton);

});

clear.addEventListener('click', cleardata);
result.addEventListener('click', calcResult)



//Functions

function displaybutton(e){
    let value = e.target.dataset.num;
    scr.value += value;
}

function calcResult(e){
    if (scr.value === ''){
        scr.value = "Please enter";
    } else {
        let res = eval(scr.value);
        scr.value = res;
    }
}

function cleardata(e){
    scr.value = '';
}

