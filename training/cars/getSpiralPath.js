const road = [
    [01, 02, 03, 04, 05],
    [16, 17, 18, 19, 06],
    [15, 24, 25, 20, 07],
    [14, 23, 22, 21, 08],
    [13, 12, 11, 10, 09]
]

function getSpiralPath(road) {
    const spiralPath = []

    let rowStartIdx = 0 
    let rowEndIdx = road.length - 1 
    let colStartIdx = 0
    let colEndIdx = road[0].length - 1

    while (rowStartIdx <= rowEndIdx && colStartIdx <= colEndIdx) {
        // going to the right
        for (let i = colStartIdx; i <= colEndIdx; i++) {
            spiralPath.push(road[rowStartIdx][i])
        }
        rowStartIdx++

        // going down
        for (let i = rowStartIdx; i <= rowEndIdx; i++) {
            spiralPath.push(road[i][colEndIdx])
        }
        colEndIdx--

        // going left
        for (let i = colEndIdx; i >= colStartIdx; i--) {
            spiralPath.push(road[rowEndIdx][i])
        }
        rowEndIdx--

        // going up
        for (let i = rowEndIdx; i >= rowStartIdx; i--) {
            spiralPath.push(road[i][colStartIdx])
        }
        colStartIdx++
    }

    return spiralPath
}

console.log(getSpiralPath(road))