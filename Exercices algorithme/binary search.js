let array = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 5;
let left = 0;
let right = array.length - 1;

while (left <= right) {
    let middel = Math.floor((left + right) / 2);
    if (array[middel] === target) {
        console.log("the index of ",target," is: ",middel);
    }
    if (array[middel] < target) {
        left =middel;
    }else{
        right=middel;
    }
}

if (left > right) {
    console.log("Target not found in the array");
}