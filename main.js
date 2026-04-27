let config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [ StartUp, Intro, Title, Game ]
}

let game = new Phaser.Game(config);

// look into tween chains, on complete function
// https://docs.phaser.io/api-documentation/class/tweens-tweenchain