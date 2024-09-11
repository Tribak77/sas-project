let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let rev_arr=[];
for(let i=0; i<array.length ; i++){
    rev_arr[i]=array[array.length-(i+1)];
}
console.log(rev_arr);
