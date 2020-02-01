// create a new scene named "Game"
/* global Phaser */
const gameScene = new Phaser.Scene('Game');
 
// our game's configuration
const config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 640, // game width
  height: 360, // game height
  scene: gameScene // our newly created scene
};
 
// create the game, and pass it the configuration
const game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function() {
 
  // load images
  this.load.image('background', 'assets/background.png');
};
 
// executed once, after assets were loaded
gameScene.create = function() {
 
   // background
  const bg = this.add.sprite(0, 0, 'background');
 
  // change origin to the top-left of the sprite
  bg.setOrigin(0,0)
}