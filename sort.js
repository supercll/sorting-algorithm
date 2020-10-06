// 快速排序
/* 
思路：
    设置一个标杆，利用递归分治的方法，将数组不断拆分为两个数组
    拆分的时候将小于标杆的元素和大于标杆的元素放入两个不同的数组
    直到所有的数组都只有一个元素时停止拆分，合并所有数组
*/

Array.prototype.quickSort = function quickSort() {
    const midIndex = Math.floor(this.length / 2);
    const mid = this.splice(midIndex, 1);

    const left = [];
    const right = [];

    for (let i = 0; i < this.length; i++) {
        let item = this[i];
        item < mid ? left.push(item) : right.push(item);
    }
};

const arr = [1, -1, 999, 3, 2];

console.log(arr.quickSort());