

let convertBtnEl = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")

let metersFeetResEl = document.getElementById("meterFeet-result-el")
let litersGallonsEl = document.getElementById("litersGallons-result-el")
let kiloPoundEl = document.getElementById("kiloPound-result-el")



convertBtnEl.addEventListener("click",function(){

    let inputValue = inputEl.value
    console.log(inputValue)
    if(inputValue == ""){
        alert("input cannot be empty")
        return
    }

    meterFeetConversion(inputValue)
    litreGallonConversion(inputValue)
    kiloPoundConversion(inputValue)


})


// 1 meter = 3.28084 fooot

function meterFeetConversion(num){

    let foot = (num * 3.281).toFixed(2)
    let meter = (num/3.281).toFixed(2)

    metersFeetResEl.textContent = `${num} meters = ${foot} feet | ${num} feet = ${meter} meters`


}

// 1 l = 3.785 gallon
function litreGallonConversion(num){

    let gallon = (num/3.785).toFixed(2)
    let litre = (num*3.785).toFixed(2)

    litersGallonsEl.textContent = `${num} litre = ${gallon} gallons | ${num} gallon = ${litre} litres`
}


//1kg = 2.205 Pounds
function kiloPoundConversion(num){

    let kilo = (num/2.205).toFixed(2)
    let pound = (num*2.205).toFixed(2)

    kiloPoundEl.textContent = `${num} kilo = ${pound} pounds | ${num} pounds = ${kilo} kilos`



}