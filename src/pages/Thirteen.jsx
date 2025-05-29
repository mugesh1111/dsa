import { Link } from "react-router-dom";
import { useState } from "react";

const Thirteen = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const textToCopy = `
  #include <stdio.h>

  void main() {
      int i, j, k, n, temp, a[20], p = 0;
      printf("Enter total elements: ");
      scanf("%d", &n);
      printf("Enter array elements: ");
      for (i = 0; i < n; i++)
          scanf("%d", &a[i]);
      for (i = 1; i < n; i++) {
          temp = a[i];
          j = i - 1;
          while ((j >= 0) && (temp < a[j])) {
              a[j + 1] = a[j];
              j = j - 1;
          }
          a[j + 1] = temp;
          p++;
          printf("/n After Pass %d: ", p);
          for (k = 0; k < n; k++)
              printf(" %d", a[k]);
      }
      printf("/n Sorted List : ");
      for (i = 0; i < n; i++)
          printf(" %d", a[i]);
  }

  `;
  const textToCopy1 = `
  #include <stdio.h>

  void main() {
      int a[20], i, j, n, pos, temp;
      printf("/n Enter the number of elements to be sorted: ");
      scanf("%d", &n);
      printf("/n Enter %d elements:/n", n);
      for (i = 0; i < n; i++)
          scanf("%d", &a[i]);

      for (i = n - 1; i > 0; i--) {
          int large = a[0];
          pos = 0;
          for (j = 1; j <= i; j++) {
              if (a[j] > large) {
                  large = a[j];
                  pos = j;
              }
          }
          temp = a[pos];
          a[pos] = a[i];
          a[i] = temp;
      }

      printf("The sorted array is:/n");
      for (i = 0; i < n; i++)
          printf("%d ", a[i]);
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

      <h1>13: IMPLEMENTATION OF INSERTION SORT AND SELECTION SORT</h1>

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

export default Thirteen;