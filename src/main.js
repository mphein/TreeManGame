let config = {
    type: Phaser.CANVAS,
    width: 512,
    height: 480,
    scene: [ Menu, Play ], 
    fps: {
      target: 60,
      forceSetTimeout: true
    }
  }
  
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyLEFT, keyRIGHT, keyF;
