import { Link } from "react-router-dom";
import { useState } from "react";

const Fifteen = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const textToCopy = `
  #include <stdio.h>
  #include <stdlib.h>

  #define SIZE 10

  typedef struct {
      int key;
      int data;
  } HashItem;

  HashItem* hashArray[SIZE];
  HashItem* dummyItem;

  int hashCode(int key) {
      return key % SIZE;
  }

  void insert(int key, int data) {
      HashItem* item = (HashItem*) malloc(sizeof(HashItem));
      item->key = key;
      item->data = data;

      int hashIndex = hashCode(key);
      while (hashArray[hashIndex] != NULL && hashArray[hashIndex]->key != -1 && hashArray[hashIndex]->key != key) {
          hashIndex = (hashIndex + 1) % SIZE;
      }
      hashArray[hashIndex] = item;
  }

  HashItem* search(int key) {
      int hashIndex = hashCode(key);
      int startIndex = hashIndex;
      while (hashArray[hashIndex] != NULL) {
          if (hashArray[hashIndex]->key == key)
              return hashArray[hashIndex];
          hashIndex = (hashIndex + 1) % SIZE;
          if (hashIndex == startIndex)
              break;
      }
      return NULL;
  }

  HashItem* delete(int key) {
      int hashIndex = hashCode(key);
      int startIndex = hashIndex;
      while (hashArray[hashIndex] != NULL) {
          if (hashArray[hashIndex]->key == key) {
              HashItem* temp = hashArray[hashIndex];
              hashArray[hashIndex] = dummyItem;
              return temp;
          }
          hashIndex = (hashIndex + 1) % SIZE;
          if (hashIndex == startIndex)
              break;
      }
      return NULL;
  }

  void display() {
      for (int i = 0; i < SIZE; i++) {
          if (hashArray[i] != NULL && hashArray[i]->key != -1)
              printf("(%d, %d)/n", hashArray[i]->key, hashArray[i]->data);
          else
              printf(" ~~ /n");
      }
  }

  int main() {
      dummyItem = (HashItem*) malloc(sizeof(HashItem));
      dummyItem->key = -1;
      dummyItem->data = -1;

      insert(1, 20);
      insert(2, 70);
      insert(42, 80);
      insert(4, 25);
      insert(12, 44);
      insert(14, 32);
      insert(17, 11);
      insert(13, 78);
      insert(37, 97);

      display();

      HashItem* item = search(42);
      if (item != NULL)
          printf("Element found: %d/n", item->data);
      else
          printf("Element not found/n");

      delete(42);

      item = search(42);
      if (item != NULL)
          printf("Element found: %d/n", item->data);
      else
          printf("Element not found/n");

      return 0;
  }

  `;
  const textToCopy1 = `
  #include <stdio.h>
  #include <stdlib.h>

  #define SIZE 10

  typedef struct {
      int key;
      int data;
  } HashItem;

  HashItem* hashArray[SIZE];
  HashItem* dummyItem;

  int hashCode(int key) {
      return key % SIZE;
  }

  int quadraticProbe(int index, int i) {
      return (index + i * i) % SIZE;
  }

  void insert(int key, int data) {
      HashItem* item = (HashItem*) malloc(sizeof(HashItem));
      item->key = key;
      item->data = data;

      int hashIndex = hashCode(key);
      int i = 0;

      while (hashArray[hashIndex] != NULL && hashArray[hashIndex]->key != -1 && hashArray[hashIndex]->key != key) {
          i++;
          hashIndex = quadraticProbe(hashIndex, i);
      }
      hashArray[hashIndex] = item;
  }

  HashItem* search(int key) {
      int hashIndex = hashCode(key);
      int i = 0;

      while (hashArray[hashIndex] != NULL) {
          if (hashArray[hashIndex]->key == key)
              return hashArray[hashIndex];
          i++;
          hashIndex = quadraticProbe(hashIndex, i);
      }
      return NULL;
  }

  HashItem* delete(int key) {
      int hashIndex = hashCode(key);
      int i = 0;

      while (hashArray[hashIndex] != NULL) {
          if (hashArray[hashIndex]->key == key) {
              HashItem* temp = hashArray[hashIndex];
              hashArray[hashIndex] = dummyItem;
              return temp;
          }
          i++;
          hashIndex = quadraticProbe(hashIndex, i);
      }
      return NULL;
  }

  void display() {
      for (int i = 0; i < SIZE; i++) {
          if (hashArray[i] != NULL && hashArray[i]->key != -1)
              printf("(%d, %d)/n", hashArray[i]->key, hashArray[i]->data);
          else
              printf(" ~~ /n");
      }
  }

  int main() {
      dummyItem = (HashItem*) malloc(sizeof(HashItem));
      dummyItem->key = -1;
      dummyItem->data = -1;

      insert(1, 20);
      insert(2, 70);
      insert(42, 80);
      insert(4, 25);
      insert(12, 44);
      insert(14, 32);
      insert(17, 11);
      insert(13, 78);
      insert(37, 97);

      display();

      HashItem* item = search(37);
      if (item != NULL)
          printf("Element found: %d/n", item->data);
      else
          printf("Element not found/n");

      delete(37);

      item = search(37);
      if (item != NULL)
          printf("Element found: %d/n", item->data);
      else
          printf("Element not found/n");

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

      <h1>15: IMPLEMENTATION OF OPEN ADDRESSING (LINEAR PROBING AND QUADRATIC PROBING)</h1>

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

export default Fifteen;