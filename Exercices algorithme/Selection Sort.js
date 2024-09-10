let numbers = [4, 2, 0, 9, -7];

let temps;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            temps = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temps;
        }
    }
}
console.log(numbers);