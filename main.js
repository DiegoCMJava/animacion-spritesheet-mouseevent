class Examples extends Phaser.Scene {

    constructor() {
        super();
    };

    preload() {
        this.load.image('grid', 'assets/textures/grid-ps2.png');
        this.load.spritesheet('player', 'assets/animations/surge.png', { frameWidth: 32, frameHeight: 32 });
    };

    create() {
        this.add.tileSprite(400, 300, 800, 600, 'grid');
        this.add.image(0, 0, 'player', '__BASE').setOrigin(0, 0);

        // sección de textos
        this.add.text(250, 24, '<--ASUSTADO', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 48, '<--CAMINAR', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 80, '<--BRINCAR', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 120, '<--TROTAR', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 150, '<--CORRER', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 180, '<--VOLTERETA', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 210, '<--PRESUMIR', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 245, '<--OCULTARSE', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 275, '<--SALTAR', { color: '#00ff00' }).setOrigin(0, 0.5);
        this.add.text(250, 303, '<--SORPRENDER', { color: '#00ff00' }).setOrigin(0, 0.5);

        this.add.text(48, 440, 'Clic para cambiar la animación', { color: '#00ff00' });
        const current = this.add.text(48, 480, 'ANIMACIÓN ACTUAL: walk',{color: 'yellow'});

        // movimientos del personaje 
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'leap',
            frames: this.anims.generateFrameNumbers('player', { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'scare',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'jogging',
            frames: this.anims.generateFrameNumbers('player', { frames: [24, 25, 26, 27, 28, 29, 30, 31] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { frames: [32, 33, 34, 35, 36, 37, 38, 39] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'somersault',
            frames: this.anims.generateFrameNumbers('player', { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'showoff',
            frames: this.anims.generateFrameNumbers('player', { frames: [48, 49, 50, 51, 52, 53, 54, 55] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'cover',
            frames: this.anims.generateFrameNumbers('player', { frames: [56, 57, 58, 59, 60, 61, 62, 63] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player', { frames: [64, 65, 66, 67, 68, 69, 70, 71] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });
        this.anims.create({
            key: 'surprise',
            frames: this.anims.generateFrameNumbers('player', { frames: [72, 73, 74, 75, 76, 77, 78, 79] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 1000
        });

        const keys = ['walk', 'leap', 'scare', 'jogging', 'run', 'somersault', 'showoff', 'cover', 'jump', 'surprise'];

        const rabbit = this.add.sprite(600, 370);
        rabbit.setScale(8);
        rabbit.play('walk');

        let c = 0;
        this.input.on('pointerdown', function () {
            c++;
            if (c === keys.length) {
                c = 0;
            }
            rabbit.play(keys[c]);
            current.setText('ANIMACIÓN ACTUAL: ' + keys[c]);

        });
    };
};


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    backgroundColor: '#1a1a2d', //#1a1a2d #A9CCE3
    physics: {
        default: 'arcade'
    },
    scene: Examples

};

// instacia del juego 
const game = new Phaser.Game(config);
