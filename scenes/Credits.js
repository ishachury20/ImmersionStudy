class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene'); 
    } 

    create(){
        this.cameras.main.setBackgroundColor('#242526');        
        this.add.sprite(0, 0, 'stars').setScale(2);   

        this.planet1 = this.add.sprite(0, 350, 'planet3').setScale(0.3); 
        this.station = this.physics.add.sprite(650, 500, 'station').setScale(0.8); 
        //this.planet2 = this.add.sprite(650, 500, 'planet2').setScale(0.2);  
        this.planet3 = this.add.sprite(800, 0, 'planet1').setScale(0.25); 

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

        this.text = this.add.text(230, 175, 'WELCOME BACK TRAVELER!', {align: 'center'}); 
        this.text.setFontFamily('Arial Black'); 
        this.text.setFontSize(27); 

        this.text1 = this.add.text(208, 240, 'YOU SUCCESSFULLY MAKE IT TO THE STATION.', {align: 'center'}); 
        this.text1.setFontFamily('Arial Black'); 
        this.text1.setFontSize(18); 

        this.text2 = this.add.text(208, 265, 'REPORT YOUR FINDINGS FROM YOUR TRAVELS.', {align: 'center'}); 
        this.text2.setFontFamily('Arial Black'); 
        this.text2.setFontSize(18); 

        this.stars = this.add.tileSprite(10, 10, game.config.width, game.config.height, 'stars').setScale(1.75);  
        
    } 

    update(){
        this.stars.tilePositionX += 0.25;        
    }
} 