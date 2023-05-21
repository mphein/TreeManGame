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
        this.treeMan = new Treeman(this, game.config.width/2, game.config.height - 100, moveSpeed, 'treeman').setOrigin(.5,0);
        this.treeMan.setSize(40,75)

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);   

        // rain group
        this.rainGroup = this.physics.add.group();
        // create 10 raindrops
        for (var i = 0; i < 10; i++) {
            this.rainGroup.add(new FallingFriend(this, Math.random() * game.config.width,0, Math.random() + 2,'raindrop').setOrigin(.5,0), false);
        }
        this.physics.add.overlap(this.treeMan, this.rainGroup, this.rainCollision, null, this);

        // slug group
        // create 5 falling slugs
        this.slugGroup = this.physics.add.group();
        for (var i = 0; i < 5; i++) {
            let currSlug = new FallingHostile(this, Math.random() * game.config.width,0, Math.random() + 2,'slug').setOrigin(.5,0);
            currSlug.setSize(25,50)
            this.slugGroup.add(currSlug, false);
        }
        this.physics.add.overlap(this.treeMan, this.slugGroup, this.slugCollision, null, this);

        // initialize scores
        this.p1Score = 0;

        // display score
        let scoreConfig = 
        {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.scoreLeft = this.add.text(20, 20, this.p1Score, scoreConfig);
 
    }

    update() {
        if (this.p1Score < 0) {
            this.gameOver();
        }
        this.treeMan.update();
        this.rainGroup.children.each((raindrop)=> {
            raindrop.update();
        })
        this.slugGroup.children.each((slug)=> {
            slug.update();
        })
        this.scoreLeft.text = this.p1Score;
    }

    rainCollision(treeman, rain)
    {
        this.sound.play('rainCollision', {volume: .1, loop: false});
        this.p1Score++;
        rain.reset();
    }

    slugCollision(treeman, slug)
    {
        this.sound.play('slugCollision', {volume: .1, loop: false});
        this.p1Score++;
        slug.reset();
    }
    

    gameOver() {
        let gameOverText = this.add.text(game.config.width/2, game.config.height/2, 'Game Over', { fontSize: '64px', fill: '#000' }).setOrigin(0.5);
        this.scene.pause();
    }
}