import { Link } from "react-router-dom";
import { useState } from "react";

const Four = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
  #include <stdio.h>
  #include <stdlib.h>

  struct node {
      int num;
      int coeff;
      struct node *next;
  };

  struct node *start1 = NULL;
  struct node *start2 = NULL;
  struct node *start3 = NULL;
  struct node *start4 = NULL;

  struct node *create_poly(struct node *);
  void display_poly(struct node *);
  struct node *add_poly(struct node *, struct node *, struct node *);
  struct node *sub_poly(struct node *, struct node *, struct node *);
  struct node *add_node(struct node *, int, int);

  int main() {
      int option;
      do {
          printf("/n******* MAIN MENU *******");
          printf("/n 1. Enter the first polynomial");
          printf("/n 2. Display the first polynomial");
          printf("/n 3. Enter the second polynomial");
          printf("/n 4. Display the second polynomial");
          printf("/n 5. Add the polynomials");
          printf("/n 6. Display the result of addition");
          printf("/n 7. Subtract the polynomials");
          printf("/n 8. Display the result of subtraction");
          printf("/n 9. EXIT");
          printf("/n/n Enter your option : ");
          scanf("%d", &option);
          switch (option) {
              case 1:
                  start1 = create_poly(start1);
                  break;
              case 2:
                  display_poly(start1);
                  break;
              case 3:
                  start2 = create_poly(start2);
                  break;
              case 4:
                  display_poly(start2);
                  break;
              case 5:
                  start3 = add_poly(start1, start2, start3);
                  break;
              case 6:
                  display_poly(start3);
                  break;
              case 7:
                  start4 = sub_poly(start1, start2, start4);
                  break;
              case 8:
                  display_poly(start4);
                  break;
              case 9:
                  printf("/nExiting program.../n");
                  break;
              default:
                  printf("/nInvalid option! Please try again./n");
          }
      } while (option != 9);
      return 0;
  }

  struct node *create_poly(struct node *start) {
      struct node *new_node, *ptr;
      int n, c;
      printf("/nEnter the number (-1 to stop): ");
      scanf("%d", &n);
      while (n != -1) {
          printf("Enter its coefficient: ");
          scanf("%d", &c);
          new_node = (struct node *)malloc(sizeof(struct node));
          if (!new_node) return start;
          new_node->num = n;
          new_node->coeff = c;
          new_node->next = NULL;
          if (start == NULL) {
              start = new_node;
          } else {
              ptr = start;
              while (ptr->next != NULL) {
                  ptr = ptr->next;
              }
              ptr->next = new_node;
          }
          printf("/nEnter the number (-1 to stop): ");
          scanf("%d", &n);
      }
      return start;
  }

  void display_poly(struct node *start) {
      struct node *ptr = start;
      if (ptr == NULL) {
          printf("/nPolynomial is empty!/n");
          return;
      }
      printf("/nPolynomial: ");
      while (ptr != NULL) {
          printf("%dx^%d ", ptr->num, ptr->coeff);
          if (ptr->next != NULL) {
              printf("+ ");
          }
          ptr = ptr->next;
      }
      printf("/n");
  }

  struct node *add_poly(struct node *start1, struct node *start2, struct node *start3) {
      struct node *ptr1 = start1, *ptr2 = start2;
      int sum_num;
      while (ptr1 != NULL && ptr2 != NULL) {
          if (ptr1->coeff == ptr2->coeff) {
              sum_num = ptr1->num + ptr2->num;
              start3 = add_node(start3, sum_num, ptr1->coeff);
              ptr1 = ptr1->next;
              ptr2 = ptr2->next;
          } else if (ptr1->coeff > ptr2->coeff) {
              start3 = add_node(start3, ptr1->num, ptr1->coeff);
              ptr1 = ptr1->next;
          } else {
              start3 = add_node(start3, ptr2->num, ptr2->coeff);
              ptr2 = ptr2->next;
          }
      }
      while (ptr1 != NULL) {
          start3 = add_node(start3, ptr1->num, ptr1->coeff);
          ptr1 = ptr1->next;
      }
      while (ptr2 != NULL) {
          start3 = add_node(start3, ptr2->num, ptr2->coeff);
          ptr2 = ptr2->next;
      }
      return start3;
  }

  struct node *sub_poly(struct node *start1, struct node *start2, struct node *start4) {
      struct node *ptr1 = start1, *ptr2 = start2;
      int sub_num;
      while (ptr1 != NULL && ptr2 != NULL) {
          if (ptr1->coeff == ptr2->coeff) {
              sub_num = ptr1->num - ptr2->num;
              start4 = add_node(start4, sub_num, ptr1->coeff);
              ptr1 = ptr1->next;
              ptr2 = ptr2->next;
          } else if (ptr1->coeff > ptr2->coeff) {
              start4 = add_node(start4, ptr1->num, ptr1->coeff);
              ptr1 = ptr1->next;
          } else {
              start4 = add_node(start4, -ptr2->num, ptr2->coeff);
              ptr2 = ptr2->next;
          }
      }
      while (ptr1 != NULL) {
          start4 = add_node(start4, ptr1->num, ptr1->coeff);
          ptr1 = ptr1->next;
      }
      while (ptr2 != NULL) {
          start4 = add_node(start4, -ptr2->num, ptr2->coeff);
          ptr2 = ptr2->next;
      }
      return start4;
  }

  struct node *add_node(struct node *start, int n, int c) {
      struct node *ptr, *new_node;
      new_node = (struct node *)malloc(sizeof(struct node));
      if (!new_node) return start;
      new_node->num = n;
      new_node->coeff = c;
      new_node->next = NULL;
      if (start == NULL) {
          start = new_node;
      } else {
          ptr = start;
          while (ptr->next != NULL) {
              ptr = ptr->next;
          }
          ptr->next = new_node;
      }
      return start;
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

      <h1>4: IMPLEMENTATION OF POLYNOMIAL MANIPULATION USING LINKED LIST</h1>

      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Four;