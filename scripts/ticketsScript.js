let ticketsPrices = document.querySelector("#price");
let plusBasicBtn = document.querySelector("#tickets > div.wrapper > div > div.ticket-amount > div.basic > div > button.number.plus > a");
let minusBasicBtn = document.querySelector("#tickets > div.wrapper > div > div.ticket-amount > div.basic > div > button.number.minus");
let minusSeniorBtn = document.querySelector("#tickets > div.wrapper > div > div.ticket-amount > div.senior > div > button.number.minus > a");
let plusSeniorBtn = document.querySelector("#tickets > div.wrapper > div > div.ticket-amount > div.senior > div > button.number.plus > a")
let basicPrise = 0;
let seniorPrice = 0;

function currentPrice() {
	ticketsPrices.innerHTML = basicPrise + seniorPrice;
}

plusBasicBtn.addEventListener("click",  function(event) {
	if(event.target) {
		basicPrise += 3;
		currentPrice()
	}
})

minusBasicBtn.addEventListener("click", function(event) {
	if(event.target && basicPrise <= 0) {
		return
	} else {
		basicPrise -= 3;
		currentPrice()
	}
})

plusSeniorBtn.addEventListener("click", function(event) {
	if(event.target) {
		seniorPrice += 5;
		currentPrice()
	}
})

minusSeniorBtn.addEventListener("click", function(event) {
	if(event.target && seniorPrice <= 0) {
		return
	} else {
		seniorPrice -= 5;
		currentPrice()
	}
})

