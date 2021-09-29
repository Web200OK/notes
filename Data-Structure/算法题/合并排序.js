// 给出一组区间，请合并所有重叠的区间。
// 请保证合并后的区间按区间起点升序排列。
// 输入：
// [[10,30],[20,60],[80,100],[150,180]]
// 复制
// 返回值：
// [[10,60],[80,100],[150,180]] 

/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 * 
 * @param intervals Interval类一维数组 
 * @return Interval类一维数组
 */
//合并排序
function merge( intervals ) {
        let arr = []
        let j = 0
    //对数组里的数组的第一个数排序
        intervals.sort(function(a,b){
            return a.start-b.start
        })
    //第一个while循环是使数组全部元素都能得到比较
        while(j<intervals.length){
              let left = intervals[j].start
              let right= intervals[j].end
    //第二个while循环是为了得到一个局部最大值与最小值，用left与right表示
        while(j<intervals.length-1 && right >= intervals[j+1].start){
            right = Math.max(right,intervals[j+1].end)
            j++
        }
    //将局部最大最小值作为一个数组压进一个数组里面
            arr.push(new Interval(left,right))
            j++
        }
    return arr
}
module.exports = {
    merge : merge
};
