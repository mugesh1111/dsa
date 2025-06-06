import { Link } from "react-router-dom";
import { useState } from "react";

const Seven = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
#include <stdio.h>
#include <stdlib.h>

struct searchtree {
    int element;
    struct searchtree *left, *right;
};

typedef struct searchtree *node;
typedef int ElementType;

node root = NULL;

node insert(ElementType x, node t) {
    if (t == NULL) {
        t = (node)malloc(sizeof(struct searchtree));
        t->element = x;
        t->left = t->right = NULL;
    } else {
        if (x < t->element)
            t->left = insert(x, t->left);
        else if (x > t->element)
            t->right = insert(x, t->right);
    }
    return t;
}

node findmin(node t) {
    if (t == NULL || t->left == NULL)
        return t;
    return findmin(t->left);
}

node findmax(node t) {
    if (t == NULL || t->right == NULL)
        return t;
    return findmax(t->right);
}

node delete(ElementType x, node t) {
    node temp;
    if (t == NULL) {
        printf("/nElement not found/n");
    } else if (x < t->element) {
        t->left = delete(x, t->left);
    } else if (x > t->element) {
        t->right = delete(x, t->right);
    } else {
        if (t->left && t->right) {
            temp = findmin(t->right);
            t->element = temp->element;
            t->right = delete(t->element, t->right);
        } else {
            temp = t;
            if (t->left == NULL)
                t = t->right;
            else
                t = t->left;
            free(temp);
        }
    }
    return t;
}

node find(ElementType x, node t) {
    if (t == NULL)
        return NULL;
    if (x < t->element)
        return find(x, t->left);
    else if (x > t->element)
        return find(x, t->right);
    else
        return t;
}

void display(node t, int level) {
    if (t != NULL) {
        display(t->right, level + 1);
        printf("/n");
        for (int i = 0; i < level; i++)
            printf("    ");
        printf("%d", t->element);
        display(t->left, level + 1);
    }
}

int main() {
    int ch;
    ElementType a;
    node temp;
    while (1) {
        printf("/n1. Insert/n2. Delete/n3. Find/n4. Find Min/n5. Find Max/n6. Display/n7. Exit/nEnter Your Choice: ");
        scanf("%d", &ch);
        switch (ch) {
            case 1:
                printf("Enter an element: ");
                scanf("%d", &a);
                root = insert(a, root);
                break;
            case 2:
                printf("Enter the element to delete: ");
                scanf("%d", &a);
                root = delete(a, root);
                break;
            case 3:
                printf("Enter the element to search: ");
                scanf("%d", &a);
                temp = find(a, root);
                if (temp != NULL)
                    printf("Element found/n");
                else
                    printf("Element not found/n");
                break;
            case 4:
                temp = findmin(root);
                if (temp == NULL)
                    printf("Empty tree/n");
                else
                    printf("Minimum element: %d/n", temp->element);
                break;
            case 5:
                temp = findmax(root);
                if (temp == NULL)
                    printf("Empty tree/n");
                else
                    printf("Maximum element: %d/n", temp->element);
                break;
            case 6:
                if (root == NULL)
                    printf("Empty tree/n");
                else
                    display(root, 1);
                break;
            case 7:
                exit(0);
            default:
                printf("Invalid Choice/n");
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

      <h1>7: IMPLEMENTATION OF BINARY SEARCH TREES</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Seven;