class Treeman extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update() {
        if (keyLEFT.isDown && this.x >= this.width) {
            this.x -= 2;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - this.width) {
            this.x += 2;
        }
    }
}