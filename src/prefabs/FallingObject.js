class FallingObject extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, moveSpeed, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.speed = moveSpeed;
    }

    update() {
        this.y += this.speed;

        if (this.y >= game.config.height + this.height) {
            this.y = 0;
            this.x = Math.random() * game.config.width;
        }
    }

    reset() {
        this.y = 0;
        this.x = Math.random() * game.config.width;
    }
}