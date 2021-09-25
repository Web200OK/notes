let Fbi = function(i){
    if(i<2){
        return i == 0 ? 0 : 1
    }
    return Fbi(i-1)+Fbi(i-2)
}
let main = function(i){
    for(let j = 1;j <= i;j++){
        console.log(Fbi(j))
    }
    return true
}
let result = main(5)
console.log(result)