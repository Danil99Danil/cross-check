let ticketsPrices = document.querySelector("#price");
let plusBasicBtn = document.querySelector("#tickets > div.wrapper > div > div.ticket-amount > div.basic > div > button.number.plus > a")

function plusBasic() {
	ticketsPrices.innerHTML += 5
}

function minusBasic() {
	ticketsPrices.innerHTML = document.querySelector(".number-of-ticketsBasic").value - 5
}

function plusSenior() {
	ticketsPrices.innerHTML = document.querySelector(".number-of-ticketsBasic").value + 10
}

function minusSenior() {
	ticketsPrices.innerHTML = document.querySelector(".number-of-ticketsBasic").value - 10
}


plusBasicBtn.addEventListener("click",  function(event) {
	if(event.target) {
		plusBasic();
	}
})