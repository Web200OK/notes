class user{
    constructor(arr){
        this.arr = arr
    }
    getLastNumber(){
        let last = this.arr.pop()
        if(this.arr.length==0){
            return last
        }
        else{
            let result = this.getLastNumber()
            this.arr.push(last)
            return result
        }
    }
    reverse(){
        if(this.arr.length==0){
            return 
        }
        else{
            let number = this.getLastNumber()
            this.reverse()
            this.arr.push(number)
        }
        return this.arr
    }
} 
let a = new user([1,2,3])
let result = a.reverse()
console.log(result)
