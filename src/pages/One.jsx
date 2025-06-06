import { useState } from "react";
import { Link } from "react-router-dom";

const   One = () => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const textToCopy = `
#include <stdio.h>
#include <stdlib.h>

#define MAX 5
static int stack[MAX];
int top = -1;

void push(int x) {
    stack[++top] = x;
}

int pop() {
    return stack[top--];
}

void view() {
    int i;
    if (top < 0) {
        printf("/nStack is Empty/n");
    } else {
        printf("/nTop --> ");
        for (i = top; i >= 0; i--) {
            printf("%4d", stack[i]);
        }
        printf("/n");
    }
}

int main() {
    int ch = 0, val;
    while (ch != 4) {
        printf("/nSTACK OPERATION/n");
        printf("1. PUSH/n");
        printf("2. POP/n");
        printf("3. VIEW/n");
        printf("4. QUIT/n");
        printf("Enter Choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                if (top < MAX - 1) {
                    printf("Enter Stack Element: ");
                    scanf("%d", &val);
                    push(val);
                } else {
                    printf("/nStack Overflow/n");
                }
                break;

            case 2:
                if (top < 0) {
                    printf("/nStack Underflow/n");
                } else {
                    val = pop();
                    printf("/nPopped element is %d/n", val);
                }
                break;

            case 3:
                view();
                break;

            case 4:
                exit(0);

            default:
                printf("/nInvalid Choice/n");
        }
    }
    return 0;
}
`;
  const textToCopy2 = `
#include <stdio.h>
#include <stdlib.h>

#define MAX 5
static int queue[MAX];
int front = -1;
int rear = -1;

void insert(int x) {
    if (rear == MAX - 1) {
        printf("/nQueue Full/n");
        return;
    }
    queue[++rear] = x;
    if (front == -1)
        front = 0;
}

int deleteQueue() {
    int val;
    if (front == -1) {
        printf("/nQueue Empty/n");
        return -1;
    }
    val = queue[front];
    front++;
    if (front > rear)
        front = rear = -1;
    return val;
}

void view() {
    int i;
    if (front == -1)
        printf("/nQueue Empty/n");
    else {
        printf("/nFront --> ");
        for (i = front; i <= rear; i++)
            printf("%4d", queue[i]);
        printf(" <-- Rear/n");
    }
}

int main() {
    int ch = 0, val;
    while (ch != 4) {
        printf("/nQUEUE OPERATION/n");
        printf("1. INSERT/n");
        printf("2. DELETE/n");
        printf("3. VIEW/n");
        printf("4. QUIT/n");
        printf("Enter Choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("Enter element to be inserted: ");
                scanf("%d", &val);
                insert(val);
                break;
            case 2:
                val = deleteQueue();
                if (val != -1)
                    printf("Element deleted: %d/n", val);
                break;
            case 3:
                view();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice/n");
        }
    }
    return 0;
}
`;
  const textToCopy3 = `
#include <stdio.h>

#define CAPACITY 6
int queue[CAPACITY];
int front = -1, rear = -1;

int checkFull() {
    return (front == (rear + 1) % CAPACITY);
}

int checkEmpty() {
    return (front == -1);
}

void enqueue(int value) {
    if (checkFull()) {
        printf("Overflow condition/n");
    } else {
        if (front == -1)
            front = 0;
        rear = (rear + 1) % CAPACITY;
        queue[rear] = value;
        printf("%d was enqueued to circular queue/n", value);
    }
}

int dequeue() {
    int variable;
    if (checkEmpty()) {
        printf("Underflow condition/n");
        return -1;
    } else {
        variable = queue[front];
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % CAPACITY;
        }
        printf("%d was dequeued from circular queue/n", variable);
        return variable;
    }
}

void print() {
    if (checkEmpty()) {
        printf("Queue is empty/n");
    } else {
        printf("/nThe queue looks like:/n");
        int i = front;
        while (1) {
            printf("%d ", queue[i]);
            if (i == rear) break;
            i = (i + 1) % CAPACITY;
        }
        printf("/n/n");
    }
}

int main() {
    dequeue();
    enqueue(15);
    enqueue(20);
    enqueue(25);
    enqueue(30);
    enqueue(35);
    print();
    dequeue();
    dequeue();
    print();
    enqueue(40);
    enqueue(45);
    enqueue(50);
    enqueue(55);
    print();
    return 0;
}
`;

  const handleCopyA = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCopyB = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy2);
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCopyC = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy3);
      setCopied3(true);
      setTimeout(() => setCopied3(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>1: ARRAY IMPLEMENTATION OF STACK,QUEUE AND CIRCULAR QUEUE ADTS</h1>

      A <br />
      <button
        onClick={handleCopyA}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      <br /> B <br />
      <button
        onClick={handleCopyB}
      >
        {copied2 ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      <br /> C <br />
      <button
        onClick={handleCopyC}
      >
        {copied3 ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default One;