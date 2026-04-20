class Title extends Phaser.Scene {
    constructor(){
        super('titleScene');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.font('gameFont', 'home-video-font/HomeVideo.ttf');
        this.load.image('board', 'divingboard.jpeg');
        this.load.audio('gulls', 'seagulls.mp3');
    }
    create(){
        this.graphics = this.add.graphics();

        this.cameras.main.fadeIn(3000, 0, 0, 0);
        const gulls = this.sound.play('gulls', {
            loop: 'True',
        })

        this.board = this.add.image(400, 300, 'board');
        this.tweens.add({
            targets: this.board,
            scale: 0.6,
            x: 260,
            y: 200,
            duration: 2000
        })

        this.title1 = this.add.text(
            20,
            400,
            "Diving Simulator",
            {font: "45px gameFont"}
        );
        this.title1.setAlpha(0);
        this.title2 = this.add.text(
            20,
            450,
            "Click to Start",
            {font: "45px gameFont"}
        );
        this.title2.setAlpha(0);

        this.tweens.add({
            targets: this.title1,
            ease: "Power0",
            alpha: 1,
            delay: 2400,
            duration: 0,
        })
        this.tweens.add({
            targets: this.title2,
            ease: "Power0",
            alpha: 1,
            delay: 3000,
            duration: 600,
            yoyo: 'True',
            repeat: -1
        })
        
        this.input.once('pointerdown', () => {
                this.cameras.main.fadeOut(1000);
                this.cameras.main.on('camerafadeoutcomplete', () => {
                    this.scene.switch('gameScene');
                })
        });
    }
    update(){}
}