module.exports = function toReadable (number) {
    const units = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const tens = ['ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tws = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const lessHundred = num =>
        num < 10 ? units[num] :
            num <20 ? tens[num % 10] :
                num % 10 ? tws[~~(num / 10)] + ' ' + units[num % 10] :
                    tws[~~(num / 10)];

  return !~~(number / 100) ? lessHundred(number) :
      number % 100 ? units[~~(number / 100)] + ' hundred ' + lessHundred(number % 100) :
          units[~~(number / 100)] + ' hundred';
}
