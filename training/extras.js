// const road = [
//     [0, 0, 0], // <- end
//     [0, 0, 0],
// /* start -> */ [0, 0, 0]
// ]

// const road2 = [
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// ]

// function getShortestPath(road, start, end) {
// const visited = new Set()
// const allPaths = []
// traverse(start, end, road, [], allPaths, visited)
// return allPaths[0]
// }

// function traverse(start, end, road, path, allPaths, visited) {
// if (start.join() === end.join()) {
// if (allPaths.length > 0) {
//  if (path.length < allPaths[0].length) {
//      allPaths[0] = path
//  }
// }else {
//  allPaths.push([...path])
// }
// return
// }
// visited.add(start.join())
// const validMoves = getValidMoves(start, road)
// validMoves.forEach(move => {
// if (visited.has(move.join())) return
// path.push(move)
// traverse(move, end, road, path, allPaths, visited)
// path.pop()
// })
// visited.delete(start.join())
// }

// function findShortestInPaths(allPaths) {
// return allPaths.reduce((acc, currentPath) => {
// if (currentPath.length < acc.length) {
//  acc = currentPath
// }
// return acc
// }, allPaths[0])
// }

// function getValidMoves(location, road) {
// const left = [location[0], location[1] - 1]
// const right = [location[0], location[1] + 1]
// const up = [location[0] - 1, location[1]]
// const down = [location[0] + 1, location[1]]

// return [up, right, down, left].filter(move => {
// return (
//  move[0] >= 0 
//  && move[1] >= 0 
//  && move[0] < road.length 
//  && move[1] < road[0].length
// )
// })
// }

// // console.log(getValidMoves([0, 0], road))
// console.log(getShortestPath(road,[2, 0], [0, 2]))
// console.log(getShortestPath(road2,[0, 0], [0, 5]))