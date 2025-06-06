import { Link } from "react-router-dom";
import { useState } from "react";

const Nine = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
#include <stdio.h>
#define INF 9999
#define TREE_ARRAY_SIZE 20

int heap_size = 0;

void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int get_left_child(int index) {
    if ((2 * index) <= heap_size) return 2 * index;
    return -1;
}

int get_right_child(int index) {
    if ((2 * index + 1) <= heap_size) return 2 * index + 1;
    return -1;
}

int get_parent(int index) {
    if (index > 1) return index / 2;
    return -1;
}

void min_heapify(int A[], int index) {
    int left = get_left_child(index);
    int right = get_right_child(index);
    int smallest = index;

    if (left != -1 && A[left] < A[smallest]) smallest = left;
    if (right != -1 && A[right] < A[smallest]) smallest = right;

    if (smallest != index) {
        swap(&A[index], &A[smallest]);
        min_heapify(A, smallest);
    }
}

void build_min_heap(int A[]) {
    for (int i = heap_size / 2; i >= 1; i--) {
        min_heapify(A, i);
    }
}

int minimum(int A[]) {
    return A[1];
}

int extract_min(int A[]) {
    if (heap_size == 0) return -1;
    int minm = A[1];
    A[1] = A[heap_size];
    heap_size--;
    min_heapify(A, 1);
    return minm;
}

void decrease_key(int A[], int index, int key) {
    A[index] = key;
    while (index > 1 && A[get_parent(index)] > A[index]) {
        swap(&A[index], &A[get_parent(index)]);
        index = get_parent(index);
    }
}

void insert(int A[], int key) {
    heap_size++;
    A[heap_size] = INF;
    decrease_key(A, heap_size, key);
}

void print_heap(int A[]) {
    for (int i = 1; i <= heap_size; i++) {
        printf("%d ", A[i]);
    }
    printf("/n");
}

int main() {
    int A[TREE_ARRAY_SIZE];
    int n, i, num;

    printf("Priority Queue using Min Heap:/n");
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    printf("Enter elements:/n");
    for (i = 0; i < n; i++) {
        scanf("%d", &num);
        insert(A, num);
    }
    printf("PQueue: ");
    print_heap(A);

    return 0;
}
`;


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>9: IMPLEMENTATION OF HEAPS USING PRIORITY QUEUES</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Nine;