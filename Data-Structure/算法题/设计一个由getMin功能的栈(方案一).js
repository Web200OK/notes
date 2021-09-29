function Stack(){
    let stackdata = []
    let stackmin = []
    this.push = function(newNumber){
        stackdata.push(newNumber)
        if(stackmin.length==0){
            stackmin.push(newNumber)
        }
        else if(newNumber<this.getmin()){
            stackmin.push(newNumber)
        }
    }
    this.pop = function(){
        if(stackdata.length==0){
            return "your stackdata is empty"
        }
        let value = stackdata.pop()
        if(value == this.getmin()){
            stackmin.pop()
        }
    }
    this.getmin = function(){
        if(this.isempty()){
            return "your stack is empty"
        }else{
            return stackmin[stackmin.length-1]
        }
    }
    this.isempty = function(){
        if(stackdata.length == 0){
            return true
        }else{
            return false
        }
    }
}
