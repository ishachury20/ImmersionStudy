class World extends Phaser.Scene {
    constructor() {
        super('worldScene')
    }

    create(){ //home icon (6)
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0,0); 

        this.ground = this.add.sprite(315, game.config.height-35, 'ground').setScale(0.75)
        this.ground2 = this.add.sprite(550, game.config.height-35, 'ground').setScale(0.75); 
        this.rec1 = this.add.rectangle(0, 505, 1700, 40);
        this.physics.add.existing(this.rec1); 
        this.rec1.body.setImmovable(true); 

        this.icon = this.add.sprite(400, 50, 'icon').setScale(0.35); 

        this.rec2 = this.add.rectangle(0, 0, 1700, 35); 
        this.physics.add.existing(this.rec2); 

        this.cloud1 = this.physics.add.sprite(105, 70, 'clouds').setScale(1.25); 
        this.cloud1.body.setVelocityX(-25); 

        this.cloud2 = this.physics.add.sprite(605, 75, 'clouds').setScale(1.25);
        this.cloud2.body.setVelocityX(-25); 

        this.leftkey = this.add.sprite(50, 75, 'arrowkey'); 
        this.rightkey = this.add.sprite(120, 75, 'arrowkey'); 
        this.downkey = this.add.sprite(85, 75, 'arrowkey'); 
        this.upkey = this.add.sprite(85, 40, 'arrowkey'); 
        this.upkey.rotation = Math.PI/2; 
        this.downkey.rotation = Math.PI/2*3; 
        this.rightkey.rotation = Math.PI; 
        this.downkey.tint = 0x626261; 

        this.ground3 = this.add.sprite(370, game.config.height-275, 'ground').setScale(0.75); 
        this.ground3.setCrop(0,0,350,400); 

        this.ground4 = this.add.sprite(750, game.config.height-160, 'ground').setScale(0.75); 
        this.ground4.setCrop(0,0,350,400); 

        this.r_ship = this.physics.add.sprite(250, 430, 'runningship').setScale(0.8); 
        this.r_ship.body.setGravityY(300);
        this.physics.add.collider(this.rec1, this.r_ship); 

        const text2 = this.add.text(630, 65, '[ SYSTEMS ONLINE ]', {align: 'center'}); 
        text2.setFontFamily('Arial Black'); 
        text2.setFontSize(15); 
        text2.tint = 0xF19CB7; 

        this.text3 = this.add.text(610, 85, 'THRUSTERS DAMAGED', {align: 'center'}); 
        this.text3.setFontFamily('Arial Black'); 
        this.text3.setFontSize(15); 
        this.text3.tint = 0xF19CB7; 

        this.text4 = this.add.text(638, 105, 'SIGNAL ACTIVATED', {align: 'center'}); 
        this.text4.setFontFamily('Arial Black'); 
        this.text4.setFontSize(15); 
        this.text4.tint = 0xF19CB7; 

        this.text5 = this.add.text(661, 125, 'FOLLOW SIGNAL', {align: 'center'}); 
        this.text5.setFontFamily('Arial Black'); 
        this.text5.setFontSize(15); 
        this.text5.tint = 0xF19CB7; 

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
                    break
            }
        })
    }

    update(){

        this.physics.add.overlap(this.r_ship, this.rec2, ()=>{
            this.scene.start('homeScene'); 
        }, null, this)

        if(cursors.left.isDown){
            this.r_ship.body.setVelocityX(-150); 
            this.leftkey.tint = 0xFACADE; 
            
        } else if(cursors.right.isDown){
            this.r_ship.setVelocityX(150); 
            this.rightkey.tint = 0xFACADE; 
        } else {  
            this.r_ship.setVelocityX(0); 
            this.rightkey.tint = 0xFFFFFF; 
            this.leftkey.tint = 0xFFFFFF; 
        }
        if(cursors.up.isDown){
            this.r_ship.setVelocityY(-170); 
            this.upkey.tint = 0xFACADE; 
            this.r_ship.setVelocityX(0);
        } else{
            this.upkey.tint = 0xFFFFFF; 
        }
    }
} 