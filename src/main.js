let config = {
    type: Phaser.CANVAS,
    width: 512,
    height: 480,
    scene: [ Menu, Play ] 
  }
  
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyLEFT, keyRIGHT;
