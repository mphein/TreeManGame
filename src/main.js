let config = {
    type: Phaser.CANVAS,
    width: 512,
    height: 480,
    scene: [ Menu, Play, Upgrades ], 
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

// reserve keyboard vars
let keyLEFT, keyRIGHT, keyUP, keyF, keyU;
