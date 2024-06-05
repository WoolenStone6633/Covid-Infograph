var mousePos;
var pos;
var target;
var vel;
var drag;
var strength;
var overLine;
var overMap;
var overBar;

function preload() {
  death = loadImage("Images/Death.png");
  covid = loadImage("Images/Covid.png");
  mask = loadImage("Images/Mask.png");
  usa = loadImage("Images/USA map.png");
}

function setup() {
  createCanvas(774, 619);

  overLine = false;
  overMap = false;
  overBar = false;

  pos = [];
  mousePos = new p5.Vector(0, 0);
  for (let i = 1; i <= 65; i++) {
    pos[i] = new p5.Vector(0, 0);
  }
  target = new p5.Vector(0, 0);
  vel = new p5.Vector(0, 0);
  drag = 0.60;
  strength = 0.14;
}

function draw() {
  background(255);

  image(death, 13, 472, 144, 144);
  image(covid, 315, 472, 144, 144);
  image(mask, 617, 472, 144, 144)

  noStroke();
  lineGraphs();
  mapGraphs();
  barGraphs();





  if (overLine == true) {
    dotLineGraph();
  } else if (overMap == true) {
    dotMapGraph();
  } else if (overBar == true) {
    dotBarGraph();
  } else {
    for (let i = 1; i <= 65; i++) {
      fill(0);
      dot(drag, strength, pos[i]);
    }
  }
}

function dot(drag, strength, pos, x = mouseX, y = mouseY, r = 11) {
  mousePos.set(x, y);
  target = mousePos;

  let force = p5.Vector.sub(target, pos);
  force = force.mult(strength);
  vel = vel.mult(drag);
  vel = vel.add(force);
  pos = pos.add(vel);

  ellipse(pos.x, pos.y, r)
}

function lineGraphs() {
  overLine = false;
  let x = 85;
  let y = 544;
  let rad = 144;

  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    overLine = true;
  }
}

function mapGraphs() {
  overMap = false;
  let x = 387;
  let y = 544;
  let rad = 144;

  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    overMap = true;
  }
}

function barGraphs() {
  overBar = false;
  let x = 689;
  let y = 544;
  let rad = 144;

  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    overBar = true;
  }
}

function dotLineGraph() {
  fill(222, 99, 100);
  dragg = 0.01;
  dot(dragg, strength, pos[1], 69, 393);
  dot(dragg, strength, pos[2], 85, 393);
  dot(dragg, strength, pos[3], 100, 394);
  dot(dragg, strength, pos[4], 116, 394);
  dot(dragg, strength, pos[5], 131, 387);
  dot(dragg, strength, pos[6], 143, 374);
  dot(dragg, strength, pos[7], 151, 357);
  dot(dragg, strength, pos[8], 156, 339);
  dot(dragg, strength, pos[9], 161, 320);
  dot(dragg, strength, pos[10], 164, 302);
  dot(dragg, strength, pos[11], 169, 284);
  dot(dragg, strength, pos[12], 172, 266);
  dot(dragg, strength, pos[13], 175, 248);
  dot(dragg, strength, pos[14], 178, 230);
  dot(dragg, strength, pos[15], 181, 214);
  dot(dragg, strength, pos[16], 184, 196);
  dot(dragg, strength, pos[17], 188, 178);
  dot(dragg, strength, pos[18], 195, 162);
  dot(dragg, strength, pos[19], 211, 157);
  dot(dragg, strength, pos[20], 222, 168);
  dot(dragg, strength, pos[21], 228, 184);
  dot(dragg, strength, pos[22], 237, 200);
  dot(dragg, strength, pos[23], 249, 214);
  dot(dragg, strength, pos[24], 262, 227);
  dot(dragg, strength, pos[25], 275, 240);
  dot(dragg, strength, pos[26], 288, 249);
  dot(dragg, strength, pos[27], 299, 262);
  dot(dragg, strength, pos[28], 311, 253);
  dot(dragg, strength, pos[29], 327, 250);
  dot(dragg, strength, pos[30], 342, 244);
  dot(dragg, strength, pos[31], 350, 230);
  dot(dragg, strength, pos[32], 363, 237);
  dot(dragg, strength, pos[33], 375, 245);
  dot(dragg, strength, pos[34], 390, 237);
  dot(dragg, strength, pos[35], 403, 227);
  dot(dragg, strength, pos[36], 414, 217);
  dot(dragg, strength, pos[37], 421, 203);
  dot(dragg, strength, pos[38], 423, 186);
  dot(dragg, strength, pos[39], 436, 181);
  dot(dragg, strength, pos[40], 446, 194);
  dot(dragg, strength, pos[41], 461, 194);
  dot(dragg, strength, pos[42], 472, 182);
  dot(dragg, strength, pos[43], 486, 186);
  dot(dragg, strength, pos[44], 489, 203);
  dot(dragg, strength, pos[45], 504, 209);
  dot(dragg, strength, pos[46], 519, 212);
  dot(dragg, strength, pos[47], 527, 196);
  dot(dragg, strength, pos[48], 541, 198);
  dot(dragg, strength, pos[49], 546, 214);
  dot(dragg, strength, pos[50], 561, 215);
  dot(dragg, strength, pos[51], 575, 210);
  dot(dragg, strength, pos[52], 586, 198);
  dot(dragg, strength, pos[53], 601, 204);
  dot(dragg, strength, pos[54], 611, 216);
  dot(dragg, strength, pos[55], 624, 205);
  dot(dragg, strength, pos[56], 635, 192);
  dot(dragg, strength, pos[57], 645, 175);
  dot(dragg, strength, pos[58], 652, 158);
  dot(dragg, strength, pos[59], 655, 139);
  dot(dragg, strength, pos[60], 661, 121);
  dot(dragg, strength, pos[61], 670, 104);
  dot(dragg, strength, pos[62], 679, 88);
  dot(dragg, strength, pos[63], 686, 72);
  dot(dragg, strength, pos[64], 693, 55);
  dot(dragg, strength, pos[65], 704, 43);
  textSize(15);
  fill(0);
  text("Nov 30", 668, 419);
  text("Sep 27", 545, 419);
  text("Aug 8", 438, 419);
  text("Jun 19", 324, 419);
  text("Apr 30", 214, 419);
  text("2,000", 21, 332);
  text("4,000", 21, 262);
  text("6,000", 21, 193);
  text("8,000", 21, 124);
  text("10,000", 12, 55);
}

function dotMapGraph() {
  image(usa, 13, -2, 764, 620);
  fill(0);
  dragg = 0.01;
  dot(dragg, strength, pos[1], 118, 389, 48);
  dot(dragg, strength, pos[2], 154, 388, 10);
  dot(dragg, strength, pos[3], 140, 352, 19);
  dot(dragg, strength, pos[4], 196, 433, 15);
  dot(dragg, strength, pos[5], 114, 41, 16);
  dot(dragg, strength, pos[6], 174, 42, 21);
  dot(dragg, strength, pos[7], 105, 100, 22);
  dot(dragg, strength, pos[8], 164, 85, 30);
  dot(dragg, strength, pos[9], 234, 74, 43);
  dot(dragg, strength, pos[10], 209, 129, 16);
  dot(dragg, strength, pos[11], 94, 155, 52);
  dot(dragg, strength, pos[12], 167, 130, 25);
  dot(dragg, strength, pos[13], 149, 177, 36);
  dot(dragg, strength, pos[14], 104, 220, 20);
  dot(dragg, strength, pos[15], 140, 270, 27);
  dot(dragg, strength, pos[16], 184, 237, 24);
  dot(dragg, strength, pos[17], 191, 302, 30);
  dot(dragg, strength, pos[18], 213, 178, 27);
  dot(dragg, strength, pos[19], 235, 231, 19);
  dot(dragg, strength, pos[20], 249, 304, 31);
  dot(dragg, strength, pos[21], 259, 145, 30);
  dot(dragg, strength, pos[22], 292, 73, 31);
  dot(dragg, strength, pos[23], 285, 177, 19);
  dot(dragg, strength, pos[24], 297, 217, 23);
  dot(dragg, strength, pos[25], 290, 264, 31);
  dot(dragg, strength, pos[26], 293, 431, 15);
  dot(dragg, strength, pos[27], 320, 327, 60);
  dot(dragg, strength, pos[28], 332, 133, 34);
  dot(dragg, strength, pos[29], 342, 214, 31);
  dot(dragg, strength, pos[30], 360, 82, 45);
  dot(dragg, strength, pos[31], 360, 261, 31);
  dot(dragg, strength, pos[32], 369, 409, 19);
  dot(dragg, strength, pos[33], 365, 172, 24);
  dot(dragg, strength, pos[34], 374, 362, 27);
  dot(dragg, strength, pos[35], 383, 312, 21);
  dot(dragg, strength, pos[36], 394, 216, 27);
  dot(dragg, strength, pos[37], 407, 276, 18);
  dot(dragg, strength, pos[38], 418, 142, 50);
  dot(dragg, strength, pos[39], 416, 342, 16);
  dot(dragg, strength, pos[40], 423, 78, 34);
  dot(dragg, strength, pos[41], 448, 259, 24);
  dot(dragg, strength, pos[42], 452, 215, 26);
  dot(dragg, strength, pos[43], 456, 342, 21);
  dot(dragg, strength, pos[44], 469, 301, 22);
  dot(dragg, strength, pos[45], 480, 174, 30);
  dot(dragg, strength, pos[46], 481, 107, 20);
  dot(dragg, strength, pos[47], 514, 327, 21);
  dot(dragg, strength, pos[48], 525, 267, 29);
  dot(dragg, strength, pos[49], 525, 211, 33);
  dot(dragg, strength, pos[50], 536, 148, 31);
  dot(dragg, strength, pos[51], 563, 308, 18);
  dot(dragg, strength, pos[52], 577, 235, 26);
  dot(dragg, strength, pos[53], 591, 165, 28);
  dot(dragg, strength, pos[54], 593, 347, 20);
  dot(dragg, strength, pos[55], 602, 284, 14);
  dot(dragg, strength, pos[56], 619, 400, 27);
  dot(dragg, strength, pos[57], 630, 254, 20);
  dot(dragg, strength, pos[58], 628, 216, 17);
  dot(dragg, strength, pos[59], 642, 171, 23);
  dot(dragg, strength, pos[60], 640, 123, 19);
  dot(dragg, strength, pos[61], 663, 91, 13);
  dot(dragg, strength, pos[62], 676, 121, 14);
  dot(dragg, strength, pos[63], 693, 80, 13);
  dot(dragg, strength, pos[64], 699, 45, 10);
  dot(dragg, strength, pos[65], 714, 65, 10);
}

function dotBarGraph() {
  fill(222, 99, 100);
  dragg = 0.01;
  dot(dragg, strength, pos[1], 142, 390);
  dot(dragg, strength, pos[2], 142, 383);
  dot(dragg, strength, pos[3], 142, 376);
  dot(dragg, strength, pos[4], 142, 369);
  dot(dragg, strength, pos[5], 142, 361);
  dot(dragg, strength, pos[6], 142, 354);
  dot(dragg, strength, pos[7], 142, 347);
  dot(dragg, strength, pos[8], 142, 340);
  dot(dragg, strength, pos[9], 142, 332);
  dot(dragg, strength, pos[10], 142, 325);
  dot(dragg, strength, pos[11], 142, 318);
  dot(dragg, strength, pos[12], 142, 310);
  dot(dragg, strength, pos[13], 142, 302);
  dot(dragg, strength, pos[14], 269, 390);
  dot(dragg, strength, pos[15], 269, 371);
  dot(dragg, strength, pos[16], 269, 352);
  dot(dragg, strength, pos[17], 269, 333);
  dot(dragg, strength, pos[18], 269, 314);
  dot(dragg, strength, pos[19], 269, 295);
  dot(dragg, strength, pos[20], 269, 277);
  dot(dragg, strength, pos[21], 269, 258);
  dot(dragg, strength, pos[22], 269, 239);
  dot(dragg, strength, pos[23], 269, 220);
  dot(dragg, strength, pos[24], 269, 201);
  dot(dragg, strength, pos[25], 269, 182);
  dot(dragg, strength, pos[26], 269, 163);
  dot(dragg, strength, pos[27], 397, 390);
  dot(dragg, strength, pos[28], 397, 375);
  dot(dragg, strength, pos[29], 397, 360);
  dot(dragg, strength, pos[30], 397, 345);
  dot(dragg, strength, pos[31], 397, 330);
  dot(dragg, strength, pos[32], 397, 315);
  dot(dragg, strength, pos[33], 397, 300);
  dot(dragg, strength, pos[34], 397, 285);
  dot(dragg, strength, pos[35], 397, 270);
  dot(dragg, strength, pos[36], 397, 255);
  dot(dragg, strength, pos[37], 397, 240);
  dot(dragg, strength, pos[38], 397, 225);
  dot(dragg, strength, pos[39], 397, 210);
  dot(dragg, strength, pos[40], 520, 390);
  dot(dragg, strength, pos[41], 520, 387);
  dot(dragg, strength, pos[42], 520, 384);
  dot(dragg, strength, pos[43], 520, 381);
  dot(dragg, strength, pos[44], 520, 378);
  dot(dragg, strength, pos[45], 520, 376);
  dot(dragg, strength, pos[46], 520, 373);
  dot(dragg, strength, pos[47], 520, 370);
  dot(dragg, strength, pos[48], 520, 367);
  dot(dragg, strength, pos[49], 520, 365);
  dot(dragg, strength, pos[50], 520, 362);
  dot(dragg, strength, pos[51], 520, 358);
  dot(dragg, strength, pos[52], 520, 355);
  dot(dragg, strength, pos[53], 678, 390);
  dot(dragg, strength, pos[54], 678, 366);
  dot(dragg, strength, pos[55], 678, 342);
  dot(dragg, strength, pos[56], 678, 317);
  dot(dragg, strength, pos[57], 678, 293);
  dot(dragg, strength, pos[58], 678, 269);
  dot(dragg, strength, pos[59], 678, 245);
  dot(dragg, strength, pos[60], 678, 220);
  dot(dragg, strength, pos[61], 678, 196);
  dot(dragg, strength, pos[62], 678, 171);
  dot(dragg, strength, pos[63], 678, 147);
  dot(dragg, strength, pos[64], 678, 123);
  dot(dragg, strength, pos[65], 678, 99);
  textSize(18);
  fill(0);
  text("Massachusetts", 615, 422);
  text("Wyoming", 483, 422);
  text("Utah", 378, 422);
  text("Texas", 246, 422);
  text("Iowa", 124, 422);
  text("70", 18, 323);
  text("80", 18, 232);
  text("90", 18, 141);
  text("100", 18, 50);
}



