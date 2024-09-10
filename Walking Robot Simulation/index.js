/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let xObstacles = new Map();
    let yObstacles = new Map();
    for (let index = 0; index < obstacles.length; index++) {
        const element = obstacles[index];
        let x = element[0];
        let y = element[1];
        if (xObstacles.has(x)) {
            xObstacles.set(x, [...xObstacles.get(x), y]);
        } else {
            xObstacles.set(x, [y]);
        }
        if (yObstacles.has(y)) {
            yObstacles.set(y, [...yObstacles.get(y), x]);
        } else {
            yObstacles.set(y, [x]);
        }
    }
    let dir = 0;
    let curPosition = [0, 0];
    let postionsSet = new Set();
    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        if (command == -1) {
            dir = (dir + 1) % 4;
            continue;
        }
        if (command == -2) {
            dir = (4 + dir - 1) % 4;
            continue;
        }
        const [x, y] = curPosition;
        switch (dir) {
            case 0: // +y
                if (xObstacles.has(x)) {
                    let obstaclesInTheWay = xObstacles.get(x).filter(item => item > y && item <= y + command);
                    let nextPosition;
                    if (obstaclesInTheWay.length == 0)
                        nextPosition = y + command;
                    else
                        nextPosition = Math.min(...obstaclesInTheWay) - 1;
                    curPosition = [x, nextPosition];
                    postionsSet.add(curPosition.toString());
                } else {
                    curPosition = [x, y + command];
                    postionsSet.add(curPosition.toString());
                }
                break;
            case 1: // +x
                if (yObstacles.has(y)) {
                    let obstaclesInTheWay = yObstacles.get(y).filter(item => item > x && item <= x + command);
                    let nextPosition;
                    if (obstaclesInTheWay.length == 0)
                        nextPosition = x + command;
                    else
                        nextPosition = Math.min(...obstaclesInTheWay) - 1;
                    curPosition = [nextPosition, y];
                    postionsSet.add(curPosition.toString());
                } else {
                    curPosition = [x + command, y];
                    postionsSet.add(curPosition.toString());
                }
                break;
            case 2: // -y
                if (xObstacles.has(x)) {
                    let obstaclesInTheWay = xObstacles.get(x).filter(item => item < y && item >= y - command);
                    let nextPosition;
                    if (obstaclesInTheWay.length == 0)
                        nextPosition = y - command;
                    else
                        nextPosition = Math.max(...obstaclesInTheWay) + 1;
                    curPosition = [x, nextPosition];
                    postionsSet.add(curPosition.toString());
                } else {
                    curPosition = [x, y - command];
                    postionsSet.add(curPosition.toString());
                }
                break;
            case 3: // -x
                if (yObstacles.has(y)) {
                    let obstaclesInTheWay = yObstacles.get(y).filter(item => item < x && item >= x - command);
                    let nextPosition;
                    if (obstaclesInTheWay.length == 0)
                        nextPosition = x - command;
                    else
                        nextPosition = Math.max(...obstaclesInTheWay) + 1;
                    curPosition = [nextPosition, y];
                    postionsSet.add(curPosition.toString());
                } else {
                    curPosition = [x - command, y];
                    postionsSet.add(curPosition.toString());
                }
                break;
        }
    }
    let maxDistance = 0;
    for (const value of postionsSet) {
        let [x, y] = value.split(',');
        let tempDistance = (x * x) + (y * y);
        if (tempDistance > maxDistance) maxDistance = tempDistance;
    }
    return maxDistance
};
