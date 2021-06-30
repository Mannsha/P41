class Drop{

    
    constructor(x, y)
    {
        var options = {
            friction: 0.1,
            isStatic: false,
            restitution: 1,
            density: 1,
        }
        this.x = x
        this.y = y

        this.body = Bodies.circle(x,y,3,options)


        //adds body to world, using function "add" in matter.js in World class
        World.add(world, this.body)
       
    }

    update()
    {
        if(this.body.position.y>400)
        {
            Matter.Body.setPosition(this.body, {x: random(0,400), y: 0})
        }
    }

    display()
    {
        ellipseMode(RADIUS)

        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,3,3)
        
    }

    
}