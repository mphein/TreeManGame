class FallingFriend extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, moveSpeed, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.speed = moveSpeed;
        this.setGravity(0, 100);

    }

    update() {
        this.body.velocity.y = this.speed * 60;

        if (this.y >= game.config.height + this.height) {
            this.reset();
        }
    }

    reset() {
        this.y = 0;
        this.x = Math.random() * game.config.width;
    }
}