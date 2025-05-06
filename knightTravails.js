const node = (vertex, edges) => {
  return {
    vertex,
    edges,
  };
};

const knightTravails = () => {
  return {};
};
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

function knightMoves(start, end) {
  let queue = [start];
  let visited = [];
  let current;
  while (queue.length > 0) {
    current = queue[0];
    let currentString = JSON.stringify(current);
    let visitedString = JSON.stringify(visited);
    if (visitedString.includes(currentString)) {
      queue.shift();
    } else {
      visited.push(current);
      if (arraysEqual(current, end)) {
        break;
      }
      board[current[0]][current[1]].edges.forEach((edge) => {
        queue.push(edge);
      });
      queue.shift();
    }
  }
  return console.log(visited);
}

knightMoves([0, 0], [3, 3]);
