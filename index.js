
let nearest_power_of_2 = (number) => Math.pow(2, Math.round(Math.log(number) / Math.log(2)))

module.exports = (number) => {

    var arr = [];
    var power_of_2 = nearest_power_of_2(number);

    while (number != 0) {
        if (power_of_2 <= number) {
            arr.push(power_of_2);
            number -= power_of_2;
        }

        power_of_2 = power_of_2 / 2;
    }

    return arr;
}
