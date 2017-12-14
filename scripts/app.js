const numbers= [1, 2, 3, 4, 5];

function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

multiply(numbers);

function evenNumbers (array) {
    return array.filter(number => {
        return number % 2 === 0;
    })
}

evenNumbers(numbers);
