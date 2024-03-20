class Plain extends Phaser.Scene {
    constructor() {
        super('plainScene')
    }

    create(){
        this.done = false; 
        this.cameras.main.setBackgroundColor('#D5EDF7');  
        
        this.rec1 = this.add.rectangle(0, 505, 1700, 40, 0xB8D0A6, 0.5); 
        this.rec2 = this.add.rectangle(0, 505, 1700, 32); 
        this.physics.add.existing(this.rec2); 
        this.rec2.body.setImmovable(true); 
        
        this.player = this.physics.add.sprite(100, game.config.height-75, 'platformer').setScale(0.75); 
        this.player.body.setGravityY(500); 
        
        this.coin1 = this.physics.add.sprite(100, game.config.height-350, 'coins').setScale(1.5); 
        this.physics.add.existing(this.coin1); 
        this.coin1.body.setImmovable(true); 

        this.rec3 = this.add.rectangle(450, game.config.height-145, 250, 40, 0xB8D0A6, 0.5); 
        this.rec4 = this.add.rectangle(200, game.config.height-270, 350, 40, 0xB8D0A6, 0.5); 
        this.physics.add.existing(this.rec3); 
        this.physics.add.existing(this.rec4); 
        
        this.rec3.body.setImmovable(true); 
        this.rec4.body.setImmovable(true); 

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

        this.physics.add.collider(this.player, this.rec2);
        this.physics.add.collider(this.player, this.rec3); 
        this.physics.add.collider(this.player, this.rec4);  

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
                    break; 
            }
        })
    }

    update(){
        if(this.done == false){
            this.coin1.anims.play('spinning', true); 
        }

        if(coincounter == 1){
            coinextra1.clearTint(); 
        }

        this.physics.add.overlap(this.player, this.coin1, ()=>{
            this.coin1.anims.stop(); 
            this.done = true; 
            //this.sound.play('click')
            if(this.done == true){
                coincounter += 1; 
            }
            this.coin1.destroy(); 
            this.scene.start('narrativeScene'); 
            this.player.stop(); 
        }, null, this)

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
            //this.upkey.tint = 0xFFFFFF; 
        }

        if(cursors.up.isDown && this.player.body.touching.down){
            this.player.anims.play('jump'); 
            this.upkey.tint = 0xFACADE; 
            this.player.setVelocityY(-370)
            this.player.setVelocityX(0);     
            //this.sound.play('jump', {volume: 0.3}); 
        } else {
            this.upkey.tint = 0xFFFFFF; 
        }

        this.physics.world.wrap(this.player); 

    }
     

} 