class Systemic extends Phaser.Scene {
    constructor() {
        super('systemicScene')
    }

    create(){ //repair flag 

        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0,0); 
        this.flag = false; 
      

        this.ground = this.add.sprite(315, game.config.height-35, 'ground').setScale(0.75)
        this.ground2 = this.add.sprite(550, game.config.height-35, 'ground').setScale(0.75); 
        this.rec1 = this.add.rectangle(0, 505, 1700, 40);
        this.physics.add.existing(this.rec1); 
        this.rec1.body.setImmovable(true); 

        this.cloud1 = this.physics.add.sprite(105, 70, 'clouds').setScale(1.25); 
        this.cloud1.body.setVelocityX(-25); 
        
        this.cloud2 = this.physics.add.sprite(605, 75, 'clouds').setScale(1.25);
        this.cloud2.body.setVelocityX(-25); 

        // this.damagedship = this.physics.add.sprite(50, game.config.height-40, 'd-ship').setScale(0.8); 

        // this.player = this.physics.add.sprite(120, game.config.height-80, 'platformer').setScale(0.75); 
        // this.player.body.setGravityY(500); 

        this.ground3 = this.add.sprite(370, game.config.height-275, 'ground').setScale(0.75); 
        this.ground3.setCrop(0,0,350,400); 
        this.rec2 = this.add.rectangle(185, 266, 260, 45); 
        this.physics.add.existing(this.rec2); 
        this.rec2.body.setImmovable(true);

        this.ground4 = this.add.sprite(750, game.config.height-160, 'ground').setScale(0.75); 
        this.ground4.setCrop(0,0,350,400); 
        this.rec3 = this.add.rectangle(567, 379, 266, 45); 
        this.physics.add.existing(this.rec3); 
        this.rec3.body.setImmovable(true);

        this.panel1 = this.add.sprite(440, 230, 'panel2').setScale(3.5)
        this.panel = this.add.sprite(400, 250, 'panel2').setScale(3.5)

        this.symbol = this.add.sprite(395, 310, 'repair').setScale(0.3);  
        this.symbol.setTint(0xFFFFFF); 
        this.symbol.setInteractive(); 
        this.symbol.on('pointerover', ()=> this.scene.start('worldScene')); 

        this.text1 = this.add.text(295, 205, 'REPAIR SHIP', {align: 'center'}); 
        this.text1.setFontFamily('Arial Black'); 
        this.text1.setTint(0x444444)
        this.text1.setFontSize(30); 

        const fx1 = this.symbol.postFX.addGlow(0xB0FE72, 0, 0, false, 0.1, 14); 
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

} 
