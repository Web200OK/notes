function TwoStackQueue(){
    let stackpush = []
    let stackpop = []
    //压栈操作
    this.add = function(data){
        stackpush.push(data)
    }
    //出栈操作（一个）
    this.poll = function(){
        if(stackpush.length==0&&stackpop.length==0){
            return "your queue is empty"
        }else if(stackpop.length==0){
            while(!stackpush.length==0){
                stackpop.push(stackpush.pop())
            }
        }
        return stackpop.pop()
    }
    //出栈操作（全部）
    this.peek = function(){
        if(stackpush.length==0&&stackpop.length==0){
            return "your queue is empty"
        }else if(stackpop.length==0){
            while(!stackpush.length==0){
                stackpop.push(stackpush.pop())
            }
        }
        return stackpop.reverse()
    }
}