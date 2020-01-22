var hexes = [];
var vectors = [];

console.log(vectors);


function setup(){
  var cnv = createCanvas(windowWidth, windowHeight);
  noStroke();
  cnv.position(0, 0);
  background('#FFF');
  cnv.style('z-index', '-1');
  cnv.style('margin', '0');
  vectors.push({"dx": 1/6*PI, "dy": 1/6*PI, "color": '#83C3CC'},{"dx": 7/6*PI, "dy": 7/6*PI, "color": '#FFBDDF'} )
  // vectors.push({"dx": 1/2*PI, "dy": 1/2*PI, "color": 'blue'})
  // vectors.push({"dx": 5/6*PI, "dy": 5/6*PI, "color": 'cyan'})
  // vectors.push({"dx": 3/2*PI, "dy": 3/2*PI, "color": 'yellow'})
  // vectors.push({"dx": 11/6*PI, "dy": 11/6*PI, "color": 'green'})
  yellow = color(225, 232, 92)
};

function draw(){
  console.log(hexes.length);
  background('#FFF');
  if (frameCount%2 == 0) {
    var i = 0;
    while(i < 10){
      createHexagons();
      i++;
    }
  }
  hexes.forEach(function(hexagon, index, hexes){
    hexagon.display();
    hexagon.live();
    hexagon.move();
    if(hexagon.frameLife == 100){
      hexes.splice(index, 1);
    }
  })
};

var createHexagons = function(){
  console.log("start createhex");
  var hexOne = {"vector": vectors[Math.floor(random(0, vectors.length))],
                "size": random(50, 100),
                "x": random(width),
                "y": random(height),
                "speed": random(5, 10),
                "frameLife": 0,
                "life": 0,
                "rotStart": 0.75,
                "rotEnd": 1,
                "rotC": 0,
                "size": random(10, 20),
                "move": move,
                "live": live,
                "display": display};
  hexes.push(hexOne);
};

var display = function(x, y){
  fill(this.vector.color);
  hexagon(this.x, this.y, this.size, 6);
};

var hexagon = function(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
      endShape(CLOSE);
}

var move = function(){
  var rotationAmount = 2;

  //let it change 1/3 PI over the course of its rotation
  if(this.frameLife > this.rotStart*50 && this.frameLife < this.rotEnd*50){
    this.rotC = ((rotationAmount*1/3/(this.rotEnd*50 - this.rotStart*50))*PI)*(this.frameLife - this.rotStart*50);
  }

  //move the hexagon by its dx and dy, calculated with the cos and sin for their dPI values.
  var speedLifeGradient = 1 + 1*sin((this.frameLife/15)-((1/3)*PI));
  this.x += this.speed*speedLifeGradient*sin(this.vector.dx + this.rotC);
  this.y += this.speed*speedLifeGradient*cos(this.vector.dy + this.rotC);
}


var live = function(){
  this.frameLife +=1;
  if(this.frameLife%50 == 1){
    this.life += 1;
  }
}
