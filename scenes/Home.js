class Home extends Phaser.Scene {
    constructor() {
        super('homeScene')
    }

    create(){
        this.cameras.main.setBackgroundColor('#242526');        
        this.add.sprite(0, 0, 'stars').setScale(2);   

        this.rec2 = this.add.rectangle(0, 525, 1700, 15); 
        this.physics.add.existing(this.rec2); 
        this.rec2.body.setImmovable(true); 

        // this.rec3 = this.add.rectangle(300, 0, 420, 35); 
        // this.physics.add.existing(this.rec3); 

        this.alien2 = this.physics.add.sprite(50, 400, 'y-ship').setScale(0.69); 
        this.alien2.rotation += 0.15; 
        this.alien2.setVelocityX(5); 
        this.alien2.setVelocityY(-5); 

        this.alien1 = this.physics.add.sprite(800, 300, 'b-ship').setScale(0.7); 
        this.alien1.rotation -= 0.2; 
        this.alien1.setVelocityX(-5); 
        this.alien1.setVelocityY(-5); 

        this.planet1 = this.add.sprite(300, 100, 'planet1').setScale(0.5); 
        this.station = this.physics.add.sprite(560, 270, 'station').setScale(0.85); 

        this.leftkey = this.add.sprite(50, 75, 'arrowkey'); 
        this.rightkey = this.add.sprite(120, 75, 'arrowkey'); 
        this.downkey = this.add.sprite(85, 75, 'arrowkey'); 
        this.upkey = this.add.sprite(85, 40, 'arrowkey'); 
        this.upkey.rotation = Math.PI/2; 
        this.downkey.rotation = Math.PI/2*3; 
        this.rightkey.rotation = Math.PI; 
        this.downkey.tint = 0x626261; 

        const text2 = this.add.text(630, 65, '[ FOLLOW SIGNAL ]', {align: 'center'}); 
        text2.setFontFamily('Arial Black'); 
        text2.setFontSize(15); 
        text2.tint = 0xF19CB7; 

        this.icon = this.physics.add.sprite(300, 100, 'icon').setScale(0.35); 
        this.icon.setSize(75, 75); 
        const fx1 = this.icon.postFX.addGlow(0xFACADE, 0, 0, false, 0.1, 14); 
        this.tweens.add({
            targets: fx1, 
            outerStrength: 1, 
            yoyo: true, 
            loop: -1, 
            ease: 'sine.inout'
        });

        this.r_ship = this.physics.add.sprite(250, 465, 'runningship').setScale(0.8); 
        this.r_ship.body.setGravityY(300);
        this.physics.add.collider(this.rec2, this.r_ship); 

        cursors = this.input.keyboard.createCursorKeys(); 

        this.input.keyboard.on('keydown', (event) => {
            switch(event.key){
                case '1': 
                    this.scene.start('plainScene'); 
                    break; 
                case '2': 
                    this.scene.start('narrativeScene'); 
                    break; 
                case '3': 
                    this.scene.start('warningScene'); 
                    break; 
                case '4': 
                    this.scene.start('sensoryScene'); 
                    break; 
                case '5': 
                    this.scene.start('systemicScene'); 
                    break; 
                case '6': 
                    this.scene.start('worldScene'); 
                    break;
                case '7': 
                    this.scene.start('homeScene'); 
                    break;  
                default: 
                    break; 
            }
        })
    }

    update(){
        this.physics.add.overlap(this.r_ship, this.icon, ()=>{
            this.scene.start('creditScene'); 
        }, null, this)

        if(cursors.left.isDown){
            this.r_ship.body.setVelocityX(-150); 
            this.leftkey.tint = 0xFACADE; 
            
        } else if(cursors.right.isDown){
            this.r_ship.setVelocityX(150); 
            this.rightkey.tint = 0xFACADE; 
        } else {  
            this.r_ship.setVelocityX(0); 
            this.leftkey.tint = 0xFFFFFF;
            this.rightkey.tint = 0xFFFFFF;  
            this.upkey.tint = 0xFFFFFF;  

        }
        if(cursors.up.isDown){
            this.r_ship.setVelocityY(-170)
            this.upkey.tint = 0xFACADE; 
            this.r_ship.setVelocityX(0);
        }

    }
} 