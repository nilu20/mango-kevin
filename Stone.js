class Stone{
    constructor(x, y, r) {
        var Soptions = {
            
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.5
            
        }
        

        
		   this.r=r
		   this.image=loadImage("sprites/rock.png");
		   this.body=Bodies.circle(x, y, this.r/2, Soptions)
       //this.r=r
		   World.add(world, this.body);

      }
      display(){
        
        push();
       translate( this.body.position.x, this.body.position.y);
       ellipseMode(RADIUS)
        imageMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop();
      }
}