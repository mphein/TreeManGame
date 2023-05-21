class Upgrades extends Phaser.Scene {
    constructor() {
        super("upgradesScene");
    }

    preload()
    {
        //load menu image
        this.load.image('extraLife', './assets/extraLife.png');
        this.load.image('hitpoints', './assets/hitpoints.png');
        this.load.image('speed', './assets/speed.png');
        this.load.image('rainValue', './assets/rainValue.png');
        this.load.image('upgradesSelect', './assets/upgradesSelect.png');

    }

    create() 
    {
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
    }
}