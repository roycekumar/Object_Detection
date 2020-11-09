img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45,85);
    textSize(24);
    noFill();
    stroke("#FF0000");;
    rect(30,60,450,350);
    stroke("#4287f5");
    fill("#4287f5");
    text("Cat", 240,110);

    noFill();
    rect(230,70,350,320);
}