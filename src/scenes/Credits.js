class Credits extends Phaser.Scene 
{
    constructor() 
    {
        super("creditScene");
    }

    preload() 
    {

    }
    
    create() 
    {
        let menuKeyConfig = 
        {
            fontFamily: 'Courier',
            fontSize: '13px',
            backgroundColor: '#000000',
            color: '#FFD700',
            align: 'center',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // create rectangles
        this.rect01 = this.add.rectangle(game.config.width/2, game.config.height/2, 400, 400, 0x000000, 0.85).setStrokeStyle(5, 0x81007f, 1)

        this.add.text(game.config.width/2, game.config.height/2, 'Credits:\nIdeation - Daniel, Emily, Li-Yu, Michael\nCoding&Mechanics - Daniel, Emily, Li-Yu, Michael\nLevel Design - Li-Yu Sun\nArt&UI Design - Li-Yu Sun', menuKeyConfig).setOrigin(0.5);

        let exitButton = this.add.text(game.config.width/2, game.config.height/2 + 180, 'BACK', menuKeyConfig).setOrigin(0.5).setTint(0x81007f);

        exitButton.setInteractive
        ({
            useHandCursor: true,
        });

        exitButton.on('pointermove', () => 
        {
            exitButton.setTint(0xffffff);

            this.clock = this.time.delayedCall(500, () => 
            {
                exitButton.setTint(0x81007f);
            }, null, this);
        }, this);

        exitButton.once('pointerdown', () => 
        {
            this.scene.sendToBack().sleep()
            this.scene.start('menuScene');
            
        });
    }

    update() 
    {

    }
    
}