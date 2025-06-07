function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const sentence = `Shipping to ${country} will cost ${totalPrice} credits`;
    return sentence;
}

const country = prompt('Enter your country:');
const price = Number(prompt('Enter the price of the item:'));
const deliveryFee = Number(prompt('Enter the delivery fee:'));

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
