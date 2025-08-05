function reverseStr(str ,n){
    let reverse = "";
    for(let i = n-1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

let input = " anwahb sv rahkehs";
let n  = input.length;

console.log(reverseStr(input , n));
 