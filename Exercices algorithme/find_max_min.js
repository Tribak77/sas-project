let array = [1, 2, 3, 41, 5, 6, 7, 8];
let max = array[0];
let min = array[0];
for(let i=1; i<=array.length; i++){
    if(max<array[i]){
        max=array[i];
    }
    if(min>array[i]){
        min=array[i];
    }
}
console.log("the max number is: ", max , "the min number is: ",min);