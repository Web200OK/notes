// 描述
// 给定一个节点数为n的无序单链表，对其按升序排序。

// 数据范围：
// 要求：空间复杂度 ，时间复杂度 
//暴力解法
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

function sortInList( head ) {
    //声明一个数组接收遍历的数据
    let arr = []
    while(head!==null){
        arr.push(head.val)
        head=head.next
    }
    //对数据进行排序
        arr.sort(function(a,b){
            return a-b
        })
    //声明一个新的链表接收数组中的元素
    let node = new ListNode()
    let cur = node
    for(let i = 0;i<=arr.length-1;i++){
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
        return node.next
    }
    module.exports = {
        sortInList : sortInList
    };
    
    //归并排序
    /*
     * function ListNode(x){
     *   this.val = x;
     *   this.next = null;
     * }
     */
    
    /**
     * 
     * @param head ListNode类 the head node
     * @return ListNode类
     */
    function sortInList( head ) {
        //当链表为空或只有一个元素时直接返回
        if(head==null||head.next==null){
            return head
        }
        //声明两个指针
        let low = head
        let fast = head.next
        while(fast!==null&&fast.next!==null){
        //快指针会到达中点位置
            low = low.next
            fast = fast.next.next
        }
        let newList = low.next
        low.next = null
        //递归
        let left = sortInList(head)
        let right = sortInList(newList)
        let result = new ListNode()
        let cur = result
        //使用cur存储result，因为下面result会变动
        while(left!==null&&right!==null){
            if(left.val<right.val){
                result.next = left
                left = left.next
            }else{
                result.next = right
                right = right.next
            }
            result = result.next
        }
        result.next = left!=null?left:right;
        return cur.next
        }
    module.exports = {
        sortInList : sortInList
    };