import { Link } from "react-router-dom";
import { useState } from "react";

const Twelve = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const textToCopy = `
  #include <stdio.h>
  #include <conio.h>

  void main() {
      int a[50], i, n, val, found;
      clrscr();
      printf("Enter number of elements : ");
      scanf("%d", &n);
      printf("Enter Array Elements : /n");
      for (i = 0; i < n; i++)
          scanf("%d", &a[i]);
      printf("Enter element to locate : ");
      scanf("%d", &val);
      found = 0;
      for (i = 0; i < n; i++) {
          if (a[i] == val) {
              printf("Element found at position %d", i);
              found = 1;
              break;
          }
      }
      if (found == 0)
          printf("/n Element not found");
      getch();
  }

  `;
  const textToCopy1 = `
  #include <stdio.h>

  void main() {
      int a[50], i, n, upper, lower, mid, val, found, att = 0;
      printf("Enter array size : ");
      scanf("%d", &n);
      for (i = 0; i < n; i++)
          a[i] = 2 * i;
      printf("/n Elements in Sorted Order /n");
      for (i = 0; i < n; i++)
          printf("%4d", a[i]);
      printf("/n Enter element to locate : ");
      scanf("%d", &val);
      upper = n - 1;
      lower = 0;
      found = -1;
      while (lower <= upper) {
          mid = (upper + lower) / 2;
          att++;
          if (a[mid] == val) {
              printf("Found at index %d in %d attempts", mid, att);
              found = 1;
              break;
          } else if (a[mid] > val) {
              upper = mid - 1;
          } else {
              lower = mid + 1;
          }
      }
      if (found == -1)
          printf("Element not found");
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

  const handleCopy1 = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy1);
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>12: IMPLEMENTATION OF LINEAR SEARCH AND BINARY SEARCH</h1>

      A <br />
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>

      <br /> B <br />
      <button
        onClick={handleCopy1}
      >
        {copied1 ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Twelve;