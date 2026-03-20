export function getQuestionBank() {
  return `
QuestionStatement | DifficultyLevel | Approach1 | Approach2 | Approach3

Find the maximum element in an array | 1 | Linear search | Sorting | Divide and conquer (binary search)

Reverse a string | 1 | Iterative reversal | Recursion | Two-pointer approach

Check if a string is a palindrome | 1 | Iterative comparison | Recursive comparison | Two-pointer approach

Find the factorial of a number | 1 | Iterative multiplication | Recursion | Dynamic programming

Determine if a number is prime | 2 | Brute force | Optimized trial division | Sieve of Eratosthenes

Calculate the Fibonacci sequence | 2 | Recursion | Dynamic programming (memoization) | Dynamic programming (tabulation)

Count the number of occurrences of an element in an array | 1 | Linear search | Binary search | Hash table

Find the median of an array | 2 | Sorting | Quickselect | Heap data structure

Determine if two strings are anagrams | 1 | Sorting | Character count array | Hash table

Reverse a linked list | 1 | Iterative reversal | Recursive reversal | Stack data structure

Find the maximum subarray sum | 2 | Brute force | Kadane's algorithm | Divide and conquer

Check if a linked list has a cycle | 2 | Hash table | Two-pointer approach | Floyd's cycle finding algorithm

Implement a stack using an array | 1 | Array with top index | Dynamic resizing | Linked list implementation

Implement a queue using an array | 1 | Array with front and rear indices | Circular array | Linked list implementation

Find the nth element from the end of a linked list | 1 | Two-pointer approach | Stack | Recursion

Check if a binary tree is a BST | 2 | In-order traversal | Recursive range validation | Morris traversal

Find the height of a binary tree | 1 | Recursion | Level order traversal | Dynamic programming

Sort an array using insertion sort | 2 | Iterative approach | Recursive approach | Binary search insertion

Find the kth largest element in an array | 2 | Sorting | Heap | Quickselect

Check if a string is a valid parentheses expression | 2 | Stack | Iterative counting | Recursion

Implement a binary search tree | 2 | Recursive implementation | Iterative implementation | Self-balancing tree

Determine if a number is a power of two | 1 | Bit manipulation | Logarithmic approach | Recursion

Implement a priority queue | 2 | Array implementation | Heap | Balanced BST

Find the longest common subsequence of two strings | 3 | DP tabulation | DP memoization | Recursion

Check if a graph is connected | 2 | DFS | BFS | Disjoint set union

Calculate shortest path in a weighted graph | 3 | Dijkstra | Bellman-Ford | Floyd-Warshall

Implement a hash table | 2 | Array | Separate chaining | Open addressing

Reverse a binary tree | 2 | Recursion | Level order traversal | Stack

Find maximum element in a stack | 2 | Iterative comparison | Auxiliary stack | DP

Find first missing positive number in an array | 2 | Brute force | Hash table | Cyclic sort

Determine if a graph is a tree | 2 | DFS | Disjoint set | Topological sorting

Largest rectangle area in histogram | 3 | Brute force | Stack | DP

Implement AVL Tree | 4 | Rotations | Recursive | Self balancing tree

Implement Red Black Tree | 4 | Rotations | Color flipping | Self balancing

Implement suffix array | 5 | Suffix tree | Sorting | Binary search

Implement B Tree | 5 | Splitting and merging | Self balancing tree | Range queries
`;
}