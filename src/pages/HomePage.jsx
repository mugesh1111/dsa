import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/1">
        1: Array of stack, queue, and circular queue ADTs
      </Link>
      <br />
      <Link to="/2">
        2: Singly linked list
      </Link>
      <br />
      <Link to="/3">
        3: Linked list of stack and linear queue ADTs
      </Link>
      <br />
      <Link to="/4">
        4: Polynomial manipulation using linked list
      </Link>
      <br />
      <Link to="/5">
        5: Circular queue
      </Link>
      <br />
      <Link to="/6">
        6: Evaluating postfix expressions, infix to postfix conversion
      </Link>
      <br />
      <Link to="/7">
        7: Binary search trees
      </Link>
      <br />
      <Link to="/8">
        8: AVL trees
      </Link>
      <br />
      <Link to="/9">
        9: Heaps using priority queues
      </Link>
      <br />
      <Link to="/10">
        10: Dijkstra’s algorithm
      </Link>
      <br />
      <Link to="/11">
        11: Prim’s algorithm
      </Link>
      <br />
      <Link to="/12">
        12: Linear search and binary search
      </Link>
      <br />
      <Link to="/13">
        13: Insertion and selection sort
      </Link>
      <br />
      <Link to="/14">
        14: Merge sort
      </Link>
      <br />
      <Link to="/15">
        15: Open addressing (linear probing and quadratic probing)
      </Link>
    </div>
  );
};

export default HomePage;