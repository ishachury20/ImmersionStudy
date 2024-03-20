'use strict'

// global variables
let cursors
let coincounter = 0; 
let coinextra1; 
let coinextra2; 
let coinextra3; 

// main game object
let config = {
    parent: 'game-canvas',
    type: Phaser.WEBGL,
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Plain, Sensory, Narrative, Warning, Systemic, World, Home, Credit ]
}

let game = new Phaser.Game(config)