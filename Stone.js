class Stone{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
        }
        this.x=x;
		this.y=y;
        this.r=r
        
	   this.image = loadImage("stone.png");
       this.body = Bodies.circle(this.x, this.y, (this.r-31.1)/2, options);
        
        World.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
      // var angle = this.body.angle
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER)
       //rotate(angle);
       strokeWeight(4);
         fill(255,0,255)                                                             
      // ellipse(0, 0, this.r, this.r);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r)
       pop();
   }
}