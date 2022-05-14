const road = [
               [0, 0, 0], // <- end
               [0, 0, 0],
/* start -> */ [0, 0, 0]
]

const road2 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]

function getShortestPath(road, start, end) {
    const visited = new Set()
    const shortestPath = []
    traverse(start, end, road, [], shortestPath, visited)
    return shortestPath
}

function traverse(start, end, road, currentPath, shortestPath, visited) {
    if (start.join() === end.join()) {
        if (shortestPath.length > 0) {
            if (currentPath.length < shortestPath[0].length) {
                shortestPath.pop()
                shortestPath.push([...currentPath])
            }
        }else {
            shortestPath.push([...currentPath])
        }
        return
    }
    visited.add(start.join())
    const validMoves = getValidMoves(start, road)
    validMoves.forEach(move => {
        if (visited.has(move.join())) return
        currentPath.push(move)
        traverse(move, end, road, currentPath, shortestPath, visited)
        currentPath.pop()
    })
    visited.delete(start.join())
}

function getValidMoves(location, road) {
    const left = [location[0], location[1] - 1]
    const right = [location[0], location[1] + 1]
    const up = [location[0] - 1, location[1]]
    const down = [location[0] + 1, location[1]]

    return [up, down, right, left].filter(move => {
        return (
            move[0] >= 0 
            && move[1] >= 0 
            && move[0] < road.length 
            && move[1] < road[0].length
        )
    })
}

console.log(getShortestPath(road,[2, 0], [0, 2]))

// Takes a few seconds to finish running
console.log(getShortestPath(road2,[0, 0], [0, 5]))