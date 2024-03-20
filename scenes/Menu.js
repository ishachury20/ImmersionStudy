class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create(){
        this.cameras.main.setBackgroundColor('#242526');        
        this.add.sprite(0, 0, 'stars').setScale(2);   
        

        this.planet1 = this.add.sprite(10, 350, 'planet3').setScale(0.3); 
        this.planet2 = this.add.sprite(800, 500, 'planet2').setScale(0.2);  
        this.planet3 = this.add.sprite(650, 10, 'planet1').setScale(0.25); 

        this.alien2 = this.physics.add.sprite(150, 400, 'runningship').setScale(0.8); 
        this.alien2.rotation += 0.15; 
        this.tweens.add({
            targets: this.alien2, 
            ease: 'sine.inout', 
            y: Phaser.Math.Between(150, 150) + 300, 
            yoyo: true, 
            repeat: -1,
            duration: 2000
        }); 

        this.alien1 = this.physics.add.sprite(790, 300, 'b-ship').setScale(0.7); 
        this.alien1.rotation -= 0.2; 
        this.tweens.add({
            targets: this.alien1, 
            ease: 'sine.inout', 
            y: Phaser.Math.Between(150, 150) + 190, 
            yoyo: true, 
            repeat: -1,
            duration: 2000
        }); 

        this.alien3 = this.physics.add.sprite(50, 100, 'g-ship').setScale(0.67); 
        this.alien3.rotation += 0.1; 
        this.tweens.add({
            targets: this.alien3, 
            ease: 'sine.inout', 
            y: Phaser.Math.Between(150, 150) - 100, 
            yoyo: true, 
            repeat: -1,
            duration: 2000
        }); 

        this.text = this.add.text(190, 185, 'IMMERSION STUDY', {align: 'center'}); 
        this.text.setFontFamily('Arial Black'); 
        this.text.setFontSize(40); 
        // this.text2 = this.add.text(192, 235, 'EXPLORING THE FACTORS OF IMMERSIVE MEDIA', {align: 'center'}); 
        // this.text2.setFontFamily('Arial Black'); 
        // this.text2.setFontSize(19); 
        // this.text2.setTint(0xE3E3E3)

        let line = 0;

        const message = [
            'EXPLORING THE FACTORS OF IMMERSIVE MEDIA'
        ];

        const text = this.add.text(192, 235, message[line], { fontFamily: 'Arial Black', fontSize: 19 });
        //text.setOrigin(0.5, 3);

        const fx = text.preFX.addReveal();

        this.tweens.add({
            targets: fx,
            progress: 1,
            hold: 300,
            duration: 3000,
            //repeat: -1,
            onRepeat: () => {
                line++;
                if (line === message.length)
                {
                    line = 0;
                }
                text.setText(message[line]);
                //fx.progress = 0;
            }
        });
        
        const button = this.add.text(355, 350, 'START');
        button.setFontFamily('Arial Black'); 
        button.setFontSize(25); 
        button.setTint(0xFBF4F7) 
        button.setInteractive(); 
        button.on('pointerover', ()=> 
            this.scene.start('plainScene'),
            
        );

        const fx1 = button.postFX.addGlow(0xFACADE, 0, 0, false, 0.1, 14); 
        this.tweens.add({
            targets: fx1, 
            outerStrength: 1.1, 
            yoyo: true, 
            loop: -1, 
            ease: 'sine.inout'
        }); 

        this.stars = this.add.tileSprite(10, 10, game.config.width, game.config.height, 'stars').setScale(1.75);  

    }

    update(){
        this.stars.tilePositionX += 0.25; 
    }
} 