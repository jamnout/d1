class StartUp extends Phaser.Scene {
    constructor(){
        super('startupScene');
    }
    preload(){
        this.load.path = 'assets/';
    }
    create(){
        this.graphics = this.add.graphics();

        this.Title = this.add.text(
            115,
            207,
            "Adam Top\nCMPM120-D1\nClick to Continue",
            {font: "50px", color: "#ffffff"}
        );

        this.input.once('pointerdown', () => {
            this.scene.switch('introScene');
        });
    }
    update(){}
}