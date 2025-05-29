import { Link } from "react-router-dom";
import { useState } from "react";

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
  #include<stdio.h>
  #include<stdlib.h>

  struct node {
      int info;
      struct node *link;
  } *rear = NULL;

  void insert(int item);
  int del();
  void display();
  int isEmpty();
  int peek();

  int main() {
      int choice, item;
      while (1) {
          printf("/n1.Insert/n2.Delete/n3.Peek/n4.Display/n5.Quit/n");
          printf("Enter your choice: ");
          scanf("%d", &choice);
          switch (choice) {
              case 1:
                  printf("Enter the element for insertion: ");
                  scanf("%d", &item);
                  insert(item);
                  break;
              case 2:
                  printf("Deleted element is %d/n", del());
                  break;
              case 3:
                  printf("Item at the front of queue is %d/n", peek());
                  break;
              case 4:
                  display();
                  break;
              case 5:
                  exit(0);
              default:
                  printf("Wrong choice/n");
          }
      }
  }

  void insert(int item) {
      struct node *tmp = (struct node *)malloc(sizeof(struct node));
      if (tmp == NULL) {
          printf("Memory not available/n");
          return;
      }
      tmp->info = item;
      if (isEmpty()) {
          rear = tmp;
          tmp->link = rear;
      } else {
          tmp->link = rear->link;
          rear->link = tmp;
          rear = tmp;
      }
  }

  int del() {
      int item;
      struct node *tmp;
      if (isEmpty()) {
          printf("Queue underflow/n");
          exit(1);
      }
      if (rear->link == rear) {
          tmp = rear;
          item = tmp->info;
          rear = NULL;
      } else {
          tmp = rear->link;
          rear->link = tmp->link;
          item = tmp->info;
      }
      free(tmp);
      return item;
  }

  int peek() {
      if (isEmpty()) {
          printf("Queue underflow/n");
          exit(1);
      }
      return rear->link->info;
  }

  int isEmpty() {
      return (rear == NULL);
  }

  void display() {
      struct node *p;
      if (isEmpty()) {
          printf("Queue is empty/n");
          return;
      }
      printf("Queue is:/n");
      p = rear->link;
      do {
          printf("%d ", p->info);
          p = p->link;
      } while (p != rear->link);
      printf("/n");
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

      <h1>5: IMPLEMENTATION OF CIRCULAR QUEUE</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Five;