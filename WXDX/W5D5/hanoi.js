class Game {
  constructor(){
    //render
    //player won?
    //ask for move?
      //valid?
    //make move
    this.towers = [[3,2,1],[],[]];
  }

  isValidMove(startTowerIndex, endTowerIndex) {
    const startTower = this.towers[startTowerIndex];
    const endTower = this.towers[endTowerIndex];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length === 0) {
      return true;
    } else {
      const topRingStart = this.towers[startTowerIndex][this.towers.length - 1];
      const topRingEnd = this.towers[endTowerIndex][this.towers.length - 1];
      return topRingStart <= topRingEnd;
    }
  }

  move(startTowerIndex, endTowerIndex) {
    this.towers[endTowerIndex].push(this.towers[startTowerIndex].pop());
    console.log(this.towers);
  }


  promptMove(reader, callback) {
    // prompt('pick (start, end) index');
    // isValidMove(startTowerIndex, endTowerIndex) ?
    // move(startTowerIndex, endTowerIndex) :
    // console.log('invalid move');
    // callback(startTowerIndex, endTowerIndex);
  }

  print() {
    console.log(this.towers);
  }

  isWon() {
    //rings can be in middle/far tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  }

  run(completionCallback) {
    this.promptMove(startTowerIndex, endTowerIndex) {
      if (isValidMove) {
        console.log('invalid move!');
      }
    }
  }
}

let test = new Game;

test.move(0,1);
