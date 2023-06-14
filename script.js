function calculateChange() {
    
    const taxiFare = document.getElementById("taxi-fare").value;
    const moneyReceived = document.getElementById("money-received").value;
    const numPassengers = document.getElementById("num-passengers").value;

    const totalCost = taxiFare * numPassengers
    const change = moneyReceived - totalCost;

    if (change >= 0) {

        document.getElementById("change").innerHTML = "Change: R" + change.toFixed(2);

    } else {

        document.getElementById("change").innerHTML = "Not enough money received!";
    }

}
