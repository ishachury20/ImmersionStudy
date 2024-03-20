class Sensory extends Phaser.Scene {
    constructor() {
        super('sensoryScene')
    }

    create(){
        this.done = false; 
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0,0); 
        this.flag = false; 
      

        this.ground = this.add.sprite(315, game.config.height-35, 'ground').setScale(0.75)
        this.ground2 = this.add.sprite(550, game.config.height-35, 'ground').setScale(0.75); 
        this.rec1 = this.add.rectangle(0, 505, 1700, 40);
        this.physics.add.existing(this.rec1); 
        this.rec1.body.setImmovable(true); 

        this.cloud1 = this.physics.add.sprite(105, 70, 'clouds').setScale(1.25); 
        this.cloud1.body.setVelocityX(-25); 
        
        // this.add.particles(100, 100, 'leaves', {
        //     speedY: {min: 15, max: 40}, 
        //     gravityY: 0, 
        //     scale: 0.25, 
        //     quantity: 1, 
        //     frequency: 1000, 
        //     lifespan: {min: 28000, max: 30000}, 
        //     emitZone: {source: new Phaser.Geom.Line(700, 0, 0, 800)}
        // })

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

        coinextra1 = this.physics.add.sprite(695, 75, 'coins').setScale(1.5); //35 
        coinextra1.tint = 0xABABAB;  
        coinextra2 = this.physics.add.sprite(730, 75, 'coins').setScale(1.5); //35 
        coinextra2.tint = 0xABABAB;  
        coinextra3 = this.physics.add.sprite(765, 75, 'coins').setScale(1.5); //35 
        coinextra3.tint = 0xABABAB;  

        this.text1 = this.add.text(285, 39, 'COMPLETE TASK:', {align: 'center'}); 
        this.text1.setFontFamily('Arial Black'); 
        this.text1.setFontSize(22); 
        this.text1.tint = 0xE796B0;

        this.text = this.add.text(175, 65, 'COLLECT ALL THREE COINS TO REPAIR SHIP', {align: 'center'}); 
        this.text.setFontFamily('Arial Black'); 
        this.text.setFontSize(18); 
        this.text.tint = 0xF19CB7; 

        this.damagedship = this.physics.add.sprite(50, game.config.height-40, 'd-ship').setScale(0.8); 

        this.player = this.physics.add.sprite(100, game.config.height-80, 'platformer').setScale(0.75); 
        this.player.body.setGravityY(500); 

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

        this.coin2 = this.physics.add.sprite(100, game.config.height-350, 'coins').setScale(1.5); 
        this.coin2.body.setImmovable(true); 

        this.physics.add.collider(this.player, this.rec1); 
        this.physics.add.collider(this.player, this.rec2); 
        this.physics.add.collider(this.player, this.rec3); 


        cursors = this.input.keyboard.createCursorKeys(); 
        this.player.body.setDragX(100);

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
        if(this.done == false){
            this.coin2.anims.play('spinning', true); 
        }

        if(this.flag == true){
            this.coin3.anims.play('spinning', true); 
        }

        if(coincounter == 1){
            coinextra1.clearTint(); 
        }
        if(coincounter == 2){
            coinextra2.clearTint();
        }
        if(coincounter == 3){
            coinextra3.clearTint(); 
        }

        this.physics.add.overlap(this.player, this.coin2, ()=>{
            this.coin2.anims.stop(); 
            this.done = true; 
            if(this.done == true){
                this.flag = true; 
                coincounter += 1; 
                this.coin3 = this.physics.add.sprite(500, game.config.height-250, 'coins').setScale(1.5); 
                this.coin3.anims.play('spinning', true);    
            }
            this.coin2.destroy(); 
            //
        }, null, this)

        this.physics.add.overlap(this.player, this.coin3, ()=>{
            this.flag = false; 
            this.coin3.anims.stop(); 
            if(this.done == true){
                coincounter += 1; 
                //this.scene.start('systemicScene')
            }
            this.coin3.destroy(); 
            //
        }, null, this)

        if(coincounter == 3){
            this.scene.start('systemicScene'); 
        }

        if(cursors.left.isDown){
            this.player.body.setVelocityX(-150); 
            this.leftkey.tint = 0xFACADE; 
            this.player.setFlipX(true); 
            this.player.anims.play('walk', true); 
            if(!this.player.body.touching.down){
                this.player.anims.play('jump'); 
            }
        } 
        else if(cursors.right.isDown){
            this.player.setVelocityX(150); 
            this.rightkey.tint = 0xFACADE; 
            this.player.setFlip(false); 
            this.player.anims.play('walk', true);  
            if(!this.player.body.touching.down){
                this.player.anims.play('jump'); 
            }
        } else {  
            this.player.setVelocityX(0); 
            this.player.anims.play('idle');  
            this.leftkey.tint = 0xFFFFFF;
            this.rightkey.tint = 0xFFFFFF;  
        }

        if(cursors.up.isDown && this.player.body.touching.down){
            this.player.anims.play('jump'); 
            this.upkey.tint = 0xFACADE; 
            this.player.setVelocityY(-370)
            this.player.setVelocityX(0);
        } else {
            this.upkey.tint = 0xFFFFFF; 
        }

        this.physics.world.wrap(this.player); 
        this.physics.world.wrap(this.cloud1)
        this.physics.world.wrap(this.cloud2)
    }

} 
