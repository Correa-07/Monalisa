function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('#800000');
  fill('#00BCD4');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300); // rosto
  fill('white');
  circle(150, 150, 60); // olho esquerdo
  circle(250,150, 60); // olho direito
  strokeWeight(4);
  stroke('black');
  line(140, 250, 250, 260); // boca
  fill('#3F51B5');
  stroke('green');
  line(112, 117, 170, 120); // sobrancelha esquerda
  line(226, 110, 275, 112); // sobrancelha direita
  triangle(200, 180, 220, 210, 170, 210); // nariz
  //circle(150, 150, 10); // pupila esquerda
  //circle(250, 150, 10); // pupila direita
  
  olhoX = map(mouseX, 0, 400, 130, 160);
  olhoY = map(mouseY, 0, 400, 130, 160);
  
  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); // nova pupila direita
  if(mouseIsPressed){
    console.log(mouseX, mouseY);
  }
}
