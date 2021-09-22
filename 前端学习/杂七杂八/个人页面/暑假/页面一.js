//获取middle标签
var middleimglist = document.getElementById("middleimglist")
//获取middleimg标签
var middleimg = document.querySelectorAll(".middleimg")
//获取middlebuttom标签
var middlebutton = document.querySelectorAll(".middlebutton")
//遍历图片并设置left值
for(var i=0;i<middleimg.length;i++){
    // middleimg[i].style.left = 448*i+"px"
    middleimglist.style.width = 600+600*i+"px"
}
var index = 0
middlebutton[index].style.backgroundColor = "black"
for(var j=0;j<middlebutton.length;j++){
    middlebutton[j].num = j
    middlebutton[j].onclick = function(){
       index = this.num
       setA()
       move(middleimglist,"left",-600*index,20,function(){})
    }
}
function setA(){
    for(var a =0;a<middlebutton.length;a++){
        middlebutton[a].style.backgroundColor = ""
    }
    middlebutton[index].style.backgroundColor = "black"
}
//获取middle标签
var middle = document.getElementById("middle")
//获取有多少个图片与文章
var middlea = document.querySelectorAll(".middlea")
middle.style.height = middlea.length/2*500+"px"









