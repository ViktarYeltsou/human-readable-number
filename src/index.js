//module.exports = function toReadable (number) {
  
//}

const units = ['','one','two','three','four','five','six','seven','eight','nine'];
const tens = ['ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tws = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
// const over = ['hundred','thousand','million','billion'];

const toReadable = num => !~~(num / 100) ? lessHundred(num) : units[~~(num / 100)] + ' hundred ' + lessHundred(num % 100);

const lessHundred = num => num < 10 ? units[num] : num <20 ? tens[num % 10] : tws[~~(num / 10)] + ' ' + units[num % 10];
