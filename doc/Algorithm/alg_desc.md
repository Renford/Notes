## 常用数据结构

| 数据结构 | 优点               | 缺点                     |
| -------- | ------------------ | ------------------------ |
| 数组     | 插入块             | 查找慢、删除慢，大小固定 |
| 字符串   |                    |
| 链表     | 插入块、删除块     |  查找慢                  |
| 树       | 插入、删除、查找块 | 算法较为复杂             |
| 栈       | 后进先出           |
| 队列     | 先进先出           |

1. 数组

   内存连续，可以根据下标在 O(1)时间读写元素，但大小固定，经常会浪费空间

2. 字符串

   即字符数组，以'\0'结尾，容易造成字符串越界

```
char str1[] = "hello world"
char str2[] = "hello world"

char* str3 = "hello world"
char* str4 = "hello world"

printf(str1 == str2)  // false
printf(str3 == str4)  // true
```

3. 链表

动态数据结构，插入时，为每个节点分配内存，

4. 树

除根节点之外，所有节点只有一个父节点。常用的为二叉树，

- 二叉搜索树：左子树 <= 根节点 <= 右子树
- 红黑树：节点添加颜色属性，保证根节点到叶子节点最长路径不超过最短路劲的两倍
- 堆：分为最大堆和最小堆，最大堆的根节点值最大，最小堆的根节点值最小

5. 栈

后进先出，与递归紧密相关

6. 队列

先进先出，与广度优先搜索相关

## 常见相关算法

1. 递归和循环

循环：性能比较好，代码较为繁琐
递归：代码简洁，但有很显著的性能缺点，

- 性能比较差：函数调用时有时间和空间的消耗，每次函数调用都需要在内存中分配栈空间保存参数、返回地址以及临时变量，并且压栈和弹出也需要一定时间。
- 大量的重复运算，典型的就是斐波那契数列的递归算法。
- 调用栈溢出：当调用栈层级太多，超过栈容量，就会造成栈溢出。

2. 查找和排序

查找：不外乎顺序查找、二分查找、哈希表查找、二叉排序树查找。其中哈希表和二叉排序树查找重点在数据结，而不是算法。

- 哈希表查找：在 O(1)时间内可以查找任一元素，但需要额外空间来实现哈希表
- 二叉排序树查找：对应的是二叉排序树

排序：需要从额外消耗空间、平均时间复杂度、最差时间复杂度等方面进行比较各种排序

| 排序算法     | 平均时间复杂度 | 最坏时间复杂度 | 空间复杂度 | 稳定 |
| ------------ | -------------- | -------------- | ---------- | ---- |
| 冒泡排序     | O(n^2)         | O(n^2)         | Q(1)       | 是   |
| 选择排序     | O(n^2)         | O(n^2)         | Q(1)       | 否   |
| 直接插入排序 | O(n^2)         | O(n^2)         | Q(1)       | 是   |
| 快速排序     | O(nlogn)       | O(n^2)         | O(logn)    | 否   |
| 希尔排序     | O(nlogn)       | O(n^2)         | O(1)       | 否   |
| 堆排序       | O(nlogn)       | O(nlogn)       | O(1)       | 否   |
| 归并排序     | O(nlogn)       | O(nlogn)       | O(n)       | 是   |
| 桶排序       | O(n)           | O(n)           | O(k)       | 是   |
| 计数排序     | O(n+k)         | O(n+k)         | O(n+k)     | 是   |
| 基数排序     | O(n·k)         | O(n·k)         | O(n)       | 否   |

- 冒泡、选择、直接 排序需要两个 for 循环，每次只关注一个元素，平均时间复杂度为 O（n2）（一遍找元素 O(n)，一遍找位置 O(n)）。
- 快速、归并、希尔、堆基于二分思想，log 以 2 为底，平均时间复杂度为 O(nlogn)（一遍找元素 O(n)，一遍找位置 O(logn)）

[各种排序实例](https://blog.csdn.net/yushiyi6453/article/details/76407640)

3. 回溯法

适合有多个步骤，且每个步骤都有多个选项的问题。通常情况，回溯法适合用递归实现代码。

4. 动态规划和贪心算法

动态规划：一般适用于求问题的最优解。由于子问题在分解大问题的过程中重复出现，为了避免重复求解子问题，可以从下往上按顺序先计算最小问题的最优解并存储下来，在此基础上求解更大问题的最优解

- 求一个问题的最优解
- 大问题的最优解依赖于各个小问题的最优解
- 大问题分解成功若干个小问题，小问题之间还有相互重叠的更小的子问题
- 分析问题从上往下，求解问题从下往上

贪婪算法：不从整体最优上加以考虑，总是做出在当前看来是最好的选择。

5. 位运算

比较简单，只有与、或、异或、左移、右移五种操作