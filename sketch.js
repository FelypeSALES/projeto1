function setup() {
    createCanvas(650,650);
    background("white");
    
  }
  
  function draw () {
    
    
    stroke ("purple");
    fill ("black");
    
    if(mouseIsPressed){
      circle(mouseX, mouseY, 20, 20);
    }
  }