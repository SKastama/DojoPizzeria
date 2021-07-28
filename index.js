var pizza = {
    crustType: ["deep dish", "hand tossed"],
    sauceType: ["traditional", "marinara"],
    cheeses: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "mushroom", "olives", "onions"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
console.log("Pizza 1");
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

console.log("");
console.log("Pizza 2");
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
console.log(p2);

console.log("");
console.log("Pizza 3");
var p3 = pizzaOven("deep dish", "marinara", "feta", ["mushroom", "onions"]);
console.log(p3);

console.log("");
console.log("Pizza 4");
var p4 = pizzaOven("hand tossed", "traditiona;", "feta", ["mushroom", "onions"]);
console.log(p4);


