function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode
  if (currentNode.data === newNode.data) {
    return true
  }
  else if (newNode.data < currentNode.data) {
    if (!currentNode.left) {
      currentNode.left = newNode
    }
    else {
      return findOrAdd(currentNode.left, newNode)
    }
  }
  else if (newNode.data > currentNode.data) {
    if (!currentNode.right) {
      currentNode.right = newNode
    }
    else {
      return findOrAdd(currentNode.right, newNode)
    }
  }
}

function max(tree) {
  if (tree.right) {
    return max(tree.right)
  }
  else {
    return tree
  }
}

function min(tree) {
  if (tree.left) {
    return min(tree.left)
  }
  else {
    return tree
  }
}
