//获取图片数组
document.addEventListener('DOMContentLoaded', () => {
    const imgs = ["url(./images2/1.png)","url(./images2/2.png)","url(./images2/3.png)","url(./images2/4.png)","url(./images2/5.png)","url(./images2/6.png)"]
    let grid = document.querySelector(".grid")
    let arr = []
    let scoreshow = document.getElementById("score")
    let score = 0
    //初始化页面
    function initialize(){
        for(let i = 0 ;i < 64;i++){
            let random = Math.floor(Math.random()*6)
            let square = document.createElement("div")
            square.setAttribute("id",i)
            square.setAttribute("draggable",true)
            square.style.backgroundImage = imgs[random]
            grid.appendChild(square)
            arr.push(square)
        }
    }
    initialize()
    //定义事件响应函数
    let dragstartcolor
    let dragstartid
    let dragleavecolor
    let dragleaveid
    function dragstart(){
        dragstartcolor = this.style.backgroundImage
        dragstartid = +this.id
    }
    let dragenter= function(e){
        e.preventDefault();
    }
    let dragover= function(e){
        e.preventDefault();
    }
    let dragleave= function(){
       this.backgroundImage = ""
    }
    let dragdrop= function(){
        dragleavecolor = this.style.backgroundImage
        dragleaveid = +this.id
        arr[dragleaveid].style.backgroundImage = dragstartcolor
        arr[dragstartid].style.backgroundImage = dragleavecolor
    }
    let dragend= function(){
        let validmoves = [dragstartid+1,dragstartid-1,dragstartid+8,dragstartid-8]
        let isvalidmove = validmoves.includes(dragleaveid)
        if(dragleaveid&&isvalidmove){
            dragleaveid = null
        }else if(dragleaveid && !isvalidmove){
            arr[dragleaveid].style.backgroundImage = dragleavecolor
            arr[dragstartid].style.backgroundImage = dragstartcolor
        }else{
            arr[dragstartid].style.backgroundImage = dragstartcolor   
        }
    }
    //绑定事件
    arr.forEach(item=>{
        item.addEventListener("dragstart",dragstart)
        item.addEventListener("dragend",dragend)
        item.addEventListener("dragenter",dragenter)
        item.addEventListener("dragover",dragover)
        item.addEventListener("dragleave",dragleave)
        item.addEventListener("drop",dragdrop)
    }
    )
    
    //设置检查函数
    //一行中连续出现三个相同方块
    let checkrowthree = function(){
        for(let i = 0;i <= 61;i++){
            let checkcolor = arr[i].style.backgroundImage
            let notcheck = [6,7,14,15,22,23,30,31,38,39,46,47,54,55]
            let check = [i,i+1,i+2]
            let isblank = arr[i].style.backgroundImage === ""
            if(notcheck.includes(i)){
                continue
            }
            if(check.every(index=>arr[index].style.backgroundImage===checkcolor&&!isblank)){
                score += 3
                scoreshow.innerHTML = score
                check.forEach(item => arr[item].style.backgroundImage = "")
            }
        }
    }
    checkrowthree()
    //一行中连续出现四个相同方块
    let checkrowfour = function(){
        for(let i = 0;i <= 60;i++){
            let checkcolor = arr[i].style.backgroundImage
            let notcheck = [6,14,22,30,38,46,54]
            let check = [i,i+1,i+2,i+3]
            let isblank = arr[i].style.backgroundImage === ""
            if(notcheck.includes(i)){
                continue
            }
            if(check.every(index=>arr[index].style.backgroundImage===checkcolor&&!isblank)){
                score += 4
                scoreshow.innerHTML = score
                check.forEach(item=>arr[item].style.backgroundImage ="")
            }

        }
    }
    checkrowfour()
    //一列中连续出现三个相同方块
    let checkcolumnthree = function(){
        for(let i = 0;i <= 47;i++){
            let checkcolor = arr[i].style.backgroundImage
            let check = [i,i+8,i+16]
            let isblank = arr[i].style.backgroundImage === ""
            if(check.every(index=>arr[index].style.backgroundImage===checkcolor&&!isblank)){
                score += 3
                scoreshow.innerHTML = score
                check.forEach(item=>arr[item].style.backgroundImage ="")
            }

        }
    }
    checkcolumnthree()
    //一列中连续出现四个相同方块
    let checkcolumnfour = function(){
        for(let i = 0;i <= 39;i++){
            let checkcolor = arr[i].style.backgroundImage
            let check = [i,i+8,i+16,i+24]
            let isblank = arr[i].style.backgroundImage === ""
            if(check.every(index=>arr[index].style.backgroundImage===checkcolor&&!isblank)){
                score += 4
                scoreshow.innerHTML = score
                check.forEach(item=>arr[item].style.backgroundImage ="")
            }

        }
    }
    checkcolumnfour()

    //自动填充空白方块
    let fillblank = function(){
        for(let i = 63;i > 7;i--){
            if(arr[i].style.backgroundImage===""){
                arr[i].style.backgroundImage = arr[i-8].style.backgroundImage
                arr[i-8].style.backgroundImage = ""
            }
        }
        for(let j = 0;j <= 7;j++){
            if(arr[j].style.backgroundImage===""){
                let random = Math.floor(Math.random()*6)
                arr[j].style.backgroundImage = imgs[random]
            }
        }
    }
    fillblank()
    window.setInterval(function(){
        checkrowthree()
        checkrowfour()
        checkcolumnfour()
        checkcolumnthree()
        fillblank()
    }, 100);
})
