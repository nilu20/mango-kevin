class Mango{
    constructor(x, y, r) {
        var Moptions = {
          isStatic:true,
         density:2,
                friction :1,
        }
        this.x=x;
		    this.y=y;
        this.r= r
        this.body=Bodies.circle(this.x, this.y, this.r/2, Moptions);
        this.width = width;
        this.height = height;
       
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
          imageMode(CENTER);
          ellipseMode(RADIUS)
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}