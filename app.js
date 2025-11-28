const Bill = document.querySelector("#cost");
const tipButtons = document.querySelectorAll(".custom-btn button");
const TipCustom = document.querySelector("#custom-tip");
const ErrorMsg = document.querySelector("#error-msg");
const SelectPeople = document.querySelector("#noof");
const tipAmountSpan = document.querySelector('.ammount span');
const total = document.querySelector("#total");
const resetBtn = document.querySelector('.right button');


let bill = 0; // numeric bill value
let tipPercent = 0; 
let people = 0;

function formatCurrency(value){
	if (isNaN(value) || value === Infinity) return "$00.00";
	return `$${value.toFixed(2)}`;
}

function generateRandomBill(){
	const min = 10;
	const max = 500;
	bill = +(Math.random() * (max - min) + min).toFixed(2);
	Bill.textContent = formatCurrency(bill).replace('$', ''); 
}

function calculate(){

	if (!people || people <= 0){
		tipAmountSpan.textContent = "$00.00";
		total.textContent = "$00.00";
		return;
	}

	const tipPerPerson = (bill * tipPercent) / people;
	const totalPerPerson = (bill + (bill * tipPercent)) / people;

	tipAmountSpan.textContent = formatCurrency(tipPerPerson);
	total.textContent = formatCurrency(totalPerPerson);
}


function handleTipButtonClick(e){
	tipButtons.forEach(btn => btn.classList.remove('active'));
	e.currentTarget.classList.add('active');
	TipCustom.value = '';
	const label = e.currentTarget.textContent.trim();
	const percent = parseFloat(label.replace('%', ''));
	tipPercent = (isNaN(percent) ? 0 : percent / 100);
	calculate();
}

function handleCustomTipInput(e){
	tipButtons.forEach(btn => btn.classList.remove('active'));
	const value = e.target.value.trim();
	const percent = parseFloat(value);
	if (isNaN(percent) || percent < 0){
		tipPercent = 0;
	} else {
		tipPercent = percent / 100;
	}
	calculate();
}

function handlePeopleInput(e){
	const val = e.target.value.trim();
	const num = parseInt(val, 10);
	if (isNaN(num) || num <= 0){
		SelectPeople.classList.add('error');
		ErrorMsg.textContent = "Can't be zero or empty";
		people = 0;
	} else {
		SelectPeople.classList.remove('error');
		ErrorMsg.textContent = '';
		people = num;
	}
	calculate();
}

function resetAll(){
	tipButtons.forEach(btn => btn.classList.remove('active'));
	TipCustom.value = '';
	SelectPeople.value = '';
	ErrorMsg.textContent = '';
	SelectPeople.classList.remove('error');
	tipAmountSpan.textContent = "$00.00";
	total.textContent = "$00.00";
	tipPercent = 0;
	people = 0;
	generateRandomBill();
}

function init(){
	generateRandomBill();
	tipButtons.forEach(btn => btn.addEventListener('click', handleTipButtonClick));
	TipCustom.addEventListener('input', handleCustomTipInput);
	SelectPeople.addEventListener('input', handlePeopleInput);
	resetBtn.addEventListener('click', resetAll);
	//initial display
	tipAmountSpan.textContent = "$00.00";
	total.textContent = "$00.00";
}
init();

