import { Link } from "react-router-dom";
import { useState } from "react";

const Two = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
#include <stdio.h>
#include <stdlib.h>

struct node {
    int label;
    struct node *next;
};

int main() {
    int ch, k, found;
    struct node *head, *temp, *curr, *prev;

    head = (struct node *)malloc(sizeof(struct node));
    head->label = -1;
    head->next = NULL;

    while (1) {
        printf("/nSINGLY LINKED LIST OPERATIONS/n");
        printf("1. Add Node/n");
        printf("2. Delete Node/n");
        printf("3. View List/n");
        printf("4. Exit/n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("Enter label after which to add: ");
                scanf("%d", &k);
                curr = head;
                found = 0;
                while (curr != NULL) {
                    if (curr->label == k) {
                        found = 1;
                        break;
                    }
                    curr = curr->next;
                }
                if (!found) {
                    printf("Node not found!/n");
                } else {
                    temp = (struct node *)malloc(sizeof(struct node));
                    printf("Enter label for new node: ");
                    scanf("%d", &temp->label);
                    temp->next = curr->next;
                    curr->next = temp;
                    printf("Node inserted successfully!/n");
                }
                break;

            case 2:
                printf("Enter label of node to delete: ");
                scanf("%d", &k);
                curr = head->next;
                prev = head;
                found = 0;
                while (curr != NULL) {
                    if (curr->label == k) {
                        found = 1;
                        break;
                    }
                    prev = curr;
                    curr = curr->next;
                }
                if (!found) {
                    printf("Node not found!/n");
                } else {
                    prev->next = curr->next;
                    free(curr);
                    printf("Node deleted successfully!/n");
                }
                break;

            case 3:
                printf("/nHEAD -> ");
                curr = head->next;
                if (curr == NULL) {
                    printf("List is empty!");
                } else {
                    while (curr != NULL) {
                        printf("%d -> ", curr->label);
                        curr = curr->next;
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
  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>2: IMPLEMENTATION OF SINGLY LINKED LIST</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Two;