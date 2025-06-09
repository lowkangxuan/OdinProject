// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

function sumOfTripledEvens(array) {
    const evenArray = array.filter(isEvenNumber);
    const multipliedArray = evenArray.map((number) => number * 3);
    const sumOfAllNumbers = multipliedArray.reduce((total, currentIteration) => {
        return total + currentIteration;
    })
    console.log(multipliedArray);
    console.log(sumOfAllNumbers);
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

sumOfTripledEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);