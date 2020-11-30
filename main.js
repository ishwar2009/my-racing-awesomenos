canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1width=130;
car1height=80;
car1picture="car1.png";
car1x=10;
car1y=10;

car2width=130;
car2height=80;
car2picture="mycar2.jpg";
car2x=10;
car2y=100;

backgroundpicture="racing.jpg";

function add() {
backgroundimgTag=new Image();
backgroundimgTag.onload=uploadbackground;
backgroundimgTag.src=backgroundpicture;

car1imgTag=new Image();
car1imgTag.onload=uploadcar1;
car1imgTag.src=car1picture;

car2imgTag=new Image();
car2imgTag.onload=uploadcar2;
car2imgTag.src=car2picture;
}
function uploadbackground() {
ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1imgTag,car1x,car1y,car1width,car1height);
}

function uploadcar2() {
    ctx.drawImage(car2imgTag,car2x,car2y,car2width,car2height);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='38') {
        car1_up();
        console.log("up arrow key")
    }


if(keypressed=='40') {
    car1_down();
    console.log("down arrow key")
}

if(keypressed=='37') {
    car1_left();
    console.log("left arrow key")
}

if(keypressed=='39') {
    car1_right();
    console.log("right arrow key")
}

if(keypressed=='87') {
    car2_up();
    console.log("W key")
}

if(keypressed=='83') {
    car2_down();
    console.log("S key")
}

if(keypressed=='65') {
    car2_left();
    console.log("A key")
}

if(keypressed=='68') {
    car2_right();
    console.log("D key")
}
      }
      function car1_up(){

      if(car1y>0){
          car1y=car1y-10;
          console.log(car1x,car1y);
          uploadbackground();
          uploadcar1()
          uploadcar2()
        }
    }
      

      function car1_down(){
          if(car1y<500){
              car1y = car1y+10;
              console.log(car1x,car1y)
              uploadbackground();
              uploadcar1();
              uploadcar2();
          }

      }
      function car1_left(){
        if(car1x>0){
            car1x = car1x-10;
            console.log(car1x,car1y)
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }

    }

    function car1_right(){
        if(car1x<700){
            car1x = car1x+10;
            if(car1x>=670){
                if(car2x<670){
                    console.log("Car 1 Won!!!")
                    document.getElementById("gamestatus").innerHTML="Car 1 Won!!!"
                }
                
            }
            console.log(car1x,car1y)
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }
        
            
        }

    

    function car2_up(){

        if(car2y>0){
            car2y=car2y-10;
            console.log(car2x,car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
          }
      }

      function car2_down(){

        if(car2y<500){
            car2y=car2y+10;
            console.log(car2x,car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
          }
      }


      function car2_left(){

        if(car2x>0){
            car2x=car2x-10;
            console.log(car2x,car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
          }
      }    

      function car2_right(){

        if(car2x<700){
            car2x=car2x+10;
            if(car2x>=670){
                if(car1x<670){
                    console.log("Car 2 Won!!!");
                    document.getElementById("gamestatus").innerHTML="Car 2 Won!!!";
                }
            }
            console.log(car2x,car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
          }
      }    

      

      

      

    

