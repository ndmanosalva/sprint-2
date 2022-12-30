//vars card section
let cardNumber = document.getElementById('cardNumber')
let cardHolder = document.getElementById ('cardHolder')
let monthCard = document.getElementById('monthCard')
let yearCard = document.getElementById('yearCard')
let cvcText = document.getElementById('cvcText')

//vars input sections
const form = document.getElementById('form')
const iname = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvcInput = document.getElementById('cvcInput')
const confirmed = document.querySelector('#confirmButton')
const continuebtn = document.getElementById('continueButton') 
const sendDiv = document.getElementById('icon-complete')
const formDiv = document.getElementById('formDiv')

//vars errores en labels
const lblerrorName = document.getElementById('lblerrorName')
const lblerrorNumber = document.getElementById('lblerrorNumber')
const lblerrorFormat = document.getElementById('lblerrorFormat')
const lblerrorDate = document.getElementById('errorDate')
const lblerrorCvc = document.getElementById('lblerrorCvc')
const errorDate = document.getElementById('errorDate')
let value, inputNumber, inputName, inputCvc,inputMonth, inputYear;

//funciones número

const verifyInputNumber = () => {
    if (number.value == '') {
        cardNumber.textContent = '0000000000000000';
    }
    if (number.value.length == 0){
        number.classList.add('errorInput');
        lblerrorNumber.classList.remove('hidden');
        number.style.borderColor = 'hsl(0, 100%, 66%)';
        return false;
    }
    else {
        number.classList.remove('errorInput');
        lblerrorNumber.classList.add('hidden');
        number.style.borderColor = 'hsl(249, 99%, 64%)';
        return true;
    }
};

let inputValue;
number.addEventListener('input',(e) => {
    let regExp = /[A-z]/g;
    if(regExp.test(number.value)){
        number.classList.add('errorInput');
        lblerrorFormat.classList.remove('hidden');
        number.style.borderColor = 'hsl(0, 100%, 66%)';
        
    }else{
        number.classList.remove('errorInput');
        lblerrorFormat.classList.add('hidden');
        number.style.borderColor = 'hsl(249, 99%, 64%)';
    }

    number.value = e.target.value.slice(0,16) 
    inputNumber = verifyInputNumber();
    verifyFunction();
    cardNumber.textContent = e.target.value;
});


//funciones nombre

const verifyInputName = () => {
    if (iname.value == '') {
        cardHolder.textContent = 'Jane Apleseed';
    }
    if (iname.value.length === 0){
        iname.classList.add('errorInput');
        lblerrorName.classList.remove('hidden');
        iname.style.borderColor = 'hsl(0, 100%, 66%)';
        return false;
    }
    else {
        iname.classList.remove('errorFormat');
        lblerrorName.classList.add('hidden');
        iname.style.borderColor = 'hsl(249, 99%, 64%)';
        return true;
    }
}

iname.addEventListener('input',(e) =>{
    inputName = verifyInputName();
    verifyFunction();
    cardHolder.textContent = e.target.value
})


//funciones cvc

const verifyInputCvc = () => {
    if (cvcInput.value == '') {
        cvcText.textContent = '000';
    }
    if (cvcInput.value.length === 0){
        cvcInput.classList.add('errorInput');
        lblerrorCvc.classList.remove('hidden');
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
        return false;
    }
    else{
        cvcInput.classList.remove('errorInput');
        lblerrorCvc.classList.add('hidden')
        cvcInput.style.borderColor = 'hsl(249, 99%, 64%)';
        return true;
    }
}
verifyInputCvc()
cvcInput.addEventListener('input',(e) => {
    cvcInput.value = e.target.value.slice(0,3) 
    inputCvc = verifyInputCvc();
    verifyFunction();
    cvcText.textContent = e.target.value
})



//funciones fecha
const verifyMonth =() =>{
    if (month.value.length === 0){
        month.classList.add('errorInput');
        lblerrorDate.classList.remove('hidden');
        month.style.borderColor = 'hsl(0, 100%, 66%)';
        return false;
    }
    else {
        month.classList.remove('errorInput');
        lblerrorDate.classList.add('hidden');
        month.style.borderColor = 'hsl(249, 99%, 64%)';
        return true;
    }
}
verifyMonth()

month.addEventListener('input',(e) => {

    month.value = e.target.value.slice(0,2) 
    inputMonth = verifyMonth();
    verifyFunction();
    monthCard.textContent = e.target.value
})


const verifyYear = () =>{
    if (year.value.length === 0){
        year.classList.add('errorInput');
        lblerrorDate.classList.remove('hidden');
        year.style.borderColor = 'hsl(0, 100%, 66%)';
        return false;
    }
    else {
        year.classList.remove('errorInput');
        lblerrorDate.classList.add('hidden');
        year.style.borderColor = 'hsl(249, 99%, 64%)';
        return true;
    }
}
year.addEventListener('input',(e) => {

    year.value = e.target.value.slice(0,2) 
    inputYear = verifyYear();
    verifyFunction();
    yearCard.textContent = e.target.value
})

//funcion verificadora de todo
const verifyFunction = () => {
    inputNumber = verifyInputNumber();
    inputName = verifyInputName();
    inputCvc = verifyInputCvc();
    inputMonth = verifyMonth();
}

verifyFunction();


//funcion submit
confirmed.addEventListener('click',()=>{
    sendDiv.style.display ='block';
    formDiv.style.display ='none';
})

continuebtn.addEventListener('click',()=>{
    sendDiv.style.display ='none';
    formDiv.style.display ='contents';
})
