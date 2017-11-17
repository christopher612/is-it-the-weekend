var answer = 'NO'

function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw(){
    background('turquoise')
    textSize(32)
    fill('black')
    text('Is it the weekend? ' + answer, 40, 40)
}