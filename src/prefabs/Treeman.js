class Treeman extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, moveSpeed, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.speed = moveSpeed
    }

    update() {
        if (keyLEFT.isDown && this.x >= this.width - 50) {
            this.body.velocity.x = -this.speed * 60;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - this.width + 50) {
            this.body.velocity.x = this.speed * 60;
        } else {
            this.body.velocity.x = 0;
        }
    }
}