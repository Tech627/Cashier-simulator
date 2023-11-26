let player = {
    Money: 0,
}

var Promotion_cost = 200 
var Promotion_power = 5
let Promotion = document.getElementById("Promotion")

function GetMoney() {
    player.Money += Promotion_power;
}

function Promote() {
    if(player.Money >= Promotion_cost) {
        player.Money -= Promotion_cost;
        Promotion_power += 5
        document.getElementById("Gain-Money").textContent = "Work for " + Promotion_power + " Money"
        document.getElementById("Promotion-cost").textContent = "Cost: " + Promotion_cost + " Money"
    }
}

setInterval(function() {
    document.getElementById("Money").textContent = "You made " + player.Money + " Money"
    if(player.Money >= 100) {
        Promotion.classList.add("show-Promotion")
    }
})