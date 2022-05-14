const road = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
]

function getCollisionPoints(road, location) {
    const collisionPoints = []

    const directions = [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1]
    ]

    directions.forEach(direction => {
        // orientate ourselves in the new direction
        let row = location[0] + direction[0]
        let column = location[1] + direction[1]
        while (
            row < road.length 
            && column < road[0].length
            && row >= 0
            && column >= 0
        ) {
            if (road[row][column] === 1) {
                collisionPoints.push([row, column])
            }
            row += direction[0]
            column += direction[1]
        }
    })

    return collisionPoints
}

console.log(getCollisionPoints(road, [3, 4])) // [(0, 1), (3, 4), (4,1)]