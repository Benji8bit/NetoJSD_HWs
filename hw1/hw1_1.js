let username = "my name";
let bonusBalance = 1000;

console.log("Пользователь " + username);
console.log("Баланс " + bonusBalance);

let addBonuses = 50;
let burntBonuses = 3;
let time = 7;

console.log("After 7 days balance: " + (bonusBalance + Math.floor(time/2)*addBonuses - time*3));