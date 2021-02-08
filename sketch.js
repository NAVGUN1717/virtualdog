//Create variables here
var dogimg1;
var dogimg2;
var dog;
var foodref,foodS;
var database;

function preload()
{
  //load images here
  dogimg1=loadImage("images/dogimg.png")
  dogimg2=loadImage("images/dogimg1.png")
  
}

function setup() {
	createCanvas(500,500);

  database = firebase.database();
  dog=createSprite(300,350)
  dog.addImage(dogimg1)
  dog.scale=0.25
  foodref=database.ref('food');
  foodref.on("value",readFood);
}

function draw() {  
  
 background("lightgreen")
  
  //add styles here
   if(keyWentDown ("space")){
    writefood(foodS)
    dog.addImage(dogimg2)
  }
 
  drawSprites();
  textSize(25);
  text("FOOD:"+foodS,200,50)
}

function readFood(data){

  foodS = data.val();
}
function writefood(food)
{
if(food<=0){
  food=0
}
else
{
  food=food-1
}
database.ref("/").update
(
  {
  food:food
}
)
}


