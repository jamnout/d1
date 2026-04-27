class Intro extends Phaser.Scene {
    constructor() {
        super('introScene');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.audio('testSong', 'intro-test.mp3');
        this.load.font('introFont', 'Moonlighting-license/Moonlighting.ttf');
    }
    create(){
        this.graphics = this.add.graphics();

        const jingle = this.sound.play('testSong', {
            volume: 1,
        });

        this.TitleA = this.add.text(
            115,
            207,
            "A",
            {font: "100px introFont", color: "#ffffff"}
        );
        this.TitleB = this.add.text(
            160, 240,
            "T Studios",
            {font: "100px introFont", color: "#ffffff"}
        );
        this.TitleA.setAlpha(0);
        this.TitleB.setAlpha(0);

        this.tweens.add({
            targets: [this.TitleA, this.TitleB],
            alpha: {
                getStart: () => 0,
                getEnd: () => 1
            },
            duration: 1400,
            ease: 'Power0',
            delay: 2600,
        });

        this.graphics.fillStyle(0xAA79D1, .6); //purple
        const sh1 = this.graphics.fillEllipse(540, 360, 230, 200, 30);
        
        this.graphics.fillStyle(0xDB0F0F, .7); //red
        const sh2 = this.graphics.fillEllipse(400, 290, 300, 250, 30);

        this.graphics.fillStyle(0x51D651, .5) //green
        const sh3 = this.graphics.fillEllipse(220, 290, 200, 200, 20);

        this.graphics.fillStyle(0xE3C9A3, .6);
        const sh4 = this.graphics.fillRect(420, 220, 290, 130);
        const sh5 = this.graphics.fillTriangle(200, 230, 330, 130, 315, 270);
        const sh6 = this.graphics.fillTriangle(290, 500, 200, 350, 420, 380);
        
        this.tweens.add({
            targets: [sh1, sh2, sh3, sh4, sh5, sh6],
            alpha: {
                getStart: () => 0,
                getEnd: () => 1,
            },
            duration: 4000,
            ease: "Bounce.In",
            easeParams: [50],
        });

        this.time.delayedCall(6000, () => {
            this.cameras.main.fadeOut(2000);
            this.cameras.main.on('camerafadeoutcomplete', () => {
                this.scene.switch('titleScene');
            })
        })
    }
    update(){}
}