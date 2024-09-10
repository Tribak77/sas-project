//Selection Sort
let numbers1 = [4, 2, 0, 9, -7];

let temps1;
for (let i = 0; i < numbers1.length; i++) {
    for (let j = i + 1; j < numbers1.length; j++) {
        if (numbers1[i] > numbers1[j]) {
            temps1 = numbers1[i];
            numbers1[i] = numbers1[j];
            numbers1[j] = temps1;
        }
    }
}
console.log(numbers1);

//Bubble Sort
let numbers2 = [4, 1, 0, 8, -7];
let temps2;
for(let i=0; i<numbers2.length; i++){
for(let j=0; j<numbers2.length;j++){
    if(numbers2[j]>numbers2[j+1]){
        temps2 = numbers2[j];
        numbers2[j] = numbers2[j+1];
        numbers2[j+1] = temps2;
    }
}
}
console.log(numbers2);

