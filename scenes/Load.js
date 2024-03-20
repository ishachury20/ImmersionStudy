class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        // set load path
        this.load.path = 'assets/'
        this.load.spritesheet('platformer', 'alienPink.png', {
            frameWidth: 72, 
            frameHeight: 95, 
        }); 
        this.load.spritesheet('coins', 'coins_animation.png', {
            frameWidth: 16, 
            frameHeight: 16.
        }); 
        this.load.spritesheet('meteor', 'Spacerocks.png', {
            frameWidth: 250, 
            frameHeight: 250.
        }); 
        this.load.image('background', 'talltrees.png'); 
        this.load.image('ground', 'Ground.png'); 
        this.load.image('clouds', 'Clouds.png'); 
        this.load.image('leaves', 'Leaves.png'); 
        this.load.image('stars', 'pixil-frame-stars.png'); 
        this.load.image('spaceship', 'shipPink.png'); 
        this.load.image('dome', 'dome.png'); 
        this.load.image('back', 'alienPink_climb1.png'); 
        this.load.image('planet1', 'planet07.png'); 
        this.load.image('planet2', 'planet08.png'); 
        this.load.image('planet3', 'planet09.png'); 
        this.load.image('panel', 'glassPanel_tab.png'); 
        this.load.image('d-ship', 'shipPink_damage.png'); 
        this.load.image('panel2', 'metalPanel_greenCorner.png')
        this.load.image('repair', 'repair.webp')
        this.load.image('runningship', 'shipPink_manned.png');
        this.load.image('icon', 'Icon.png'); 
        this.load.image('station', 'spaceStation_024.png'); 
        this.load.image('b-ship', 'shipBlue_manned.png'); 
        this.load.image('g-ship', 'shipGreen_manned.png'); 
        this.load.image('y-ship', 'shipYellow_manned.png'); 
        this.load.image('arrowkey', 'Arrowkey.png'); 

        this.load.audio('spacebackground', 'background.mp3'); 
        this.load.audio('platformerbackground', 'arcademusic.mp3'); 
        this.load.audio('click', 'click.wav'); 
        this.load.audio('jump', 'jumping.wav'); 
    }

    create(){
        this.anims.create({
            key: 'idle', 
            frameRate: 7, 
            frames: this.anims.generateFrameNumbers('platformer', {
                start: 4, 
                end: 4
            }),
        })
        this.anims.create({
            key: 'jump', 
            frameRate: 30,
            frames: this.anims.generateFrameNumbers('platformer', {
                start: 10, 
                end: 10 
            }), 
        })
        this.anims.create({
            key: 'walk', 
            frameRate: 30,
            frames: this.anims.generateFrameNumbers('platformer', {
                frames: [0, 0, 6, 7, 6, 0, 0], 
                repeat: -1
            }), 
        })
        this.anims.create({
            key: 'spinning', 
            frameRate: 10, 
            frames: this.anims.generateFrameNumbers('coins', {
                start: 0, 
                end: 7, 
                repeat: -1
            })
        })
        this.anims.create({
            key: 'flickering', 
            frameRate: 5, 
            frames: this.anims.generateFrameNumbers('meteor', {
                frames: [1, 1, 3, 3], 
                repeat: -1
            })
        })
        this.anims.create({
            key: 'm-idle', 
            frameRate: 5, 
            frames: this.anims.generateFrameNumbers('meteor', {
                start: 1,
                end: 1 
            })
        })


        this.scene.start('menuScene');    
    }
} 