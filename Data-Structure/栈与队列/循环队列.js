let Queue = function(maxlength){
    let front = 0
    let rear = 0
    let arr = new Array()
    arr.length = maxlength
    //求循环队列长度
    this.Queuelength = function(){
        return (rear-front+maxlength)%maxlength
    }
    //入队操作
    this.enter = function(e){
        if((rear+1)/maxlength==front){
            return error
        }
        arr[rear] = e
        rear = (rear+1)%maxlength
        return true
    }
    //出列操作
    this.out = function(){
        if(front==rear){
            return error
        }
        arr[front] = null
        front = (front+1)%maxlength
        
    }
    //列出队列
    this.list = function(){
        return arr
    }
}