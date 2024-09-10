// let array = [1, 2, 3, 4, 5, 6, 7, 8];
//     let rev_arr=[];
// for(let i=0; i<array.length ; i++){
//     rev_arr[i]=array[array.length-(i+1)];
// }
// console.log(rev_arr);

// function reverse_array(array){
// let rev_arr=[];
// for(let i=0; i<array.length; i++){
//     rev_arr[i]=array[array.length-(i+1)];
// }
// console.log(rev_arr);
// }
// array = [1, 2, 3, 4, 5, 6, 7, 8];
// reverse_array(array);

let array = [1, 2, 3, 41, 5, 6, 7, 8];
let max = array[0];
for(let i=1; i<=array.length; i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log(max);