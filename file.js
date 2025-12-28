let numberOne = document.getElementById("one");
let numberTwo = document.getElementById("two");
let numberThree = document.getElementById("three");
let numberFour = document.getElementById("four");
let numberFive = document.getElementById("five");
let numberSix = document.getElementById("six");
let numberSeven = document.getElementById("seven");
let numberEight = document.getElementById("eight");
let numberNine = document.getElementById("nine");
let numberzero = document.getElementById("zero");
let numberDzero = document.getElementById("doubleZero");
let plus1 = document.getElementById("plus");
let pulli = document.getElementById("dot");

let dis = document.getElementById("display");


function click1(){

    dis.value+=numberOne.textContent;
}
function click2(){

    dis.value+=numberTwo.textContent;
}
function click3(){

    dis.value+=numberThree.textContent
}
function click4(){

    dis.value+=numberFour.textContent;
}
function click5(){

    dis.value+=numberFive.textContent;
}
function click6(){

    dis.value+=numberSix.textContent;
}
function click7(){

    dis.value+=numberSeven.textContent;
}
function click8(){

    dis.value+=numberEight.textContent;
}
function click9(){

    dis.value+=numberNine.textContent;
}

function click0(){

    dis.value+=numberzero.textContent;   
}
function click00(){

    dis.value+=numberDzero.textContent;
}

function clickDot(){

    dis.value+=".";
}

function allClear(){
    dis.value="";
}

function onedel(){

    dis.value=dis.value.slice(0,-1);


}
function addOperator(op){
    let value = dis.value;

    if (value === "") return;

    let lastCharacter = value[value.length-1];

    if ("+-*/%".includes(lastCharacter)) return;

    dis.value+=op
}
function calculate(){
    let value1 = dis.value
    let lastCharacter = value1[value1.length-1]

    if ('+-*/%'.includes(lastCharacter)) return;

    try{
        dis.value=eval(value1);
    } catch {
        dis.value = "Error";
    }
}



