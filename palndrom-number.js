let str = "khaahk"
let n = str.length;
function checkPlaindrom(str,n){
    for(i=0; i<n; i++){
        if(str[i] != str[n-1-i]){
            return false;
        }
    }
    return true;
}
console.log(checkPlaindrom(str,n));