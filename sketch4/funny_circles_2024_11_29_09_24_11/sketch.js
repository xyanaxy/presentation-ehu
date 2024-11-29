let isWhite=false;
let theShader;
let shaderTexture;
// a shader variable

function preload(){
  theShader = loadShader('/shader.vert', '/shader.frag');
}

function setup() {
  
  // shaders require WEBGL mode to work
  createCanvas(400, 400, WEBGL);
  noStroke();
  
  shaderTexture = createGraphics(400, 400, WEBGL);
  shaderTexture.noStroke();
  shaderTexture.noStroke();

}

function mouseClicked(){
  isWhite=!isWhite;
}

function step(compare,value){
  if(value<compare){
    return 0;
  }
  if(value>=compare){
    return 1;
  }
}

 function draw(){
   shaderTexture.shader(theShader);

  // here we're using setUniform() to send our uniform values to the shader
  theShader.setUniform("u_resolution", [width*10, height*10]);
  theShader.setUniform("u_time", millis() *0.0004);
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // passing the shaderTexture layer geometry to render on
  shaderTexture.rect(0,0,width,height);
  
   
  
   texture(shaderTexture);
    background('white')
   if(isWhite){
   push();
   rect(-width/2,-height/2,width,height)
   pop();
   }
   
  amountX=20;
  amountY=20;
  frequency=2000;
  radius=10;
  sustime=millis()%frequency/frequency
  stime=millis()%frequency/frequency*width/amountX;
  dd=step(frequency,millis()%(2*frequency))
  
  
  for(i=-1;i<=amountX;i++){
    for(j=-1;j<=amountY;j++){
      
      let huinya=(i+1+((j+1)%2*2-1)*sustime*(1-dd))/amountX
      let huinyaY=(j+1+((i+1)%2*2-1)*sustime*dd)/amountY
      
        fill(255*huinya*mouseX/width,255*huinyaY*mouseY/height,255*(1-mouseX/width*mouseY/height))
      if(isWhite){
        fill('white')
      }
      
      
      
      circle(radius+width/2-width/(amountX-1)*i+(1-dd)*stime*(1-j%2*2),radius+height/2-height/(amountY-1)*j+dd*stime*(1-i%2*2),radius)
    }
  }
   
}