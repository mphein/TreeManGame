let config = {
    type: Phaser.CANVAS,
    width: 512,
    height: 480,
    scene: [ Menu, PlayOne, PlayTwo, PlayThree, Upgrades, Credits ], 
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
      }
    },
    fps: {
      target: 60,
      forceSetTimeout: true
    }
  }
  
let game = new Phaser.Game(config);
let moveSpeed = 3;
let scoreIncrease = 1;
let scoreDecrease = 2;
let totalScore = 0;
let treeManScale = 1;
let gameTimer = 60000;
let passLevel1 = false;
let passLevel2 = false;
let passLevel3 = false;
let levelText = 'Level 1';

// reserve keyboard vars
let keyLEFT, keyRIGHT, keyUP, keyF, keyU;
