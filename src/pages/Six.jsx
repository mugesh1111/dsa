import { Link } from "react-router-dom";
import { useState } from "react";

const Six = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const textToCopy = `
#include <stdio.h>
#include <string.h>

struct stack {
    int top;
    float a[50];
} s;

void main() {
    char pf[50];
    float d1, d2;
    int i;
    s.top = -1;
    printf("Enter the postfix expression: ");
    gets(pf);
    for (i = 0; pf[i] != '/0'; i++) {
        switch (pf[i]) {
            case '0': case '1': case '2': case '3': case '4':
            case '5': case '6': case '7': case '8': case '9':
                s.a[++s.top] = pf[i] - '0';
                break;
            case '+':
                d1 = s.a[s.top--];
                d2 = s.a[s.top--];
                s.a[++s.top] = d2 + d1;
                break;
            case '-':
                d1 = s.a[s.top--];
                d2 = s.a[s.top--];
                s.a[++s.top] = d2 - d1;
                break;
            case '*':
                d1 = s.a[s.top--];
                d2 = s.a[s.top--];
                s.a[++s.top] = d2 * d1;
                break;
            case '/':
                d1 = s.a[s.top--];
                d2 = s.a[s.top--];
                if (d1 != 0)
                    s.a[++s.top] = d2 / d1;
                else {
                    printf("Error: Division by zero/n");
                    return;
                }
                break;
            default:
                printf("Invalid character encountered: %c/n", pf[i]);
                return;
        }
    }
    printf("Expression value is: %.2f/n", s.a[s.top]);
}
`;
  const textToCopy1 = `
#include <stdio.h>
#include <string.h>

#define MAX 20
int top = -1;
char stack[MAX];

void push(char item) {
    if (top >= MAX - 1) {
        printf("Stack Overflow!/n");
        return;
    }
    stack[++top] = item;
}

char pop() {
    if (top == -1) {
        printf("Stack Underflow!/n");
        return '#';
    }
    return stack[top--];
}

int precedence(char symbol) {
    switch (symbol) {
        case '+': case '-': return 1;
        case '*': case '/': return 2;
        case '^': return 3;
        case '(': return 0;
        default: return -1;
    }
}

int isOperator(char symbol) {
    switch (symbol) {
        case '+': case '-': case '*': case '/': case '^': case '(': case ')':
            return 1;
        default:
            return 0;
    }
}

void convertInfixToPostfix(char infix[], char postfix[]) {
    int i, j = 0;
    char symbol;
    stack[++top] = '#';
    for (i = 0; i < strlen(infix); i++) {
        symbol = infix[i];
        if (!isOperator(symbol)) {
            postfix[j++] = symbol;
        } else {
            if (symbol == '(') {
                push(symbol);
            } else if (symbol == ')') {
                while (stack[top] != '(')
                    postfix[j++] = pop();
                pop(); // pop '('
            } else {
                while (precedence(symbol) <= precedence(stack[top]) && stack[top] != '#')
                    postfix[j++] = pop();
                push(symbol);
            }
        }
    }
    while (stack[top] != '#')
        postfix[j++] = pop();
    postfix[j] = '/0';
}

int main() {
    char infix[20], postfix[20];
    printf("Enter a valid infix expression: ");
    gets(infix);
    convertInfixToPostfix(infix, postfix);
    printf("The corresponding postfix expression is: ");
    puts(postfix);
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

      <h1>6: IMPLEMENTATION OF EVALUATING POSTFIX EXPRESSIONS, INFIX TO POSTFIX CONVERSION</h1>

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

export default Six;