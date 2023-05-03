class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images
        this.load.image('rainforest', './assets/background.png');
        this.load.image('treeman', './assets/playerSprite.png');
        this.load.image('raindrop', './assets/raindrop.png');
        this.load.image('slug', './assets/slugSprite0.png');
        this.load.audio('rainCollision', './assets/rainCollect.wav');
        this.load.audio('slugCollision', './assets/hitHurt.wav');
        this.load.audio('gameBackground', './assets/rainBackground.mp3');
    }
    
    create() {
        this.sound.play('gameBackground', {volume: .5, loop: true});

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

        // create 5 falling slugs
        this.slug1 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug2 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug3 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug4 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug5 = new FallingObject(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);

    


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
        this.slug1.update();
        this.slug2.update();
        this.slug3.update();
        this.slug4.update();
        this.slug5.update();
    }
}