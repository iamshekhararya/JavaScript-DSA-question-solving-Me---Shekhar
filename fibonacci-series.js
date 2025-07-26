
// function fibo(n){
//     let a = 0;
//     let b = 1;
//     for(i = 0; i < n; i++){
//         console.log(a);
//         const next = a+b;
//         a = b;
//         b = next;
//     } 
// }
//  fibo(10)


let arr = [1,2,3,5,8,0,2,5,0,8,0,0,0,0,4,5,8,4];
let min = arr[0];
for(let i = 0; i < arr.length; i++){
   for( let j = 0; j < arr.length; j++){
    if(arr[i] < min){
      min = arr[i];
     }
  } 
}
console.log("Minimum Value in array :", min);
