class Upgrades extends Phaser.Scene {
    constructor() {
        super("upgradesScene");
    }

    preload()
    {
        //load menu image
        this.load.image('strengthen', './assets/hitpoints.png');
        this.load.image('speed', './assets/speed.png');
        this.load.image('shrink', './assets/shrink.png');
        this.load.image('rainValue', './assets/rainValue.png');
        this.load.image('upgradesSelect', './assets/upgradesSelect.png');
    }

    create() 
    {
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        let upgradesKeyConfig = 
        {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#CC000000',
            color: '#FFD700',
            align: 'center',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, 20, 'Upgrades', upgradesKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height - 50, 'Press ← and → to see upgrades\nPress ↑ to select upgrade', upgradesKeyConfig).setOrigin(0.5);

        // Make all upgrades visible
        this.strengthen = this.physics.add.group();
        this.strengthen.create((game.config.width / 4) - ((game.config.width / 4) / 2), (game.config.height / 2), 'strengthen').setScale(0.5);

        this.speed = this.physics.add.group();
        this.speed.create((game.config.width / 4) * 2 - ((game.config.width / 4) / 2), (game.config.height / 2), 'speed').setScale(0.5);

        this.shrink = this.physics.add.group();
        this.shrink.create((game.config.width / 4) * 3 - ((game.config.width / 4) / 2), (game.config.height / 2), 'shrink').setScale(0.5);

        this.rainValue = this.physics.add.group();
        this.rainValue.create(game.config.width - ((game.config.width / 4) / 2), (game.config.height / 2), 'rainValue').setScale(0.5);

        // Add selection highlighter
        this.upgradesSelect = this.physics.add.sprite((game.config.width / 4) - ((game.config.width / 4) / 2), (game.config.height / 2), 'upgradesSelect').setScale(1);

        this.selectPos = 0;

        this.strengthenDesc = 'Strengthen:\nHitting projectiles subtracts less points';
        this.speedDesc = 'Speed:\nTree can move faster';
        this.shrinkDesc = 'Shrink: \nBecome a smaller tree';
        this.rainValueDesc = 'Rain Efficiency:\nEach rain counts for more points';

        this.upgradesDesc = this.add.text(game.config.width/2, (game.config.height / 4), this.hitpointsDesc, upgradesKeyConfig).setOrigin(0.5);
    }

    update()
    {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT))
        {
            if (this.selectPos > 0) { // prevent sprite from moving off screen
                this.upgradesSelect.x -= (game.config.width / 4);
                this.selectPos--;
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT))
        {
            if (this.selectPos < 3) { // prevent sprite from moving off screen
                this.upgradesSelect.x += (game.config.width / 4);
                this.selectPos++;
            }
        }
        if (this.selectPos == 0) { // strengthen
            this.upgradesDesc.setText(this.strengthenDesc);
            if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                // Decrease point reduction when hitting projectiles
                if (scoreDecrease > 0) {
                    scoreDecrease -= 0.5;
                }
                this.scene.start('menuScene');
            }
        }
        if (this.selectPos == 1) { // speed
            this.upgradesDesc.setText(this.speedDesc);
            if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                // Increase movement speed
                moveSpeed++;
                this.scene.start('menuScene');
            }
        }
        if (this.selectPos == 2) { // shrink
            this.upgradesDesc.setText(this.shrinkDesc);
            if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                // Size decreases
                treeManScale -= 0.1;
                this.scene.start('menuScene');
            }
        }
        if (this.selectPos == 3) { // rainValue
            this.upgradesDesc.setText(this.rainValueDesc);
            if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                // point value increment increase
                scoreIncrease++;
                this.scene.start('menuScene');
            }
        }
    }
}