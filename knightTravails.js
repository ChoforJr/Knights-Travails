const node = (vertex, edges) => {
  return {
    vertex,
    edges,
  };
};

const knightTravails = () => {
  const board = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
  ];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let edges = [];
      let possibleEdges = [
        [i + 1, j + 2],
        [i + 2, j + 1],
        [i - 1, j - 2],
        [i - 2, j - 1],
        [i + 1, j - 2],
        [i + 2, j - 1],
        [i - 1, j + 2],
        [i - 2, j + 1],
      ];
      possibleEdges.forEach((a) => {
        if (a[0] >= 0 && a[0] <= 7 && a[1] >= 0 && a[1] <= 7) {
          edges.push([a[0], a[1]]);
        }
      });
      board[i][j] = node([i, j], edges);
    }
  }

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
  }

  const pathTracker = (currentVertex, previousVertex) => {
    return {
      currentVertex,
      previousVertex,
    };
  };

  function knightMoves(start, end) {
    let startVertex = pathTracker(start, null);
    let queue = [startVertex];
    let visited = [],
      visitedNode = [];
    let current, currentNode;
    while (queue.length > 0) {
      current = queue[0].currentVertex;
      let currentString = JSON.stringify(current);
      let visitedString = JSON.stringify(visited);
      if (visitedString.includes(currentString)) {
        queue.shift();
      } else {
        currentNode = queue[0];
        visited.push(current);
        visitedNode.push(currentNode);
        if (arraysEqual(current, end)) {
          break;
        }
        board[current[0]][current[1]].edges.forEach((edge) => {
          let edgeVertex = pathTracker(edge, current);
          queue.push(edgeVertex);
        });
        queue.shift();
      }
    }
    let path = [];
    let FirstIndex = visitedNode.length - 1;
    let curr = visitedNode[FirstIndex].currentVertex;
    let previous;
    while (previous !== null) {
      path.unshift(curr);
      let indexCheck = visitedNode.find((item) => item.currentVertex == curr);
      previous = indexCheck.previousVertex;
      curr = previous;
    }

    return console.log(path);
  }

  return { knightMoves };
};
const test = knightTravails();
test.knightMoves([2, 3], [7, 0]);
