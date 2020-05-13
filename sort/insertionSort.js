/**
 * 插入排序
 * @param {arr} arr 
 */
function insertionSort (arr) {
  var n = arr.length
  if (n <= 1) return
  for (let i = 0; i < n; i++) {
    // j 可以理解为已排序区间的右边界对应下标
    let j = i - 1
    let value = arr[i]
    // 在已排序区间内从右向左查找插入位置
    for (;j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    // 插入数据
    arr[j + 1] = value;
  }
}