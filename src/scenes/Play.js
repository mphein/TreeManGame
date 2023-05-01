class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('rainforest', './assets/scene3.png');
        this.load.image('treeman', './assets/treeman.png');
        this.load.image('raindrop', './assets/raindrop.png');
    }
    
    create() {
        this.background = this.add.tileSprite(0,0,640,480, 'rainforest').setOrigin(0,0);
        this.treeMan = new Treeman(this, game.config.width/2, game.config.height - 100, 'treeman').setOrigin(.5,0);

        // create 10 raindrops
        this.rain1 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain2 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain3 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain4 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain5 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain6 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain7 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain8 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain9 = new FallingObject(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain10 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
    


        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);    
    }

    update() {
        this.treeMan.update();
        this.rain1.update();
        this.rain2.update();
        this.rain3.update();
        this.rain4.update();
        this.rain5.update();
        this.rain6.update();
        this.rain7.update();
        this.rain8.update();
        this.rain9.update();
        this.rain10.update();
    }
}