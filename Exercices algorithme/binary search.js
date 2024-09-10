let array = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 3;
let left = 0;
let right = array.length - 1;

while (left <= right) {
    let middel = Math.floor((left + right) / 2);
    if (array[middel] === target) {
        console.log(middel);
    }
    if (array[middel] < target) {
        left =middel;
    }else{
        right=middel;
    }
}
