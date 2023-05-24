// para ordenar alfabeticamente a-z
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

// para ordenar alfabeticamente z-a
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
