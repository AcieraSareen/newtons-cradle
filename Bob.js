class Bob{
	constructor(x,y,r){
	var options={
        'isStatic':true,
		'restitution' :0.3,
		'friction':0,
		'density' :1.2
	}
    // assign options to the bob
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}
	
	display()
	{
			var bobpos=this.body.position;		
			push()
			translate(bobpos.x, bobpos.y);
            fill("purple");
			strokeWeight(4);
            ellipse(0,0,this.r,this.r);
			pop()
	}

}