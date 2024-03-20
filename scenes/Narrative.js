class Narrative extends Phaser.Scene {
    constructor() {
        super('narrativeScene')
    }

    create(){
        this.done = false; 
        this.end = false; 
        this.cameras.main.setBackgroundColor('#242526');        
        this.add.sprite(0, 0, 'stars').setScale(2);   

        this.planet1 = this.add.sprite(100, 100, 'planet3').setScale(0.5); 
        this.planet2 = this.add.sprite(800, 500, 'planet2').setScale(0.2);  

        this.group = this.physics.add.group(); 
        this.ship = this.physics.add.sprite(390, 420, 'spaceship') 
        this.back = this.physics.add.sprite(390, 390, 'back').setScale(0.75);  
        this.dome = this.physics.add.sprite(390, 365, 'dome')
        
        this.group.add(this.ship); 
        this.group.add(this.back); 
        this.group.add(this.dome); 

        this.leftkey = this.add.sprite(50, 75, 'arrowkey'); 
        this.rightkey = this.add.sprite(120, 75, 'arrowkey'); 
        this.downkey = this.add.sprite(85, 75, 'arrowkey'); 
        this.upkey = this.add.sprite(85, 40, 'arrowkey'); 
        this.upkey.rotation = Math.PI/2; 
        this.downkey.rotation = Math.PI/2*3; 
        this.rightkey.rotation = Math.PI; 
        this.downkey.tint = 0x626261; 
        this.upkey.tint = 0x626261; 

        let line = 0;

        const message = [
            'YOU ARE A SPACE EXPLORER',
            'TRYING TO FIND ANOTHER GALAXY',
            'BUT SUDDENLY YOU ARE',
            'CAUGHT IN A METEOR SHOWER'
        ];

        const text = this.add.text(400, 300, message[line], { fontFamily: 'Arial Black', fontSize: 30 });
        text.setOrigin(0.5, 3);

        const fx = text.preFX.addReveal();

        this.tweens.add({
            targets: fx,
            progress: 1,
            hold: 300,
            duration: 3000,
            repeat: -1,
            onRepeat: () => {
                line++;
                if (line === message.length)
                {
                    line = 10;
                    this.done = true; 
                }
                text.setText(message[line]);
                //fx.progress = 0;
            }
        });

        //asteriod rain 
        this.meteor1 = this.physics.add.sprite(800, 10, 'meteor').setScale(0.8); 
        this.meteor2 = this.physics.add.sprite(600, 0, 'meteor').setScale(0.8); 
        this.meteor3 = this.physics.add.sprite(300, 0, 'meteor').setScale(0.8); 
        this.meteor4 = this.physics.add.sprite(200, 10, 'meteor').setScale(0.8); 
        this.meteor5 = this.physics.add.sprite(800, 100, 'meteor').setScale(0.8); 
    
       
        //parallax effect 
        this.stars = this.add.tileSprite(10, 10, game.config.width, game.config.height, 'stars').setScale(1.75);  

        cursors = this.input.keyboard.createCursorKeys(); 
        // this.player.body.setDragX(100);

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
        console.log(this.done); 

        if(this.done == true && this.end == false){
            this.meteor1.anims.play('flickering', true); 
            this.meteor1.setVelocityX(-45); 
            this.meteor1.setVelocityY(45); 
            this.meteor2.anims.play('flickering', true); 
            this.meteor2.setVelocityX(-45); 
            this.meteor2.setVelocityY(45); 
            this.meteor3.anims.play('flickering', true); 
            this.meteor3.setVelocityX(-45); 
            this.meteor3.setVelocityY(45); 
            this.meteor4.anims.play('flickering', true); 
            this.meteor4.setVelocityX(-45); 
            this.meteor4.setVelocityY(45); 
            this.meteor5.anims.play('flickering', true); 
            this.meteor5.setVelocityX(-45); 
            this.meteor5.setVelocityY(45); 

            this.physics.world.wrap(this.meteor1); 
            this.physics.world.wrap(this.meteor2);
            this.physics.world.wrap(this.meteor3);
            this.physics.world.wrap(this.meteor4);
            this.physics.world.wrap(this.meteor5);

        } 

        this.physics.add.overlap(this.group, this.meteor1, ()=>{
            this.end = true; 
            this.scene.start('warningScene'); 
            this.meteor1.destroy(); 
            this.meteor2.destroy(); 
            this.meteor3.destroy(); 
            this.meteor4.destroy(); 
            this.meteor5.destroy(); 
        }, null, this)
        
        this.physics.add.overlap(this.group, this.meteor2, ()=>{
            this.end = true; 
            this.scene.start('warningScene'); 
            this.meteor1.destroy(); 
            this.meteor2.destroy(); 
            this.meteor3.destroy(); 
            this.meteor4.destroy(); 
            this.meteor5.destroy(); 
        }, null, this)
        
        this.physics.add.overlap(this.group, this.meteor3, ()=>{
            this.end = true; 
            this.scene.start('warningScene'); 
            this.meteor1.destroy(); 
            this.meteor2.destroy(); 
            this.meteor3.destroy(); 
            this.meteor4.destroy(); 
            this.meteor5.destroy(); 
        }, null, this)
        
        this.physics.add.overlap(this.group, this.meteor4, ()=>{
            this.end = true; 
            this.scene.start('warningScene'); 
            this.meteor1.destroy(); 
            this.meteor2.destroy(); 
            this.meteor3.destroy(); 
            this.meteor4.destroy(); 
            this.meteor5.destroy(); 
        }, null, this)
        
        this.physics.add.overlap(this.group, this.meteor5, ()=>{
            this.end = true; 
            this.scene.start('warningScene'); 
            this.meteor1.destroy(); 
            this.meteor2.destroy(); 
            this.meteor3.destroy(); 
            this.meteor4.destroy(); 
            this.meteor5.destroy(); 
        }, null, this)
        

        this.stars.tilePositionX += 0.25; 
        // if(this.done == false){
        //     this.coin1.anims.play('spinning', true); 
        // }

        // this.physics.add.overlap(this.player, this.coin1, ()=>{
        //     this.coin1.anims.stop(); 
        //     this.done = true; 
        //     if(this.done == true){
        //         coincounter += 1; 
        //     }
        //     this.coin1.destroy(); 
        //     this.scene.start('sensoryScene'); 
        //     this.player.stop(); 
        // }, null, this)

        if(cursors.left.isDown){
            this.group.incX(-5); 
            this.leftkey.tint = 0xFACADE; 
        } 
        else if(cursors.right.isDown){
            this.group.incX(5);      
            this.rightkey.tint = 0xFACADE; 
        } 
        else {
            this.leftkey.tint = 0xFFFFFF;
            this.rightkey.tint = 0xFFFFFF; 
        }
        // else if(cursors.up.isDown){
        //     this.group.incY(-5);   
        // } 
        // else if(cursors.down.isDown){
        //     this.group.incY(5); 
        // }

        this.physics.world.wrap(this.group); 
    }
} 