function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const sentence = `You ordered ${quantity} droids worth ${totalPrice} credits!`
    return sentence;
}

const quantity = Number(prompt('How many droids do you want to buy?'));
const pricePerDroid = Number(prompt('What is the price per droid?'));

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
