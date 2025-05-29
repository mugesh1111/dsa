import { Link } from "react-router-dom";
import { useState } from "react";

const Three = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const textToCopy = `
  #include <stdio.h>
  #include <stdlib.h>

  struct node {
      int label;
      struct node *next;
  };

  int main() {
      int ch;
      struct node *h, *temp, *head;

      head = (struct node*) malloc(sizeof(struct node));
      head->next = NULL;

      while (1) {
          printf("/nStack using Linked List/n");
          printf("1 -> Push/n");
          printf("2 -> Pop/n");
          printf("3 -> View/n");
          printf("4 -> Exit/n");
          printf("Enter your choice: ");
          scanf("%d", &ch);

          switch (ch) {
              case 1:
                  temp = (struct node*) malloc(sizeof(struct node));
                  printf("Enter label for new node: ");
                  scanf("%d", &temp->label);
                  h = head;
                  temp->next = h->next;
                  h->next = temp;
                  printf("Node %d pushed onto stack./n", temp->label);
                  break;

              case 2:
                  if (head->next == NULL) {
                      printf("Stack Underflow! No elements to pop./n");
                  } else {
                      h = head->next;
                      head->next = h->next;
                      printf("Node %d deleted/n", h->label);
                      free(h);
                  }
                  break;

              case 3:
                  printf("/nHEAD -> ");
                  h = head->next;
                  if (h == NULL) {
                      printf("Stack is empty!");
                  } else {
                      while (h != NULL) {
                          printf("%d -> ", h->label);
                          h = h->next;
                      }
                  }
                  printf("NULL/n");
                  break;

              case 4:
                  exit(0);

              default:
                  printf("Invalid choice! Try again./n");
          }
      }

      return 0;
  }

  `;
  const textToCopy2 = `
  #include <stdio.h>
  #include <stdlib.h>

  struct node {
      int label;
      struct node *next;
  };

  int main() {
      int ch;
      struct node *h, *temp, *head;

      head = (struct node*) malloc(sizeof(struct node));
      head->next = NULL;

      while (1) {
          printf("/nQueue using Linked List/n");
          printf("1 -> Insert/n");
          printf("2 -> Delete/n");
          printf("3 -> View/n");
          printf("4 -> Exit/n");
          printf("Enter your choice: ");
          scanf("%d", &ch);

          switch (ch) {
              case 1:
                  temp = (struct node*) malloc(sizeof(struct node));
                  printf("Enter label for new node: ");
                  scanf("%d", &temp->label);
                  temp->next = NULL;
                  h = head;
                  while (h->next != NULL)
                      h = h->next;
                  h->next = temp;
                  printf("Node %d inserted./n", temp->label);
                  break;

              case 2:
                  if (head->next == NULL) {
                      printf("Queue Underflow! No elements to delete./n");
                  } else {
                      h = head->next;
                      head->next = h->next;
                      printf("Node %d deleted/n", h->label);
                      free(h);
                  }
                  break;

              case 3:
                  printf("/nHEAD -> ");
                  h = head->next;
                  if (h == NULL) {
                      printf("Queue is empty!");
                  } else {
                      while (h != NULL) {
                          printf("%d -> ", h->label);
                          h = h->next;
                      }
                  }
                  printf("NULL/n");
                  break;

              case 4:
                  exit(0);

              default:
                  printf("Invalid choice! Try again./n");
          }
      }

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

  const handleCopy2 = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy2);
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>3: LINKED LIST IMPLEMENTATION OF STACK AND LINEAR QUEUE ADTS</h1>

      A <br />
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>

      <br /> B <br />
      <button
        onClick={handleCopy2}
      >
        {copied1 ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Three;