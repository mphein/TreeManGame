let config = {
    type: Phaser.CANVAS,
    width: 512,
    height: 480,
    scene: [ Menu, PlayOne, PlayTwo, Upgrades ], 
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

let gameTimer = 60000;

let passLevel1 = false;

let levelText = '';

// reserve keyboard vars
let keyLEFT, keyRIGHT, keyUP, keyF, keyU;
