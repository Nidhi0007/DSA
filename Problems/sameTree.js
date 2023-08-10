// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Input: p = [1,2,3], q = [1,2,3]
// // Output: true
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

function sameTree() {
  let Output = true;
  const dfs = (p, q) => {
    if (p.value != q.value) {
      return (Output = false);
    }
  };

  if (p.left !== undefined && q.left !== undefined) {
    dfs(p?.left, q?.left);
  } else if (p.left && !q.left) {
    return (Output = false);
  } else if (q.left && !p.left) {
    return (Output = false);
  }
  if (p.right !== undefined && q.right !== undefined) {
    dfs(p?.right, q?.right);
  } else if (p.right && !q.right) {
    return (Output = false);
  } else if (q.right && !p.right) {
    return (Output = false);
  }

  dfs(p, q);
  return output;
}
