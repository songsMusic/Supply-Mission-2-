class Box {
    constructor( width, height) {
      var options = {
          boxY =  20  ; 
          boxPosition = 90 ; 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      fill(255);
      rect(0, 0, this.width, this.height);
      
      } ;