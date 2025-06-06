import { Link } from "react-router-dom";
import { useState } from "react";

const Fourteen = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
#include <stdio.h>

void merge(int arr[], int min, int mid, int max);
void part(int arr[], int min, int max, int size);

int main() {
    int i, size, arr[30];
    printf("Enter total no. of elements : ");
    scanf("%d", &size);
    printf("Enter array elements : ");
    for (i = 0; i < size; i++)
        scanf("%d", &arr[i]);

    part(arr, 0, size - 1, size);

    printf("/nMerge sorted list : ");
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    return 0;
}

void part(int arr[], int min, int max, int size) {
    int mid;
    if (min < max) {
        mid = (min + max) / 2;
        part(arr, min, mid, size);
        part(arr, mid + 1, max, size);
        merge(arr, min, mid, max);

        if ((max - min) == (size / 2) - 1) {
            printf("/nHalf sorted list : ");
            for (int i = min; i <= max; i++)
                printf("%d ", arr[i]);
        }
    }
}

void merge(int arr[], int min, int mid, int max) {
    int tmp[30];
    int i = min, j = min, k = mid + 1, m;

    while (j <= mid && k <= max) {
        if (arr[j] <= arr[k])
            tmp[i++] = arr[j++];
        else
            tmp[i++] = arr[k++];
    }

    while (j <= mid)
        tmp[i++] = arr[j++];
    while (k <= max)
        tmp[i++] = arr[k++];

    for (m = min; m <= max; m++)
        arr[m] = tmp[m];
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

      <h1>14: IMPLEMENTATION OF MERGE SORT</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Fourteen;