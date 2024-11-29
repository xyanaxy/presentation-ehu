let isWhite=false;

function setup() {
  
  // shaders require WEBGL mode to work
  createCanvas(400, 400);
  noStroke();

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
    background('white')
   if(isWhite){
     background('#5c7194')
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
      
      
      let radX=radius+width/(amountX-1)*i+(1-dd)*stime*(1-j%2*2)-mouseX
      let radY=radius+height/(amountY-1)*j+dd*stime*(1-i%2*2)-mouseY
      let dtm=Math.sqrt(radX*radX+radY*radY);
      circle(radius+width/(amountX-1)*i+(1-dd)*stime*(1-j%2*2),radius+height/(amountY-1)*j+dd*stime*(1-i%2*2),dtm)
    }
  }
   
}