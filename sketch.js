var bg;
var detective,detectiveImg;
var water1,water2,water3,water4,water5;
var thorn,key,head;
var headImg,head1,head2,head3;
var b1;
var openTreasureImg,openTreasure;
var gameState = "intro";
var titleIMG,title;




function preload(){
  bg = loadImage("intro.jpg");
  detectiveImg = loadImage("th.png")
  openTreasureImg = loadImage("openTreasure.png");
  titleIMG = loadImage("Duengeon Master.png");
  headImg = loadImage("head.jpg");
}
function setup() {
  createCanvas(1000,800);

   b1 = createImg("button.png");
   b1.position(400,400);
   b1.size(60,60);
   b1.mouseClicked(level1);

  title = createSprite(500,100);
  title.addImage(titleIMG);
  title.scale = 1.2;

   detective = createSprite(680,115,50,50);
   detective.addImage(detectiveImg);
   detective.scale = 0.1;

}
function draw() {
  background(bg); 
  



  drawSprites();
}

function level1(){
  bg = loadImage("level1.jpg");

  title.visible = false;
  b1.position(0,0);
  b1.size (0,0);

  water1 = createSprite(880,150,120,150);
  water1.visible = false;
 
  water2 = createSprite(735,35,410,80 );
  water2.visible = false;

  water3 = createSprite(794,330,175,80 );
  water3.visible = false;

  water4 = createSprite(706,265,355,60 );
  water4.visible = false;

  water5 = createSprite(852,225,60,20 );
  water5.visible = false;

  thorn = createSprite(267,542,65,65);
  thorn.visible = false;
  
  key = createSprite(440,40,50,50)
  key.visible = false;

  head = createSprite(735,610,50,50)
  head.visible = false;

  openTreasure = createSprite(95,600,50,50);
  openTreasure.visible = false;

   head1 = createSprite(850,680,20,20);
   head1.addImage(headImg);
   head1.scale = 1;

   head2 = createSprite(445,180,20,20);
   head2.addImage(headImg);
   head2.scale = 1;

   head3 = createSprite(150,690,20,20);
   head3.addImage(headImg);
   head3.scale = 1;

    if(keyDown("space")){
      detective.y = detective.y + 5;
    }

}

function level2(){

  bg = loadImage("l2.jpg");

} 