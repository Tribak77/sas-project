let numbers = [4, 1, 0, 8, -7];
let temps;
for(let i=0; i<numbers.length; i++){
for(let j=0; j<numbers.length- 1 - i;j++){
    if(numbers[j]>numbers[j+1]){
        temps = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temps;
    }
}
}
console.log(numbers);

