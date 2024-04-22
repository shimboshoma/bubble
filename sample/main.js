
function preload() {
  console.log("preload!!");
  this.load.image('title_img', 'asset/1.png');
  this.load.image('tut_img', 'asset/2.png');
  this.load.image('game_img', 'asset/3.png');
  this.load.image('result_img', 'asset/4.png');
  this.load.image('end_img', 'asset/5.png');

}

function create() {
  console.log("create!!");

  const title_logo = this.add.image(150, 250, 'title_img');
  title_logo.setDisplaySize(300, 500);
  //const tut_logo = this.add.image(10, 250, 'tut_img');
  //tut_logo.setDisplaySize(300, 500);
  //const game_logo = this.add.image(150, 250, 'game_img');
  //game_logo.setDisplaySize(300, 500);
  //const result_logo = this.add.image(150, 250, 'result_img');
  //result_logo.setDisplaySize(300, 500);
  //const end_logo = this.add.image(150, 250, 'end_img');
  //end_logo.setDisplaySize(300, 500);

}

function update(){
  console.log("update!!");
  const title_logo = this.add.image(150, 250, 'title_img');
  title_logo.setDisplaySize(300, 500);

}

const config = {
  type: Phaser.AUTO,
  width: 300,
  height: 500,
  scene: {
    preload:preload,
    create:create,
    update:update
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
