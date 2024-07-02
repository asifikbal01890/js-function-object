// function bazar () {
//     console.log('asho bazar e jai');
// }

// bazar();

// var money = 100;

// function dim (money) {
//     console.log('ei neu:', money, 'taka' );
// }
// console.log("start");
// dim("sajib")


// function add (num1, num2) {
//     console.log(num1, num2);
//     // var sum = num1+num2;
//     console.log(num1+num2);
// }

// add(20, 60)


// function shingara(money) {
//     var shingaraPrice = 5;
//     var takaBack = money % shingaraPrice;
//     var taka = money - takaBack; 
//     var quantity = taka/shingaraPrice;
//     return 'shingara paici ' + quantity + ' taka paici ' + takaBack + 'taka';
// }

// var hand = shingara(20);
// console.log(hand);

function shingara(money, quantity) {
        var shingaraPrice = 5;
        var totalCost = shingaraPrice * quantity;
        var returnMoney = money - totalCost;
        
        return 'shingara paici ' + quantity + ' taka paici ' + returnMoney + 'taka';
    }
    
    var hand = shingara(100, 4);
    console.log(hand);
    
