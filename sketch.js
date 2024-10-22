let y=1
let yeye1=0
let yeye2=0
let RA=2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(105, 172, 219);
  //sun
  fill(252, 252, 3)
   ellipse(350,y + 30,70)
  y= y+0.80;
  if (y > 399)
    {
      y= 1
    }
console.log(y)  
  
  //ground
  fill(52, 105, 57)
  rect(0,300,400,100);
  
//body
  fill(26,48,89)
  ellipse(212,200,150)
  
  
  fill(26, 48, 89)
 ellipse(210,100,90)
  
  //top eyes
  fill(255, 255, 255)
  ellipse(186,90,30)
  ellipse(233,90,30)
  //yeye1= yeye1-0.00001
  yeye1= yeye1+0.05;
  if (yeye1 > 10)
    {
      yeye1= 1
    }
console.log(y) 
  //yeye2= yeye2-0.00001
  yeye2= yeye2+0.05
   if (yeye2 > 24)
    {
      yeye2= 1
    }
console.log(y) 
  
  fill(0, 0, 0)
  ellipse(233,89,17)
  ellipse(187,yeye1+84,17)
  
  
  //middle eyes
  fill(255, 255, 255)
  ellipse(186,185,40)
  ellipse(233,185,40)
  fill(0, 0, 0)
  ellipse(233,yeye2+174,17)
  ellipse(187,185,17)
  //mouth
  fill(153, 24, 69)
  triangle(200,250, 270,220, 200,220)
  
  //legs
  line(230,273,230,300)
  line(200,274,200,300)
  //right arm
  line(300,104,288,200)
  //left arm
  line(100,104,138,200)
  strokeWeight(3)
  
  
}