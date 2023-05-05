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

    }
    
    create() 
    {

        this.background = this.add.tileSprite(0,0,640,480, 'rainforest').setOrigin(0,0);
        this.treeMan = new Treeman(this, game.config.width/2, game.config.height - 100, 'treeman').setOrigin(.5,0);

        // create 10 raindrops
        this.rain1 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain2 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain3 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain4 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain5 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain6 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain7 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain8 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain9 = new FallingFriend(this, Math.random() * game.config.width,0, Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);
        this.rain10 = new FallingFriend(this, Math.random() * game.config.width,0,Math.random() * 3 + 1,'raindrop').setOrigin(.5,0);

        // create 5 falling slugs
        this.slug1 = new FallingHostile(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug2 = new FallingHostile(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug3 = new FallingHostile(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug4 = new FallingHostile(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);
        this.slug5 = new FallingHostile(this, Math.random() * game.config.width,0,Math.random() * 6 + 1,'slug').setOrigin(.5,0);

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

        //check collisions
        if (this.checkSlugCollision(this.treeMan, this.slug1))
        {
            this.sound.play('slugCollision', {volume: .1, loop: false});
            this.gameOver();
        }
        if (this.checkSlugCollision(this.treeMan, this.slug2))
        {
            this.sound.play('slugCollision', {volume: .1, loop: false});
            this.gameOver();
        }
        if (this.checkSlugCollision(this.treeMan, this.slug3))
        {
            this.sound.play('slugCollision', {volume: .1, loop: false});
            this.gameOver();
        }
        if (this.checkSlugCollision(this.treeMan, this.slug4))
        {
            this.sound.play('slugCollision', {volume: .1, loop: false});
            this.gameOver();
        }
        if (this.checkSlugCollision(this.treeMan, this.slug5))
        {
            this.sound.play('slugCollision', {volume: .1, loop: false});
            this.gameOver();
        }
        if (this.checkRainCollision(this.treeMan, this.rain1))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain2))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain3))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain4))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain5))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain6))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain7))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain8))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain9))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }
        if (this.checkRainCollision(this.treeMan, this.rain10))
        {
            this.sound.play('rainCollision', {volume: .1, loop: false});
        }

    }

    checkSlugCollision(treeman, slug)
    {
        // simple AABB checking
        if (slug.x < treeman.x + 1/2 * treeman.width && 
            slug.x + 1/2 * slug.width > treeman.x &&
            slug.y < treeman.y + 1/2 * treeman.height &&
            1/2 * slug.height + slug.y > treeman.y)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    checkRainCollision(treeman, rain)
    {
        // simple AABB checking
        if (rain.x < treeman.x + 1/2 * treeman.width && 
            rain.x + 1/2 * rain.width > treeman.x &&
            rain.y < treeman.y + 1/2 * treeman.height &&
            1/2 * rain.height + rain.y > treeman.y)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    gameOver() {
        let gameOverText = this.add.text(game.config.width/2, game.config.height/2, 'Game Over', { fontSize: '64px', fill: '#000' }).setOrigin(0.5);

        this.scene.pause();
    }
}