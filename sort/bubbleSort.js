/**
 * 递归的方式
 * @param {arr} arr 
 */
function bubbleSort1 (arr) {
  let flag = false
  // 从第下标为0的数据开始和下一个数据对比
  // 如果前面的比后面的大则交换数据
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i] > arr[i + 1]
    ) {
      const temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
      // 说明有数据交换
      flag = true
    }
  }
  // 上面的过程重复，直到没有数据交换位置
  flag && bubbleSort1(arr)
}
/**
 * 循环的方式
 * @param {array} arr
 */
function bubbleSort2 (arr) {
  let n = arr.length
  if (n <= 1) return
  for (let i = 0; i < n; i++) {
    let flag = false
    for (let j = 0; j < n - i - 1; j++) {
      if (
        arr[j] > arr[j + 1]
      ) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        // 说明有数据交换
        flag = true
      }
    }
    if (!flag) break 
  }
}