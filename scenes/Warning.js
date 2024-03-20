class Warning extends Phaser.Scene {
    constructor() {
        super('warningScene')
    }

    create(){
        this.time = 1; 
        this.cameras.main.setBackgroundColor('#242526');        
        this.add.sprite(0, 0, 'stars').setScale(2);   

        this.planet1 = this.add.sprite(100, 100, 'planet3').setScale(0.5); 
        this.planet2 = this.add.sprite(800, 500, 'planet2').setScale(0.2);  

        this.meteor1 = this.physics.add.sprite(500, 500, 'meteor').setScale(0.8); 
        this.meteor1.anims.play('m-idle'); 
        this.meteor1.setVelocityX(-45); 
        this.meteor1.setVelocityY(45); 

        this.meteor2 = this.physics.add.sprite(10, 150, 'meteor').setScale(0.8); 
        this.meteor2.anims.play('m-idle'); 
        this.meteor2.setVelocityX(-45); 
        this.meteor2.setVelocityY(45); 

        this.meteor3 = this.physics.add.sprite(0, 350, 'meteor').setScale(0.8); 
        this.meteor3.anims.play('m-idle'); 
        this.meteor3.setVelocityX(-45); 
        this.meteor3.setVelocityY(45); 

        this.panel1 = this.add.sprite(440, 230, 'panel').setScale(3.5)
        this.panel = this.add.sprite(400, 250, 'panel').setScale(3.5)

        const text = this.add.text(260, 150, 'ENGINE FAILURE', {align: 'center'}); 
        text.setFontFamily('Arial Black'); 
        text.setFontSize(30); 

        const text1 = this.add.text(260, 205, 'SYSTEMS SHUTTING DOWN', {align: 'center'}); 
        text1.setFontFamily('Arial Black'); 
        text1.setFontSize(18); 

        const text2 = this.add.text(325, 230, 'HULL DAMAGED', {align: 'center'}); 
        text2.setFontFamily('Arial Black'); 
        text2.setFontSize(18); 

        // this.leftkey = this.add.sprite(50, 75, 'arrowkey'); 
        // this.rightkey = this.add.sprite(120, 75, 'arrowkey'); 
        // this.downkey = this.add.sprite(85, 75, 'arrowkey'); 
        // this.upkey = this.add.sprite(85, 40, 'arrowkey'); 
        // this.upkey.rotation = Math.PI/2; 
        // this.downkey.rotation = Math.PI/2*3; 
        // this.rightkey.rotation = Math.PI; 
        // this.downkey.tint = 0x626261; 
        // this.upkey.tint = 0x626261; 
        // this.leftkey.tint = 0x626261; 
        // this.rightkey.tint = 0x626261; 


        const button = this.add.text(335, 300, 'FIX NOW!');
        button.setFontFamily('Arial Black'); 
        button.setFontSize(25); 
        button.setTint(0xFFFFFF) 
        button.setInteractive(); 
        button.on('pointerover', ()=> this.scene.start('sensoryScene')); 

        const fx1 = button.postFX.addGlow(0xFACADE, 0, 0, false, 0.1, 14); 
        this.tweens.add({
            targets: fx1, 
            outerStrength: 2, 
            yoyo: true, 
            loop: -1, 
            ease: 'sine.inout'
        }); 
        
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
                    break
            }
        })
        

    }

    update(){
        this.time += 1; 
    
        if(this.time % 100 == 0){
            this.cameras.main.shake(80); 
        }

        this.physics.world.wrap(this.meteor1); 
        this.physics.world.wrap(this.meteor2); 
        this.physics.world.wrap(this.meteor3); 
    }
} 