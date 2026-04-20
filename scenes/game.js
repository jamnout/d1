class Game extends Phaser.Scene {
    constructor(){
        super('gameScene');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.font('gameFont', 'home-video-font/HomeVideo.ttf');
        this.load.image('board', 'divingboard.jpeg');
        this.load.image('underwater', 'underwater.jpg');
        this.load.audio('dive', 'dive.mp3');
    }
    create(){
        this.graphics = this.add.graphics();
        this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.board = this.add.image(260, 200, 'board');
        this.board.setScale(0.6);

        this.add.text(
            20,
            400,
        "You awaken to find yourself peering over\nthe edge of a diving board...\n\nAlthough hesitant, you can't resist\nthe draw of the water on this hot day.",
        {font: "30px gameFont"}
       )

        this.text2 = this.add.text(
            20,
            530,
            "- Click to Dive -",
            {font: "30px gameFont"}
        );
        this.text2.setAlpha(0);
        let textTween = this.tweens.add({
            targets: this.text2,
            ease: "Power0",
            alpha: 1,
            delay: 5000,
            duration: 600,
            yoyo: 'True',
            repeat: -1
        })

        this.img = this.add.image(295, 205, 'underwater');
        this.img.setScale(.9);
        this.img.setAlpha(0);

        let music = this.sound.add('dive');
        this.input.once('pointerdown', () => {
            if (music.isPlaying) {
                music.stop();
            }
            music.play();

            this.board.destroy();
            this.tweens.add({
                targets: this.img,
                alpha: 1,
                ease: 'Power0',
                duration: 1000
            })            
        });
    }
    update(){}
}