class Dustbin{
    constructor(x,y,width,height){
     var prop={
         isStatic: true
     }

     this.body=Bodies.rectangle(x,y,width,height,prop);
     this.w=width;
     this.h=height;
     this.image = loadImage("dustbingreen.png");
     World.add(world,this.body);
    }
    display(){

      fill("blue")

      rect(this.body.position.x,this.body.position.y,this.w,this.h);
      imageMode(CENTER);
      image(this.image,860,300,200,150);
    }
}