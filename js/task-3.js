function getElementWidth(content, padding, border) {
const totalWidth = content + (2 * padding) + (2 * border);
return totalWidth;
}

const content = parseFloat(prompt('Enter the content width: (for example 2px)'));
const padding = parseFloat(prompt('Enter the padding width: (for example 2px)'));
const border = parseFloat(prompt('Enter the border width: (for example 2px)'));

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
